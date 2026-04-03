import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeOverviewSection from "@/components/HomeOverviewSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import GrowthSection from "@/components/GrowthSection";
import AIDisclosure from "@/components/AIDisclosure";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ui/shader-background";
import SectionReveal from "@/components/ui/section-reveal";

const Index = () => (
  <div className="min-h-screen">
    <ShaderBackground />
    <Navbar />
    <HeroSection />
    <SectionReveal>
      <HomeOverviewSection />
    </SectionReveal>
    <SectionReveal>
      <IntroSection />
    </SectionReveal>
    <SectionReveal>
      <AboutSection />
    </SectionReveal>
    <SectionReveal>
      <PortfolioSection />
    </SectionReveal>
    <SectionReveal>
      <SkillsSection />
    </SectionReveal>
    <SectionReveal>
      <GrowthSection />
    </SectionReveal>
    <SectionReveal>
      <AIDisclosure />
    </SectionReveal>
    <Footer />
  </div>
);

export default Index;
