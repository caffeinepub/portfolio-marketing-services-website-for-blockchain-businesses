/**
 * Maps content categories to concise uppercase display labels
 * matching Aurient.ai's category style: AI, ART, TECH, CRYPTO, CULTURE
 */

export type CategoryLabel = 'AI' | 'ART' | 'TECH' | 'CRYPTO' | 'CULTURE';

const categoryMapping: Record<string, CategoryLabel> = {
  // Protocol and Infrastructure
  'Protocol Positioning': 'TECH',
  'AI Infrastructure': 'AI',
  'Infrastructure': 'TECH',
  
  // GTM and Strategy
  'Go-to-Market': 'TECH',
  'Institutional GTM': 'CRYPTO',
  
  // Ecosystem
  'Ecosystem Strategy': 'CRYPTO',
  'Community & Education': 'CULTURE',
  'Developer Relations': 'TECH',
  
  // Capital Markets
  'Capital Markets': 'CRYPTO',
  'Corporate Strategy': 'CRYPTO',
  
  // Default fallback
  'default': 'TECH'
};

/**
 * Converts a category string to a concise uppercase label
 * @param category - The original category string
 * @returns One of: AI, ART, TECH, CRYPTO, CULTURE
 */
export function getCategoryLabel(category: string): CategoryLabel {
  return categoryMapping[category] || categoryMapping['default'];
}

/**
 * Returns all available category labels
 */
export function getAllCategoryLabels(): CategoryLabel[] {
  return ['AI', 'ART', 'TECH', 'CRYPTO', 'CULTURE'];
}
