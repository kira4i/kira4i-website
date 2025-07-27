export const NeonManifest = () => {
  const words = ["BEGINNING", "COLLABORATION", "SYMBIOSIS", "EVOLUTION"];
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="space-y-8 text-center">
        {words.map((w) => (
          <h2
            key={w}
            className="text-6xl md:text-8xl font-black glitch-text text-neon-teal"
          >
            {w}
          </h2>
        ))}
      </div>
    </section>
  );
};
