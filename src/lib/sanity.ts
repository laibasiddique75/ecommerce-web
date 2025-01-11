// import {createClient} from 'next-sanity';
// import imgUrlBuilder from '@sanity/image-url'
//  export const client = createClient({
//     projectId: 'w8ribzk6',
//     dataset:'production',
//     apiVersion:'2022-03-07',
//     useCdn: true,
//  })


//  const builder = imgUrlBuilder(client)

//  export function urlFor(source:any){
//    return builder.image(source)
//  }


import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'; // Import proper types if available.

export const client = createClient({
  projectId: 'w8ribzk6',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
});

const builder: ImageUrlBuilder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source).url(); // Ensure `.url()` is called to generate the URL string.
}
