import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface LinkPreviewData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  domain?: string;
}

export function useLinkPreview(url: string) {
  const { actor, isFetching: isActorFetching } = useActor();

  return useQuery<LinkPreviewData | null>({
    queryKey: ['linkPreview', url],
    queryFn: async () => {
      if (!actor) return null;
      
      try {
        const response = await actor.fetchLinkPreview(url);
        
        // Check for error responses
        if (response.startsWith('Invalid URL') || response.startsWith('URL too long')) {
          console.error('Link preview error:', response);
          return null;
        }
        
        // Parse the JSON response from the LinkPreview API
        const data = JSON.parse(response);
        
        // Extract domain from URL
        const urlObj = new URL(url);
        const domain = urlObj.hostname.replace('www.', '');
        
        return {
          title: data.title || '',
          description: data.description || '',
          image: data.image || '',
          url: data.url || url,
          domain: domain
        };
      } catch (error) {
        console.error('Failed to fetch link preview:', error);
        return null;
      }
    },
    enabled: !!actor && !isActorFetching && !!url && url.startsWith('https://'),
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    retry: 1
  });
}
