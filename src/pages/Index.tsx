import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { CollaborationShowcase } from "@/components/CollaborationShowcase";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  const storyData = [
    {
      id: "story-beginning",
      title: "COLLABORATION",
      subtitle: "Human + AI",
      content: "What if AI doesn't replace creativity—but amplifies it? When human intuition meets machine intelligence, we unlock possibilities beyond imagination.",
      highlightText: "The future belongs to those who dance with machines."
    },
    {
      id: "the-awakening", 
      title: "SYMBIOSIS",
      subtitle: "Silicon dreams meet human soul",
      content: "AI processes millions of patterns while humans provide meaning. Together, we create symphonies that touch emotions we never knew existed.",
      highlightText: "Together, we create what neither could imagine alone.",
      reverse: true
    },
    {
      id: "the-transformation",
      title: "EVOLUTION", 
      subtitle: "Beyond limits",
      content: "This isn't science fiction. In labs worldwide, collaborative consciousness emerges. Augmented creativity where every thought amplifies into infinite potential.",
      highlightText: "We're not losing our humanity—we're expanding it."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {storyData.map((story, index) => (
        <StorySection 
          key={story.id}
          {...story}
        />
      ))}
      
      <CollaborationShowcase />
      <FinalCTA />
    </div>
  );
};

export default Index;
