export const NeonManifest = () => {
  const words = ["BEGINNING", "COLLABORATION", "SYMBIOSIS", "EVOLUTION"];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle w-2 h-2 left-1/4 top-1/3" />
        <div className="particle w-3 h-3 right-1/5 top-1/2 delay-1000" />
        <div className="particle w-1 h-1 left-1/2 bottom-1/4 delay-2000" />
      </div>
      <div className="space-y-6 text-center relative z-10">
        {words.map((w) => (
          <h2
            key={w}
            className="text-5xl md:text-7xl font-black neon-text neon-glow relative"
          >
            {w}
          </h2>
        ))}
      </div>
    </section>
  );
};
