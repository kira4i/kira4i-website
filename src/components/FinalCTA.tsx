import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";


export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch("https://storeemail.kira4i.com/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email": email }),
      });

      if (response.ok) {
        // Also store in localStorage as backup
        const stored = JSON.parse(localStorage.getItem("kiraid-emails") || "[]");
        stored.push({ email, ts: Date.now() });
        localStorage.setItem("kiraid-emails", JSON.stringify(stored));

        setIsSubmitted(true);
        toast({
          title: "Welcome to the Future!",
          description: "You've been added to the Kira.id early access list.",
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 3000);
      } else {
        toast({
          title: "Error",
          description: "Failed to submit email. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="kiraid" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611419010196-a360856fc42f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-8 glitch-text tracking-tight">
              <span className="title-text">THE</span>
              <br />
              <span className="text-neon-teal pulse-neon">BIRTH</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-6 font-light">
              Human's Finest AI Web App Builder
            </p>
            {/* <p className="text-2xl text-neon-cyan font-medium mb-8">
              The Kira.id prototype grows stronger
            </p> */}
          </div>

          <div className="p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 title-text">
              Experience the Future First
            </h3>
            {/* <p className="text-xl text-foreground/70 mb-8 font-light">
              Join early access!
            </p> */}
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-16 text-lg bg-background/80 border-neon-teal/30 focus:border-neon-cyan"
                  required
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  variant="glow"
                  size="xl"
                  className="w-full pulse-neon"
                  disabled={!email || isLoading}
                >
                  {isLoading ? "Submitting..." : "Join the Revolution"}
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
          
          <div className="mt-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
              <span className="text-xl font-bold text-neon-cyan animate-pulse">Connect</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            </div>
            
            {/* Action buttons */}
            <div className="max-w-md mx-auto space-y-4">
              {/* Expo App button */}
              <a
                href="exp://nm9rmqc-samkoesnadi-8081.exp.direct"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full p-8 rounded-2xl bg-background/20 backdrop-blur-sm border border-neon-magenta/30 hover:border-neon-magenta/60 shadow-2xl ring-1 ring-neon-magenta/20 hover:ring-neon-magenta/40 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/10 via-transparent to-neon-purple/10 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-3 text-neon-magenta group-hover:text-neon-teal transition-colors duration-300">📱</div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-magenta transition-colors duration-300">
                    Try Kira.id App
                  </h4>
                  <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    Experience the prototype in action
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-neon-magenta font-medium">
                    <span>Launch App</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Linktree button */}
              <a
                href="https://linktr.ee/kiraid"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full p-8 rounded-2xl bg-background/20 backdrop-blur-sm border border-neon-cyan/30 hover:border-neon-cyan/60 shadow-2xl ring-1 ring-neon-cyan/20 hover:ring-neon-cyan/40 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-3 text-neon-cyan group-hover:text-neon-teal transition-colors duration-300">🔗</div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    All Kira.id Links
                  </h4>
                  <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    Connect with us across all platforms
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-neon-cyan font-medium">
                    <span>Visit Linktree</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Kira.id team is building actively. Be part of something extraordinary.</p>
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
