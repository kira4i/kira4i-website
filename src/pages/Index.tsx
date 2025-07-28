import { HeroSection } from "@/components/HeroSection";
import { NeonManifest } from "@/components/NeonManifest";
import { FinalCTA } from "@/components/FinalCTA";
import { VisualStory } from "@/components/VisualStory";
import { AmbientParticles } from "@/components/AmbientParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AmbientParticles />
      <HeroSection />
      <NeonManifest />
      <VisualStory />
      <FinalCTA />
    </div>
  );
};

export default Index;
