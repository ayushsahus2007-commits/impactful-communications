import { ArrowLeft, PenLine } from "lucide-react";
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

const writtenClarityData = [
  { stage: "Vague Message", clarity: 36, alignment: 34 },
  { stage: "Clarified Deadline", clarity: 82, alignment: 78 },
  { stage: "Confirmed by Team", clarity: 92, alignment: 90 },
];

const WrittenCommunication = () => (
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
          <PenLine size={22} className="text-primary" />
        </div>
        <span className="text-3xl">✍️</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-2">
        Written <span className="gradient-text">Communication</span>
      </h1>

      <div className="space-y-8 mt-10">
        <section className="glass-card liquid-button-card p-8">
          <h2 className="font-display text-xl font-semibold mb-1">When Clarity Matters</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Theme: Communication in Digital Interactions
          </p>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-4">
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

        <section className="glass-card liquid-button-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Reflection</h2>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">Purpose:</span> to show how
              unclear wording can create delays in team collaboration.
            </p>
            <p>
              <span className="text-foreground font-medium">Target audience:</span>{" "}
              classmates, project teams, and anyone relying on written group communication.
            </p>
            <p>
              <span className="text-foreground font-medium">Theme connection:</span> this
              entry focuses on communication as a process that needs clarity, timing, and
              mutual understanding.
            </p>
          </div>
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

        <section className="glass-card liquid-button-card p-8 space-y-5">
          <h2 className="font-display text-xl font-semibold">
            Communication Improvement Graph
          </h2>
          <p className="text-sm text-muted-foreground">
            Snapshot of how clarity and team alignment improved after changing from vague to
            specific written instructions.
          </p>
          <div className="h-80 w-full rounded-xl bg-background/40 p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={writtenClarityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="stage" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
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
                <Bar dataKey="alignment" fill="hsl(195 80% 56%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-5">
          <h2 className="font-display text-xl font-semibold">Context Images</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-border/70 bg-background/35">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1280&auto=format&fit=crop"
                alt="A team discussing a shared plan on laptop and phone."
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-3 text-xs text-muted-foreground">
                Group discussion and written coordination.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-border/70 bg-background/35">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1280&auto=format&fit=crop"
                alt="Phone and notebook showing planning notes and written reminders."
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-3 text-xs text-muted-foreground">
                Clear written deadlines reduce confusion.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default WrittenCommunication;
