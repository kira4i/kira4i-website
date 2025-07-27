import { Card } from "@/components/ui/card";

interface StorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  highlightText?: string;
  reverse?: boolean;
}

export const StorySection = ({ 
  id, 
  title, 
  subtitle, 
  content, 
  highlightText,
  reverse = false 
}: StorySectionProps) => {
  return (
    <section id={id} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="neon-text">{title}</span>
              </h2>
              <h3 className="text-2xl text-neon-teal font-light">{subtitle}</h3>
              <p className="text-xl text-foreground/80 leading-relaxed font-light">
                {content}
              </p>
              {highlightText && (
                <blockquote className="text-2xl font-medium text-neon-cyan italic">
                  "{highlightText}"
                </blockquote>
              )}
            </div>
          </div>
          
          <div className={`${reverse ? 'lg:col-start-1' : ''} relative`}>
            <div className="w-full h-80 bg-gradient-glow rounded-xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};