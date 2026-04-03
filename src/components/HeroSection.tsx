import ScrollExpandMedia from "./ui/scroll-expansion-hero";

const HeroSection = () => (
  <section id="home">
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
      title="My Portfolio"
      date="Ayush Sahu | Reg No: 25BCE2312"
      scrollToExpand="Scroll to explore"
      textBlend
    />
  </section>
);

export default HeroSection;
