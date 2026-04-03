import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import GrowthSection from "@/components/GrowthSection";
import AIDisclosure from "@/components/AIDisclosure";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ui/shader-background";

const Index = () => (
  <div className="min-h-screen">
    <ShaderBackground />
    <Navbar />
    <HeroSection />
    <IntroSection />
    <AboutSection />
    <PortfolioSection />
    <SkillsSection />
    <GrowthSection />
    <AIDisclosure />
    <Footer />
  </div>
);

export default Index;
