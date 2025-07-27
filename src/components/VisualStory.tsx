import { StorySection } from "@/components/StorySection";

export const VisualStory = () => {
  const steps = [
    {
      id: "story-beginning",
      title: "SPARK",
      year: "10,000 BCE",
      subtitle: "From Stone to Steel",
      content: "Small bands shaped hammers and knives. Simple tools ignited our rise.",
      highlightText: "Every revolution starts with a single strike.",
      image: "https://images.unsplash.com/photo-1502877828070-33e0a80358cf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-machines",
      title: "MOTION",
      year: "1800s",
      subtitle: "Engines of Change",
      content: "Trains and cars carried us across continents and sparked new horizons.",
      highlightText: "Steel carried us farther, faster.",
      image: "https://images.unsplash.com/photo-1528139846235-d7da4d860193?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-digital",
      title: "CONNECTION",
      year: "1990s",
      subtitle: "Minds Linked",
      content: "Computers and social media shrank the world, letting billions share ideas instantly.",
      highlightText: "Information moved at the speed of light.",
      image: "https://images.unsplash.com/photo-1468956332311-c795beafb8c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-intelligence",
      title: "INTELLIGENCE",
      year: "2020s",
      subtitle: "A Tool of Thought",
      content: "Artificial minds now offer guidance as a tool itself, accelerating creation.",
      highlightText: "We wield intelligence.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-future",
      title: "TRANSFORMATION",
      year: "2030s?",
      subtitle: "Beyond Imagination",
      content: "Something new is forming, ready to remake the world.",
      highlightText: "Be ready for the transformation.",
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neon-purple/40 pointer-events-none" />
      {steps.map((step) => (
        <StorySection key={step.id} {...step} />
      ))}
    </section>
  );
};
