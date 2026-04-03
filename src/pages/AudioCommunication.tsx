import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Image, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./AudioCommunication.css";

const toneImpactData = [
  { tone: "Neutral", clarity: 82, empathy: 68, tension: 24 },
  { tone: "Frustrated", clarity: 55, empathy: 21, tension: 86 },
  { tone: "Sarcastic", clarity: 42, empathy: 18, tension: 79 },
];

const formatTime = (time: number) => {
  if (!Number.isFinite(time) || time <= 0) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const AudioCommunication = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const frequencyDataRef = useRef<Uint8Array | null>(null);
  const analyserUnavailableRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.65);

  const progressPercent = useMemo(() => {
    if (!duration) return 0;
    return (currentTime / duration) * 100;
  }, [currentTime, duration]);

  const volumePercent = useMemo(() => Math.round(volume * 100), [volume]);

  const resetDots = useCallback(() => {
    dotRefs.current.forEach((dot) => {
      if (!dot) return;
      dot.style.transform = "translateY(0px) scale(1)";
      dot.style.opacity = "0.58";
    });
  }, []);

  const stopDotAnimation = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    resetDots();
  }, [resetDots]);

  const ensureAudioAnalyser = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || typeof window === "undefined" || analyserUnavailableRef.current) {
      return false;
    }

    try {
      if (!audioContextRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as Window & { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext;

        if (!AudioContextClass) {
          analyserUnavailableRef.current = true;
          return false;
        }

        const context = new AudioContextClass();
        const analyser = context.createAnalyser();
        analyser.fftSize = 128;
        analyser.smoothingTimeConstant = 0.84;

        let sourceNode: MediaElementAudioSourceNode;
        try {
          sourceNode = context.createMediaElementSource(audio);
        } catch {
          analyserUnavailableRef.current = true;
          void context.close();
          return false;
        }

        sourceNode.connect(analyser);
        analyser.connect(context.destination);

        audioContextRef.current = context;
        analyserRef.current = analyser;
        sourceNodeRef.current = sourceNode;
        frequencyDataRef.current = new Uint8Array(analyser.frequencyBinCount);
      }

      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }

      return true;
    } catch {
      analyserUnavailableRef.current = true;
      return false;
    }
  }, []);

  const startDotAnimation = useCallback(() => {
    const analyser = analyserRef.current;
    const data = frequencyDataRef.current;
    if (rafRef.current !== null) return;

    const tick = () => {
      const activeDots = dotRefs.current.filter(
        (dot): dot is HTMLSpanElement => dot !== null,
      );

      if (activeDots.length === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!analyser || !data) {
        // Fallback motion if analyser cannot be initialized; playback still works.
        const t = performance.now() * 0.0035;
        activeDots.forEach((dot, index) => {
          const energy = 0.22 + Math.abs(Math.sin(t + index * 0.42)) * 0.38;
          const lift = energy * 10;
          const scale = 0.85 + energy * 0.6;
          const alpha = 0.42 + energy * 0.44;
          dot.style.transform = `translateY(${-lift}px) scale(${scale})`;
          dot.style.opacity = `${alpha}`;
        });
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      analyser.getByteFrequencyData(data);

      if (activeDots.length > 0) {
        const maxBinIndex = data.length - 1;

        activeDots.forEach((dot, index) => {
          const ratio = index / Math.max(1, activeDots.length - 1);
          const binIndex = Math.round(ratio * maxBinIndex);
          const nextBinIndex = Math.min(maxBinIndex, binIndex + 1);

          const energy = (data[binIndex] + data[nextBinIndex]) / (255 * 2);
          const lift = energy * 15;
          const scale = 0.75 + energy * 0.95;
          const alpha = 0.4 + energy * 0.6;

          dot.style.transform = `translateY(${-lift}px) scale(${scale})`;
          dot.style.opacity = `${alpha}`;
        });
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        void ensureAudioAnalyser();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  }, [ensureAudioAnalyser]);

  const handleSeek = useCallback((nextValue: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = nextValue;
    setCurrentTime(nextValue);
  }, []);

  const handleVolume = useCallback((nextVolume: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clamped = Math.max(0, Math.min(1, nextVolume));
    audio.volume = clamped;
    audio.muted = clamped === 0;
    setVolume(clamped);
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.volume > 0.01) {
      handleVolume(0);
      return;
    }
    handleVolume(0.65);
  }, [handleVolume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);

      stopDotAnimation();

      sourceNodeRef.current?.disconnect();
      analyserRef.current?.disconnect();

      sourceNodeRef.current = null;
      analyserRef.current = null;
      frequencyDataRef.current = null;

      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [stopDotAnimation]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    let cancelled = false;

    const syncDotsWithAudio = async () => {
      if (!isPlaying) {
        stopDotAnimation();
        return;
      }

      try {
        await ensureAudioAnalyser();
        if (!cancelled) {
          startDotAnimation();
        }
      } catch {
        stopDotAnimation();
      }
    };

    void syncDotsWithAudio();

    return () => {
      cancelled = true;
    };
  }, [ensureAudioAnalyser, isPlaying, startDotAnimation, stopDotAnimation]);

  return (
    <div
      className="min-h-screen bg-background bg-cover bg-center bg-fixed text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--background) / 0.55), hsl(var(--background) / 0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Image size={22} className="text-primary" />
          </div>
          <span className="text-3xl">🎧</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-2">
          Audio <span className="gradient-text">Communication</span>
        </h1>

        <div className="space-y-8 mt-10">
          <section className="glass-card liquid-button-card p-8">
            <h2 className="font-display text-xl font-semibold mb-1">
              The Power of Tone in Communication
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Theme: Communication Through Voice and Expression
            </p>
          </section>

          <section className="glass-card liquid-button-card p-8 space-y-4">
            <h2 className="font-display text-xl font-semibold">
              Description – Audio Message
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This audio entry focuses on how communication is influenced not just by
              words, but by tone, pitch, and delivery. It demonstrates how the same
              message can be interpreted differently depending on how it is spoken.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In this piece, I present a simple scenario where a message like "Okay,
              I understand" is delivered in different tones neutral, frustrated, and
              sarcastic. Each variation changes the meaning of the sentence, even
              though the words remain the same.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This highlights how audio communication carries emotional context that
              written communication often lacks. Elements such as voice modulation,
              pauses, and emphasis play a crucial role in ensuring that the intended
              message is understood correctly.
            </p>
          </section>

          <section className="audio-showcase cursor-target">
            <div className="audio-showcase__dots" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={`dot-${index}`}
                  ref={(node) => {
                    dotRefs.current[index] = node;
                  }}
                  className="audio-showcase__dot"
                />
              ))}
            </div>

            <p className="audio-showcase__meta">AUDIO PRESENTATION · AYUSH SAHU</p>

            <button
              type="button"
              onClick={togglePlay}
              className="audio-showcase__play cursor-target"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? <Pause size={34} /> : <Play size={34} className="ml-1" />}
            </button>

            <div className="audio-showcase__timeline">
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={(event) => handleSeek(Number(event.target.value))}
                className="audio-showcase__progress cursor-target"
                style={{ "--audio-progress": `${progressPercent}%` } as React.CSSProperties}
                aria-label="Playback progress"
              />
              <div className="audio-showcase__time">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="audio-showcase__volume">
              <Volume2 size={15} className="audio-showcase__volume-icon opacity-75" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(event) => handleVolume(Number(event.target.value))}
                className="audio-showcase__volume-range cursor-target"
                style={{ "--audio-volume": `${volumePercent}%` } as React.CSSProperties}
                aria-label="Volume"
              />
              <button
                type="button"
                onClick={toggleMute}
                className="audio-showcase__mute cursor-target"
                aria-label={volume <= 0.01 ? "Unmute" : "Mute"}
              >
                {volume <= 0.01 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            <audio ref={audioRef} src="/audio/audio-communication.opus" preload="auto" />
          </section>

          <section className="glass-card liquid-button-card p-8 space-y-5">
            <h2 className="font-display text-xl font-semibold">Tone Impact Graph</h2>
            <p className="text-sm text-muted-foreground">
              Illustrative comparison of how tone can shift message clarity, empathy, and
              perceived tension.
            </p>
            <div className="h-80 w-full rounded-xl bg-background/40 p-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={toneImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="tone" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 32, 0.94)",
                      border: "1px solid rgba(52, 211, 153, 0.4)",
                      color: "#d7f8ee",
                      borderRadius: "12px",
                      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.35)",
                    }}
                    itemStyle={{ color: "#d7f8ee", fontWeight: 600 }}
                    labelStyle={{ color: "#a6eed5" }}
                    wrapperStyle={{ outline: "none" }}
                  />
                  <Legend />
                  <Bar dataKey="clarity" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="empathy" fill="hsl(195 80% 56%)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="tension" fill="hsl(28 90% 63%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="glass-card liquid-button-card p-8 space-y-4">
            <h2 className="font-display text-xl font-semibold">Reflection</h2>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Purpose:</span> to highlight
                how vocal delivery changes meaning even when the words stay the same.
              </p>
              <p>
                <span className="text-foreground font-medium">Target audience:</span>{" "}
                learners and teams that communicate in presentations, meetings, and voice
                notes.
              </p>
              <p>
                <span className="text-foreground font-medium">Theme connection:</span> this
                entry treats communication as an oral/aural experience shaped by tone and
                emotion.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Through this entry, I learned that effective communication is not only
              about choosing the right words but also about how those words are
              delivered. Tone and expression can completely change interpretation and
              impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This experience helped me become more aware of my speaking style and the
              importance of clarity, confidence, and emotional control while
              communicating verbally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Overall, this entry reflects my understanding of audio communication as a
              powerful tool for conveying meaning, building connections, and avoiding
              misunderstandings.
            </p>
          </section>

          <section className="glass-card liquid-button-card p-8 space-y-5">
            <h2 className="font-display text-xl font-semibold">Audio References</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-border/70 bg-background/35">
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1280&auto=format&fit=crop"
                  alt="Studio microphone setup representing oral communication."
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-3 text-xs text-muted-foreground">
                  Voice delivery depends on tone, pitch, and pacing.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-border/70 bg-background/35">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1280&auto=format&fit=crop"
                  alt="Audio waveform style setup showing expressive voice communication."
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-3 text-xs text-muted-foreground">
                  Audio cues add emotional context that text often misses.
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AudioCommunication;
