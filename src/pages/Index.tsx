import { HeroSection } from "@/components/HeroSection";
import { NeonManifest } from "@/components/NeonManifest";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NeonManifest />
      <FinalCTA />
    </div>
  );
};

export default Index;
