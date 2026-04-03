import { Mail, Linkedin, Globe } from "lucide-react";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
        Get In <span className="gradient-text">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Info */}
        <div className="glass-card p-8 flex flex-col gap-6">
          <h3 className="font-display text-xl font-semibold">Contact Info</h3>
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Mail size={18} className="text-primary" /> your-email@example.com
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Linkedin size={18} className="text-primary" /> LinkedIn Profile
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Globe size={18} className="text-primary" /> Portfolio Link
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
