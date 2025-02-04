
// import imageUrlBuilder from '@sanity/image-url';
// import { client } from '@/lib/sanity';
// import Image from 'next/image';
// import Link from 'next/link';

// // Configure the image URL builder
// const builder = imageUrlBuilder(client);

// export function urlFor(source: any): string {
//   return builder.image(source).url();
// }

// // Fetch the images from Sanity
// async function getImages() {
//   const query = "*[_type == 'heroImage'][0]";
//   try {
//     const data = await client.fetch(query);
//     return data;
//   } catch (error) {
//     console.error('Error fetching images from Sanity:', error);
//     return null;
//   }
// }

// export default async function Hero() {
//   const data = await getImages();

//   // Safely get the image URLs
//   const imageUrl1 = data?.image1 ? urlFor(data.image1) : null;
//   const imageUrl2 = data?.image2 ? urlFor(data.image2) : null;

//   return (
//     <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row items-center justify-between">
//         {/* Text Content */}
//         <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
//           <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl mb-4">
//             Top Fashion For a Top Price!
//           </h1>
//           <p className="text-gray-500 leading-relaxed xl:text-lg">
//             We sell only the most exclusive and high-quality products for you.
//             We are the best, so come and shop with us.
//           </p>
//         </div>

//         {/* Stacked Images */}
//         <div className="lg:w-1/2 relative flex justify-center items-center">
//           {imageUrl1 && (
//             <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
//               <Image
//                 src={imageUrl1}
//                 alt="Great Photo 1"
//                 width={300}
//                 height={400}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//           )}
//           {imageUrl2 && (
//             <div className="absolute top-10 left-0 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
//               <Image
//                 src={imageUrl2}
//                 alt="Great Photo 2"
//                 width={300}
//                height={100}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//           )}
//         </div>
//       </div>




// <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//       <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
//         <Link
//           href="/Men"
//           className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
//         >
//           Men
//         </Link>
//         <Link
//           href="/Women"
//           className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
//         >
//           Women
//         </Link>
//         <Link
//           href="/Kids"
//           className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
//         >
//           Kids
//         </Link>

//       </div>
//     </div>

//     </section>
//   );
// }






import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configure the image URL builder
const builder = imageUrlBuilder(client);

// ✅ Fixing the 'any' type issue
export function urlFor(source: SanityImageSource): string {
  return builder.image(source).url();
}

// Fetch the images from Sanity
async function getImages() {
  const query = "*[_type == 'heroImage'][0]";
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching images from Sanity:', error);
    return null;
  }
}

export default async function Hero() {
  const data = await getImages();

  // Safely get the image URLs
  const imageUrl1 = data?.image1 ? urlFor(data.image1) : null;
  const imageUrl2 = data?.image2 ? urlFor(data.image2) : null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl mb-4">
            Top Fashion For a Top Price!
          </h1>
          <p className="text-gray-500 leading-relaxed xl:text-lg">
            We sell only the most exclusive and high-quality products for you.
            We are the best, so come and shop with us.
          </p>
        </div>

        {/* Stacked Images */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {imageUrl1 && (
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                src={imageUrl1}
                alt="Great Photo 1"
                width={300}
                height={400}
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
          {imageUrl2 && (
            <div className="absolute top-10 left-0 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                src={imageUrl2}
                alt="Great Photo 2"
                width={300}
                height={100}
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Kids"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Kids
          </Link>
        </div>
      </div>
    </section>
  );
}
