import { ArrowLeft, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

const WrittenCommunication = () => (
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
          <PenLine size={22} className="text-primary" />
        </div>
        <span className="text-3xl">✍️</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-2">
        Written <span className="gradient-text">Communication</span>
      </h1>

      <div className="space-y-8 mt-10">
        <section className="glass-card p-8">
          <h2 className="font-display text-xl font-semibold mb-1">When Clarity Matters</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Theme: Communication in Digital Interactions
          </p>
        </section>

        <section className="glass-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Incident – Miscommunication</h2>
          <p className="text-muted-foreground leading-relaxed">
            This written entry demonstrates my ability to communicate ideas clearly and effectively
            through structured text. It is based on a real-life experience where a lack of clarity
            led to confusion during a group assignment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            While working on a team project, I shared a message in our group chat stating, "Let's
            complete the work soon." I assumed everyone would understand this as finishing the task
            by the end of the day. However, my teammates interpreted "soon" differently—some
            thought it meant within a few hours, while others assumed it could be completed the next
            day. As a result, the work was not completed on time, leading to last-minute pressure
            and misalignment within the team.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This incident highlighted how vague language in digital communication can lead to
            multiple interpretations. Since there were no non-verbal cues or immediate
            clarification, the misunderstanding continued until it affected our progress.
          </p>
        </section>

        <section className="glass-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Reflection</h2>
          <p className="text-muted-foreground leading-relaxed">
            This experience taught me the importance of clarity, precision, and audience awareness
            in written communication. I realized that words like "soon" or "later" can be
            interpreted differently depending on the individual.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To improve, I started using more specific language such as "Please complete this by
            6:00 PM today." I also began confirming understanding within the group to avoid
            confusion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Overall, this entry reflects my growth in written communication. It shows how I learned
            to structure my messages more effectively, anticipate misunderstandings, and ensure that
            my communication is clear, direct, and purposeful—especially in digital environments.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default WrittenCommunication;
