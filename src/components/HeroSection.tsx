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
        <h1 className="text-6xl md:text-8xl font-bold mb-8 glitch-text">
          <span className="neon-text pulse-neon">THE FUTURE</span>
          <br />
          <span className="text-neon-magenta neon-magenta-text pulse-magenta">IS NOW</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-neon-cyan neon-glow mb-12 max-w-2xl mx-auto">
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
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-neon-magenta rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};