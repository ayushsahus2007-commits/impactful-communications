import { TrendingUp } from "lucide-react";

const GrowthSection = () => (
  <section className="section-container">
    <div className="glass-card liquid-button-card p-8 md:p-12 max-w-3xl mx-auto text-center">
      <TrendingUp size={32} className="text-primary mx-auto mb-6" />
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
        Learning & <span className="gradient-text">Growth</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        This portfolio reflects my continuous learning and development in
        communication. It shows how I apply these skills in real-world scenarios to
        express ideas, solve problems, and collaborate effectively.
      </p>
    </div>
  </section>
);

export default GrowthSection;
