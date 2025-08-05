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
              Human's Finest On-device AI Agent
            </p>
            {/* <p className="text-2xl text-neon-cyan font-medium mb-8">
              The Kira4I prototype grows stronger
            </p> */}
          </div>

          <div className="p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 title-text">
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
              <span className="text-2xl font-bold text-neon-cyan animate-pulse">&</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            </div>
            {/* WhatsApp community button */}
            <a
              href="https://chat.whatsapp.com/FFzY18byR71B1afbdiSBs0"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.64 0 .44 5.21.44 11.62c0 2.05.54 4.05 1.57 5.81L0 24l6.74-1.98a11.56 11.56 0 0 0 5.31 1.31h.01c6.4 0 11.6-5.21 11.6-11.62 0-3.1-1.21-6.01-3.14-8.23ZM12.06 21.3h-.01a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-4 .12 1.14-3.87-.23-.39a9.67 9.67 0 0 1-1.45-5.1c0-5.34 4.34-9.68 9.68-9.68 2.58 0 5.01 1 6.83 2.81a9.6 9.6 0 0 1 2.84 6.86c0 5.34-4.34 9.72-9.5 9.72Zm5.33-7.28c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.45-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.67-1.63-.91-2.24-.24-.58-.49-.49-.67-.49-.17 0-.37-.02-.56-.02-.2 0-.52.07-.8.37-.27.29-1.04 1.02-1.04 2.47s1.06 2.86 1.21 3.06c.15.19 2.07 3.15 5.01 4.42.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
              </svg>
              <span>Join our WhatsApp Community</span>
            </a>
            {/* Telegram community button */}
            <a
              href="https://t.me/itsKira4I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2AABEE] hover:bg-[#2297d4] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M21.08 7.99c-3.61-.39-6.75-.89-10.08-1.39l2.17 7.59 6.68-3.99c.54-.33.77-1.01.54-1.61zM3.5 15.5c3.31 1.39 6.24 2.59 9.5 3.5l-2.17-7.59-7.33 4.09z"/>
              </svg>
              <span>Join our Telegram Community</span>
            </a>
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
