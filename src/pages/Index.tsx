import { HeroSection } from "@/components/HeroSection";
import { NeonManifest } from "@/components/NeonManifest";
import { FinalCTA } from "@/components/FinalCTA";
import { VisualStory } from "@/components/VisualStory";
import { AmbientParticles } from "@/components/AmbientParticles";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kira.id | Artificial Intelligence</title>
        <meta
          name="description"
          content="Kira.id builds on-device AI Agent for your every digital needs."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kira.id/" />
        <meta property="og:title" content="Kira.id | Artificial Intelligence" />
        <meta
          property="og:description"
          content="Kira.id builds on-device AI Agent for your every digital needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kira.id/" />
        <meta
          property="og:image"
          content="https://kira.id/opengraph-image-p98pqg.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ishowkiraid" />
        <meta name="twitter:title" content="Kira.id | Artificial Intelligence" />
        <meta
          name="twitter:description"
          content="Kira.id builds on-device AI Agent for your every digital needs."
        />
        <meta
          name="twitter:image"
          content="https://kira.id/opengraph-image-p98pqg.png"
        />
      </Helmet>
      <AmbientParticles />
      <HeroSection />
      <NeonManifest />
      <VisualStory />
      <FinalCTA />
    </div>
  );
};

export default Index;
