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
   * Whether the background image should fade based on scroll
   * @default true
   */
  fadeImage?: boolean;
  /**
   * Whether the highlight text should fade based on scroll
   * @default true
   */
  fadeHighlight?: boolean;
  /**
   * Whether the subtitle should fade based on scroll
   * @default false
   */
  fadeSubtitle?: boolean;
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
  fadeImage = true,
  fadeHighlight = true,
  fadeSubtitle = false,
  noFade,
}: StorySectionProps) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const visible = noFade ? true : inView;
  const imageVisible = fadeImage ? visible : true;
  const highlightVisible = fadeHighlight ? visible : true;
  const subtitleVisible = fadeSubtitle ? visible : true;
  return (
    <section
      ref={noFade ? undefined : ref}
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-opacity duration-700",
          imageVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute left-1/2 top-1/2 -ml-1 -mt-1 w-2 h-2 bg-neon-teal rounded-full shadow-neon" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="absolute inset-0 pointer-events-none [background:linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_20%,transparent_80%,rgba(0,0,0,0.6))]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <div className="text-neon-magenta font-mono">{year}</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold title-text break-words">{title}</h2>
        <h3
          className={cn(
            "text-xl text-neon-magenta transition-opacity duration-700",
            subtitleVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {subtitle}
        </h3>
        <p
          className={cn(
            "text-sm sm:text-base lg:text-lg text-foreground/80 mb-4 transition-opacity duration-700 break-words",
            highlightVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {content}
        </p>
        {highlightText && (
          <p
            className={cn(
              "text-neon-cyan text-lg sm:text-xl font-medium transition-opacity duration-700 break-words",
              highlightVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {highlightText}
          </p>
        )}
      </div>
    </section>
  );
};
