import { StorySection } from "@/components/StorySection";
import { useMemo } from "react";

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
      fadeSubtitle: false,
      fadeHighlight: true,
      fadeImage: true,
      // noFade: true,
    },
    {
      id: "story-machines",
      title: "MOTION",
      year: "1800s",
      subtitle: "Engines of Change",
      content: "Trains and cars carried us across continents and sparked new horizons.",
      highlightText: "Steel carried us farther, faster.",
      image: "https://images.unsplash.com/photo-1605915034248-ba76b2f32c3c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fadeSubtitle: false,
      fadeHighlight: true,
      fadeImage: true,
      // noFade: true,
    },
    {
      id: "story-digital",
      title: "CONNECTION",
      year: "1990s",
      subtitle: "Minds Linked",
      content: "Computers and social media shrank the world, letting billions share ideas instantly.",
      highlightText: "Information moved at the speed of light.",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fadeSubtitle: false,
      fadeHighlight: true,
      fadeImage: true,
    },
    {
      id: "story-intelligence",
      title: "INTELLIGENCE",
      year: "2020s",
      subtitle: "A Tool of Thought",
      content: "Artificial minds now offer guidance as a tool itself, accelerating creation.",
      highlightText: "We wield intelligence.",
      image: "https://images.unsplash.com/photo-1682420636597-0786f3406a94?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fadeSubtitle: false,
      fadeHighlight: true,
      fadeImage: true,
    },
    {
      id: "story-future",
      title: "TRANSFORMATION",
      year: "2030s?",
      subtitle: "Beyond Imagination",
      content: "Something new is forming, ready to remake the world.",
      highlightText: "Be ready for the transformation.",
      image: "https://images.unsplash.com/photo-1576075796033-848c2a5f3696?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fadeSubtitle: false,
      fadeHighlight: true,
      fadeImage: true,
    },
  ];

  const pathD = useMemo(() => {
    const startY = 10;
    const endY = 90;
    const segment = (endY - startY) / (steps.length - 1);
    let d = `M 50 ${startY}`;
    for (let i = 1; i < steps.length; i++) {
      const prevY = startY + (i - 1) * segment;
      const currY = startY + i * segment;
      const c1x = 20 + Math.random() * 60;
      const c1y = prevY + segment / 2;
      const c2x = 20 + Math.random() * 60;
      const c2y = currY - segment / 2;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, 50 ${currY}`;
    }
    return d;
  }, []);

  return (
    <section className="relative">
      {/* Thick blue glowing timeline with random vectors */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={pathD}
          stroke="hsl(var(--neon-cyan))"
          strokeWidth="8"
          fill="none"
          filter="url(#glow)"
          opacity="0.5"
        />
      </svg>
      {steps.map((step) => (
        <StorySection key={step.id} {...step} />
      ))}
    </section>
  );
};
