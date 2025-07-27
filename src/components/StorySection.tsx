interface StorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  highlightText?: string;
  reverse?: boolean;
}
export const StorySection = ({
  id,
  title,
  subtitle,
  content,
  image,
  highlightText,
  reverse = false
}: StorySectionProps) => {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center animate-in fade-in"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold neon-text">{title}</h2>
        <h3 className="text-xl text-neon-magenta">{subtitle}</h3>
        <p className="text-lg text-foreground/80 mb-4">{content}</p>
        {highlightText && (
          <p className="text-neon-cyan text-xl font-medium">{highlightText}</p>
        )}
      </div>
    </section>
  );
};
