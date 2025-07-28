import { Button } from "@/components/ui/button";
import cyberHero from "@/assets/cyber-hero.jpg";

export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('story-beginning');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${cyberHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 glitch-text break-words">
          <span className="title-text pulse-neon">THE FUTURE</span>
          <br />
          <span className="text-neon-magenta neon-magenta-text pulse-magenta">IS NOW</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto px-4">
          What if AI and humans could collaborate to create masterpieces beyond imagination?
        </p>
        
        <div className="flex justify-center">
          <Button
            variant="neon"
            size="xl"
            onClick={scrollToNext}
            className="min-w-[200px]"
          >
            Begin the Story
          </Button>
        </div>
      </div>
      
      {/* Subtle floating particles for hero */}
      <div className="particle-subtle w-4 h-4 top-1/4 left-1/5" />
      <div className="particle-subtle w-6 h-6 top-3/4 right-1/4" style={{ animationDelay: '3s' }} />
      <div className="particle-subtle w-3 h-3 top-1/2 left-1/3" style={{ animationDelay: '6s' }} />
      <div className="particle-subtle w-5 h-5 bottom-1/3 right-1/5" style={{ animationDelay: '9s' }} />
      <div className="particle-subtle w-2 h-2 top-1/6 right-1/3" style={{ animationDelay: '12s' }} />
    </section>
  );
};