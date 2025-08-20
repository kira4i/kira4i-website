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
      className="relative py-20 min-h-[80vh] flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-lg bg-background/20 backdrop-blur-sm border border-neon-cyan/30">
          <span className="text-lg sm:text-xl font-mono font-bold neon-text pulse-neon tracking-wider">
            {year}
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold title-text tracking-tight leading-tight">
          {title}
        </h2>
        
        <h3
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-semibold neon-magenta-text pulse-magenta tracking-wide transition-all duration-700 transform",
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {subtitle}
        </h3>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <p
            className={cn(
              "text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed transition-all duration-700 transform",
              highlightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {content}
          </p>
          
          {highlightText && (
            <div
              className={cn(
                "relative inline-block transition-all duration-700 transform",
                highlightVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-teal/20 to-neon-purple/20 rounded-lg blur-xl"></div>
              <p className="relative px-6 py-3 text-xl sm:text-2xl lg:text-3xl font-bold bg-background/30 backdrop-blur-sm border border-neon-cyan/40 rounded-lg neon-text pulse-neon">
                {highlightText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
