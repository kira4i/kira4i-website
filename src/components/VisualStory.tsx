import { StorySection } from "@/components/StorySection";

export const VisualStory = () => {
  const steps = [
    {
      id: "story-beginning",
      title: "SPARK",
      subtitle: "From Stone to Steel",
      content: "Small bands shaped hammers and knives. Simple tools ignited our rise.",
      highlightText: "Every revolution starts with a single strike.",
      image: "https://images.unsplash.com/photo-1502877828070-33e0a80358cf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-machines",
      title: "MOTION",
      subtitle: "Engines of Change",
      content: "Trains and cars carried us across continents and sparked new horizons.",
      highlightText: "Steel carried us farther, faster.",
      image: "https://images.unsplash.com/photo-1528139846235-d7da4d860193?auto=format&fit=crop&w=1200&q=80",
      reverse: true,
    },
    {
      id: "story-digital",
      title: "CONNECTION",
      subtitle: "Minds Linked",
      content: "Computers and social media shrank the world, letting billions share ideas instantly.",
      highlightText: "Information moved at the speed of light.",
      image: "https://images.unsplash.com/photo-1468956332311-c795beafb8c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-guidance",
      title: "KNOWLEDGE",
      subtitle: "Shared Wisdom",
      content: "Mentors and communities guided dreams with insight and experience.",
      highlightText: "Wisdom flows from mind to mind.",
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=1200&q=80",
      reverse: true,
    },
    {
      id: "story-ai",
      title: "INTELLIGENCE",
      subtitle: "A Tool of Thought",
      content: "Artificial minds now offer guidance as a tool itself, accelerating creation.",
      highlightText: "We wield intelligence.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "story-future",
      title: "TRANSFORMATION",
      subtitle: "Beyond Imagination",
      content: "Something new is forming, ready to remake the world.",
      highlightText: "Be ready for the transformation.",
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=80",
      reverse: true,
    },
  ];

  return (
    <section>
      <div className="text-center py-20">
        <h2 className="text-5xl md:text-7xl font-black glitch-text text-neon-cyan">
          History of Human, Tools, and Collaboration
        </h2>
      </div>
      {steps.map((step) => (
        <StorySection key={step.id} {...step} />
      ))}
    </section>
  );
};
