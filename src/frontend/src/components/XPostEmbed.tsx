import { useEffect, useRef } from 'react';

interface XPostEmbedProps {
  tweetUrl: string;
}

export default function XPostEmbed({ tweetUrl }: XPostEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widgets script if not already loaded
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);

      script.onload = () => {
        if (window.twttr && containerRef.current) {
          window.twttr.widgets.load(containerRef.current);
        }
      };
    } else {
      // Script already loaded, just render the widget
      if (containerRef.current) {
        window.twttr.widgets.load(containerRef.current);
      }
    }
  }, [tweetUrl]);

  return (
    <div ref={containerRef} className="w-full">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
          <img 
            src="/assets/generated/x-post-cta.dim_1200x675.png" 
            alt="View X Post" 
            className="w-full h-auto"
          />
        </a>
      </blockquote>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}
