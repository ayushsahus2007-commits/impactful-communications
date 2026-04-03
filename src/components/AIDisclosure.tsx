import { Bot } from "lucide-react";

const AIDisclosure = () => (
  <section className="section-container">
    <div className="glass-card liquid-button-card p-8 max-w-2xl mx-auto flex items-start gap-4">
      <Bot size={24} className="text-primary shrink-0 mt-0.5" />
      <div>
        <h3 className="font-display font-semibold mb-2">AI Disclosure</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          AI tools were used for idea generation, structuring, and refining content.
          The core ideas, creativity, and final output are my own.
        </p>
      </div>
    </div>
  </section>
);

export default AIDisclosure;
