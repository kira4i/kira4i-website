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
  return <section id={id} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <Card className="neon-glow bg-card/50 backdrop-blur-sm p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="neon-text">{title}</span>
              </h2>
              <h3 className="text-xl text-neon-magenta mb-6">{subtitle}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {content}
              </p>
              {highlightText && <blockquote className="border-l-4 border-neon-cyan pl-6 text-xl font-semibold text-neon-cyan">
                  "{highlightText}"
                </blockquote>}
            </Card>
          </div>
          
          <div className={`${reverse ? 'lg:col-start-1' : ''} relative`}>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-neon-cyan opacity-50">◇</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};