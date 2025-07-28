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
      image: "https://images.unsplash.com/photo-1591262184859-dd20d214b52a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "story-machines",
      title: "MOTION",
      year: "1800s",
      subtitle: "Engines of Change",
      content: "Trains and cars carried us across continents and sparked new horizons.",
      highlightText: "Steel carried us farther, faster.",
      image: "https://images.unsplash.com/photo-1605915034248-ba76b2f32c3c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "story-digital",
      title: "CONNECTION",
      year: "1990s",
      subtitle: "Minds Linked",
      content: "Computers and social media shrank the world, letting billions share ideas instantly.",
      highlightText: "Information moved at the speed of light.",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "story-intelligence",
      title: "INTELLIGENCE",
      year: "2020s",
      subtitle: "A Tool of Thought",
      content: "Artificial minds now offer guidance as a tool itself, accelerating creation.",
      highlightText: "We wield intelligence.",
      image: "https://images.unsplash.com/photo-1682420636597-0786f3406a94?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "story-future",
      title: "TRANSFORMATION",
      year: "2030s?",
      subtitle: "Beyond Imagination",
      content: "Something new is forming, ready to remake the world.",
      highlightText: "Be ready for the transformation.",
      image: "https://images.unsplash.com/photo-1576075796033-848c2a5f3696?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="relative">
      {/* Thick blue glowing timeline with random vectors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 50% 20% 
             C 30% 35%, 70% 45%, 50% 40%
             C 20% 55%, 80% 65%, 50% 60%
             C 75% 75%, 25% 85%, 50% 80%
             C 30% 95%, 70% 105%, 50% 100%"
          stroke="hsl(var(--neon-cyan))"
          strokeWidth="6"
          fill="none"
          filter="url(#glow)"
          opacity="0.8"
        />
      </svg>
      {steps.map((step) => (
        <StorySection key={step.id} {...step} />
      ))}
    </section>
  );
};
