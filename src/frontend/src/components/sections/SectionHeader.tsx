/**
 * Reusable section header component with Aurient-like typography hierarchy
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`max-w-3xl mb-16 space-y-4 ${alignClass} ${className}`}>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-accent">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
