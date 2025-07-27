import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";


export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const stored = JSON.parse(localStorage.getItem("kira4i-emails") || "[]");
    stored.push({ email, ts: Date.now() });
    localStorage.setItem("kira4i-emails", JSON.stringify(stored));

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
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611419010196-a360856fc42f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-7xl md:text-8xl font-black mb-8 glitch-text tracking-tight">
              <span className="title-text">THE</span>
              <br />
              <span className="text-neon-teal pulse-neon">BIRTH</span>
            </h2>
            <p className="text-3xl md:text-4xl text-foreground/70 mb-6 font-light">
              Growing inside a neon womb...
            </p>
            <p className="text-2xl text-neon-cyan font-medium mb-8">
              The Kira4I prototype grows stronger
            </p>
          </div>

          <div className="p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 title-text">
              Experience the Future First
            </h3>
            <p className="text-xl text-foreground/70 mb-8 font-light">
              Join early access. Witness AI meets human creativity.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-16 text-lg bg-background/80 border-neon-teal/30 focus:border-neon-cyan"
                  required
                />
                <Button
                  type="submit"
                  variant="glow"
                  size="xl"
                  className="w-full pulse-neon"
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
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Kira4I team is building actively. Be part of something extraordinary.</p>
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