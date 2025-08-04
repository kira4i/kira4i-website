export const NeonManifest = () => {
  const videoId = "H9pA-cwSJyU";
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&playsinline=1`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle w-2 h-2 left-1/4 top-1/3" />
        <div className="particle w-3 h-3 right-1/5 top-1/2 delay-1000" />
        <div className="particle w-1 h-1 left-1/2 bottom-1/4 delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <iframe
            className="w-full h-full"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
