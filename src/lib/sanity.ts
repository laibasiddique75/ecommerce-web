import {createClient} from 'next-sanity';
import imgUrlBuilder from '@sanity/image-url'
 export const client = createClient({
    projectId: 'w8ribzk6',
    dataset:'production',
    apiVersion:'2022-03-07',
    useCdn: true,
 })


 const builder = imgUrlBuilder(client)

 import function urlFor(source:any){
   return builder.image(source)
 }