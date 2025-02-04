import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'w8ribzk6',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
});

const builder: ImageUrlBuilder = createImageUrlBuilder(client);

// ✅ Fixing 'any' issue by using 'SanityImageSource'
export function urlFor(source: SanityImageSource): string {
  return builder.image(source).url();
}
