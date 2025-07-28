export const AmbientParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient floating particles across the page */}
      <div className="particle-ambient w-2 h-2 top-[10%] left-[5%]" style={{ animationDelay: '0s' }} />
      <div className="particle-ambient w-3 h-3 top-[25%] right-[8%]" style={{ animationDelay: '2s' }} />
      <div className="particle-ambient w-1 h-1 top-[40%] left-[12%]" style={{ animationDelay: '4s' }} />
      <div className="particle-ambient w-4 h-4 top-[60%] right-[15%]" style={{ animationDelay: '6s' }} />
      <div className="particle-ambient w-2 h-2 bottom-[20%] left-[20%]" style={{ animationDelay: '8s' }} />
      <div className="particle-ambient w-3 h-3 bottom-[35%] right-[25%]" style={{ animationDelay: '10s' }} />
      
      {/* Drifting particles */}
      <div className="particle w-2 h-2 top-[15%] left-[90%]" style={{ animationDelay: '0s' }} />
      <div className="particle w-1 h-1 top-[45%] left-[95%]" style={{ animationDelay: '5s' }} />
      <div className="particle w-3 h-3 top-[75%] left-[92%]" style={{ animationDelay: '10s' }} />
      
      {/* More subtle ambient particles */}
      <div className="particle-ambient w-1 h-1 top-[5%] left-[30%]" style={{ animationDelay: '1s' }} />
      <div className="particle-ambient w-2 h-2 top-[35%] right-[40%]" style={{ animationDelay: '3s' }} />
      <div className="particle-ambient w-1 h-1 bottom-[15%] left-[60%]" style={{ animationDelay: '7s' }} />
      <div className="particle-ambient w-3 h-3 bottom-[45%] right-[50%]" style={{ animationDelay: '9s' }} />
      <div className="particle-ambient w-2 h-2 top-[80%] left-[75%]" style={{ animationDelay: '11s' }} />
    </div>
  );
};