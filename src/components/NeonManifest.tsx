export const NeonManifest = () => {
  const words = ["BEGINNING", "COLLABORATION", "SYMBIOSIS", "EVOLUTION"];
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="space-y-6 text-center">
        {words.map((w) => (
          <h2
            key={w}
            className="text-5xl md:text-7xl font-black text-neon-teal"
          >
            {w}
          </h2>
        ))}
      </div>
    </section>
  );
};
