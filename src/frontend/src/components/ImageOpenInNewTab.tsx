/**
 * Reusable component that renders an image wrapped in a link
 * that opens in a new tab with proper security attributes
 */

interface ImageOpenInNewTabProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageOpenInNewTab({ src, alt, className = '' }: ImageOpenInNewTabProps) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${className}`}
      />
    </a>
  );
}
