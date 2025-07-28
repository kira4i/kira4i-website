import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface StorySectionProps {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  content: string;
  image: string;
  highlightText?: string;
  /**
   * Disable scroll-based fade transitions for this section
   */
  noFade?: boolean;
}
export const StorySection = ({
  id,
  title,
  year,
  subtitle,
  content,
  image,
  highlightText,
  noFade,
}: StorySectionProps) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const visible = noFade ? true : inView;
  return (
    <section
      ref={noFade ? undefined : ref}
      id={id}
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center transition-opacity duration-1000",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-1/2 top-1/2 -ml-1 -mt-1 w-2 h-2 bg-neon-teal rounded-full shadow-neon" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="absolute inset-0 pointer-events-none [background:linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_20%,transparent_80%,rgba(0,0,0,0.6))]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-5">
        <div className="text-neon-magenta font-mono">{year}</div>
        <h2 className="text-5xl font-bold title-text">{title}</h2>

        <h3 className="text-xl text-neon-magenta">{subtitle}</h3>
        <p className="text-lg text-foreground/80 mb-4">{content}</p>
        {highlightText && (
          <p className="text-neon-cyan text-xl font-medium">{highlightText}</p>
        )}
      </div>
    </section>
  );
};
