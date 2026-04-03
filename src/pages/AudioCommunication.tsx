import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";

const AudioCommunication = () => (
  <div className="min-h-screen bg-background text-foreground">
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
        <section className="glass-card p-8">
          <h2 className="font-display text-xl font-semibold mb-1">The Power of Tone in Communication</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Theme: Communication Through Voice and Expression
          </p>
        </section>

        <section className="glass-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Description – Audio Message</h2>
          <p className="text-muted-foreground leading-relaxed">
            This audio entry focuses on how communication is influenced not just by words, but by
            tone, pitch, and delivery. It demonstrates how the same message can be interpreted
            differently depending on how it is spoken.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In this piece, I present a simple scenario where a message like "Okay, I understand" is
            delivered in different tones—neutral, frustrated, and sarcastic. Each variation changes
            the meaning of the sentence, even though the words remain the same.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This highlights how audio communication carries emotional context that written
            communication often lacks. Elements such as voice modulation, pauses, and emphasis play
            a crucial role in ensuring that the intended message is understood correctly.
          </p>
        </section>

        <section className="glass-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">🎵 Listen to the Audio</h2>
          <audio controls className="w-full" preload="auto">
            <source src="/audio/audio-communication.opus" type="audio/ogg; codecs=opus" />
            <source src="/audio/audio-communication.opus" type="audio/opus" />
            <source src="/audio/audio-communication.opus" type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </section>

        <section className="glass-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Reflection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Through this entry, I learned that effective communication is not only about choosing
            the right words but also about how those words are delivered. Tone and expression can
            completely change interpretation and impact.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This experience helped me become more aware of my speaking style and the importance of
            clarity, confidence, and emotional control while communicating verbally.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Overall, this entry reflects my understanding of audio communication as a powerful tool
            for conveying meaning, building connections, and avoiding misunderstandings.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default AudioCommunication;
