'use client';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';

// Configure the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any): string {
  return builder.image(source).url();
}




import Image from "next/image";
import { useState } from 'react';

interface iAppProps {
  images: any[];
}

export default function ImageGallery({ images }: iAppProps) {
const  [bigImage , setBigImage] = useState(images [0]);

const handleSmallImageClick = (image:any) =>{
 setBigImage(image);
}
;


  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image)}
              alt={`Image ${idx + 1}`}
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}


            />
            
          </div>
        ))}
      </div>



<div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
    <Image src={urlFor(bigImage)} alt='photo' width={900} height={500} className='h-full w-full object-cover object-center' />

    <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Sale</span>

</div>

    </div>
  );
}
