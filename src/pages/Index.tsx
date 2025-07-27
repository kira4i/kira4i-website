import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { CollaborationShowcase } from "@/components/CollaborationShowcase";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  const storyData = [
    {
      id: "story-beginning",
      title: "THE QUESTION",
      subtitle: "What if we're thinking about this all wrong?",
      content: "For decades, we've feared AI as a replacement. But what if it's not about replacement at all? What if the future isn't human versus machine, but human WITH machine? Imagine a world where artificial intelligence doesn't replace human creativity—it amplifies it beyond our wildest dreams.",
      highlightText: "The future belongs to those who can dance with machines."
    },
    {
      id: "the-awakening", 
      title: "THE AWAKENING",
      subtitle: "When silicon dreams meet human soul",
      content: "Picture this: An AI processes millions of artistic styles in seconds while a human artist provides the emotional context that gives meaning to beauty. A writer collaborates with AI to explore narrative possibilities that would take lifetimes to discover alone. A musician and AI create symphonies that touch frequencies of human emotion we never knew existed.",
      highlightText: "Together, we create what neither could imagine alone.",
      reverse: true
    },
    {
      id: "the-transformation",
      title: "THE TRANSFORMATION", 
      subtitle: "Beyond the limits of what's possible",
      content: "This isn't science fiction—it's happening now. In laboratories and studios around the world, a new form of consciousness is emerging. Not artificial, not human, but collaborative. A symbiotic intelligence that transcends the limitations of both. We're witnessing the birth of augmented creativity, where every human thought can be amplified, every idea can be explored to its infinite potential.",
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
