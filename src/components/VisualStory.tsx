import { StorySection } from "@/components/StorySection";

export const VisualStory = () => {
  const steps = [
    {
      id: "story-beginning",
      title: "SPARK",
      subtitle: "From Stone to Steel",
      content: "Small bands shaped hammers and knives. Simple tools ignited our rise.",
      highlightText: "Every revolution starts with a single strike.",
      image: "/step1-tools.svg",
    },
    {
      id: "story-machines",
      title: "MOTION",
      subtitle: "Engines of Change",
      content: "Trains and cars carried us across continents and sparked new horizons.",
      highlightText: "Steel carried us farther, faster.",
      image: "/step2-machines.svg",
      reverse: true,
    },
    {
      id: "story-digital",
      title: "CONNECTION",
      subtitle: "Minds Linked",
      content: "Computers and social media shrank the world, letting billions share ideas instantly.",
      highlightText: "Information moved at the speed of light.",
      image: "/step3-digital.svg",
    },
    {
      id: "story-guidance",
      title: "KNOWLEDGE",
      subtitle: "Shared Wisdom",
      content: "Mentors and communities guided dreams with insight and experience.",
      highlightText: "Wisdom flows from mind to mind.",
      image: "/step4-knowledge.svg",
      reverse: true,
    },
    {
      id: "story-ai",
      title: "INTELLIGENCE",
      subtitle: "A Tool of Thought",
      content: "Artificial minds now offer guidance as a tool itself, accelerating creation.",
      highlightText: "We wield intelligence.",
      image: "/step5-ai.svg",
    },
    {
      id: "story-future",
      title: "TRANSFORMATION",
      subtitle: "Beyond Imagination",
      content: "Something new is forming, ready to remake the world.",
      highlightText: "Be ready for the transformation.",
      image: "/step6-future.svg",
      reverse: true,
    },
  ];

  return (
    <>
      {steps.map((step) => (
        <StorySection key={step.id} {...step} />
      ))}
    </>
  );
};
