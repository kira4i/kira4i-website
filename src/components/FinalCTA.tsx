import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import cookingLab from "@/assets/cooking-lab.jpg";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate email submission
    setIsSubmitted(true);
    toast({
      title: "Welcome to the Future!",
      description: "You've been added to the Kira4I early access list.",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="kira4i" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${cookingLab})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 glitch-text">
              <span className="neon-text">WE ARE</span>
              <br />
              <span className="text-neon-magenta pulse-neon">COOKING</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Right now in the kitchen...
            </p>
            <p className="text-xl text-neon-cyan font-semibold mb-8">
              Something amazing called "Kira4I" is being built
            </p>
          </div>

          <Card className="neon-glow bg-card/20 backdrop-blur-sm p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-neon-cyan">
              Be the First to Experience the Future
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join the early access list and be among the first to witness what happens 
              when cutting-edge AI meets human creativity. The revolution starts with you.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 text-lg neon-glow bg-background/50"
                  required
                />
                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="xl" 
                  className="w-full"
                  disabled={!email}
                >
                  Join the Revolution
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl text-neon-green mb-4">✓</div>
                <p className="text-xl text-neon-green font-semibold">
                  Welcome to the future! You're in.
                </p>
              </div>
            )}
          </Card>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Be part of something extraordinary. Kira4I is coming.</p>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-neon-magenta rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
    </section>
  );
};