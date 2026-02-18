import LinkPreview from './LinkPreview';

interface MarqueeLinkPreviewBandProps {
  urls: string[];
}

export default function MarqueeLinkPreviewBand({ urls }: MarqueeLinkPreviewBandProps) {
  // Duplicate the URLs array to create seamless looping
  const duplicatedUrls = [...urls, ...urls];

  return (
    <div className="marquee-container relative w-full overflow-hidden py-4">
      {/* Gradient masks for fade effect on edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
      
      {/* Scrolling track */}
      <div className="marquee-track flex gap-4">
        {duplicatedUrls.map((url, index) => (
          <div
            key={`${url}-${index}`}
            className="marquee-item flex-shrink-0 w-[350px] sm:w-[400px]"
          >
            <LinkPreview url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}
