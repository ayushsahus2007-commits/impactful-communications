import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import GrowthSection from "@/components/GrowthSection";
import AIDisclosure from "@/components/AIDisclosure";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <IntroSection />
    <AboutSection />
    <PortfolioSection />
    <SkillsSection />
    <GrowthSection />
    <AIDisclosure />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
