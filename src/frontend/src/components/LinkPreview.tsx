import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink } from 'lucide-react';
import { useLinkPreview } from '@/hooks/useLinkPreview';

interface LinkPreviewProps {
  url: string;
}

export default function LinkPreview({ url }: LinkPreviewProps) {
  const { data: preview, isLoading, isError } = useLinkPreview(url);

  // Loading state
  if (isLoading) {
    return (
      <Card className="border-accent/10 bg-muted/30">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <Skeleton className="h-20 w-20 rounded flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error or no preview data - show fallback
  if (isError || !preview || !preview.title) {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace('www.', '');
    
    return (
      <Card className="border-accent/10 bg-muted/30">
        <CardContent className="p-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ExternalLink className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{domain}</span>
          </a>
        </CardContent>
      </Card>
    );
  }

  // Success state with preview data
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="border-accent/10 bg-muted/30 hover:border-accent/30 transition-colors">
        <CardContent className="p-4">
          <div className="flex gap-4">
            {preview.image && (
              <div className="flex-shrink-0">
                <img
                  src={preview.image}
                  alt={preview.title}
                  className="h-20 w-20 object-cover rounded"
                  onError={(e) => {
                    // Hide image if it fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-accent transition-colors">
                {preview.title}
              </h4>
              {preview.description && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {preview.description}
                </p>
              )}
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <ExternalLink className="h-3 w-3" />
                <span>{preview.domain}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
