import { HeroSection } from "@/components/HeroSection";
import { NeonManifest } from "@/components/NeonManifest";
import { FinalCTA } from "@/components/FinalCTA";
import { VisualStory } from "@/components/VisualStory";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NeonManifest />
      <VisualStory />
      <FinalCTA />
    </div>
  );
};

export default Index;
