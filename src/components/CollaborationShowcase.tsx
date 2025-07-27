import { Card } from "@/components/ui/card";
import aiCollaboration from "@/assets/ai-collaboration.jpg";

export const CollaborationShowcase = () => {
  const capabilities = [
    {
      title: "Creative Synthesis",
      description: "AI processes infinite patterns while humans provide emotional depth and meaning.",
      icon: "🎨"
    },
    {
      title: "Rapid Iteration", 
      description: "Generate thousands of variations in seconds, refined by human intuition.",
      icon: "⚡"
    },
    {
      title: "Impossible Made Possible",
      description: "Break the barriers of what seemed impossible through symbiotic intelligence.",
      icon: "🚀"
    },
    {
      title: "Enhanced Creativity",
      description: "Amplify human imagination with computational power beyond limits.",
      icon: "💡"
    }
  ];

  return (
    <section id="collaboration" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neon-text pulse-neon">SYMBIOTIC</span>
            <br />
            <span className="text-neon-magenta">INTELLIGENCE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When artificial intelligence meets human creativity, magic happens. 
            Together, we transcend the limitations of what either could achieve alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="neon-glow bg-card/30 backdrop-blur-sm p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-neon-cyan mb-3">{capability.title}</h3>
              <p className="text-muted-foreground">{capability.description}</p>
            </Card>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-2xl blur-xl" />
          <img 
            src={aiCollaboration}
            alt="AI and Human Collaboration"
            className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl neon-glow"
          />
        </div>
      </div>
    </section>
  );
};