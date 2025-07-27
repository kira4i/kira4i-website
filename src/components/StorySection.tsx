interface StorySectionProps {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  content: string;
  image: string;
  highlightText?: string;
}
export const StorySection = ({
  id,
  title,
  year,
  subtitle,
  content,
  image,
  highlightText,
}: StorySectionProps) => {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center animate-in fade-in transition duration-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-1/2 -ml-1 w-2 h-2 bg-neon-cyan rounded-full shadow-neon" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-5">
        <div className="text-neon-magenta font-mono">{year}</div>
        <h2 className="text-5xl font-bold neon-text neon-glow">{title}</h2>
        <h3 className="text-xl text-neon-magenta">{subtitle}</h3>
        <p className="text-lg text-foreground/80 mb-4">{content}</p>
        {highlightText && (
          <p className="text-neon-cyan text-xl font-medium">{highlightText}</p>
        )}
      </div>
    </section>
  );
};
