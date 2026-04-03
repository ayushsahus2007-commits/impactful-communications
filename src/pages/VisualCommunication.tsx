import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";

const VisualCommunication = () => (
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
        <span className="text-3xl">🎨</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-2">
        Visual <span className="gradient-text">Communication</span>
      </h1>

      <div className="space-y-8 mt-10">
        <section className="glass-card liquid-button-card p-8">
          <h2 className="font-display text-xl font-semibold mb-1">Memes as Modern Communication</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Theme: Communication Through Digital Media
          </p>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Description – Visual Message</h2>
          <p className="text-muted-foreground leading-relaxed">
            This visual entry explores how memes function as a powerful form of communication in digital environments. Memes combine images, expressions, and minimal text to convey complex ideas, emotions, and social situations in a simple and relatable way.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In this entry, I used memes to represent situations of miscommunication and everyday interactions. Each meme captures a specific scenario—such as misunderstanding instructions, delayed responses, or assumptions in conversations. The humor in memes makes the message engaging, while the visuals ensure that the idea is understood quickly without requiring detailed explanation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Memes rely heavily on shared context and cultural understanding. A single image, combined with a short caption, can communicate emotions like frustration, confusion, or sarcasm instantly. This makes memes an effective tool for digital communication, especially among younger audiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through this approach, the entry highlights how communication has evolved in the digital age, where visuals and humor play a key role in expressing thoughts and experiences.
          </p>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Reflection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Through this entry, I learned that communication is not limited to formal methods but also exists in everyday digital interactions. Memes show how visual elements can simplify complex ideas and make communication more engaging.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I also understood the importance of audience awareness, as memes are effective only when the viewer understands the context behind them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This experience improved my ability to think creatively and communicate ideas in a concise and impactful way. It also helped me recognize the role of digital media in shaping modern communication.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Overall, this entry reflects my understanding of visual communication as a fast, relatable, and powerful tool in today’s digital world.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default VisualCommunication;
