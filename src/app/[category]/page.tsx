// import { client } from '@/lib/sanity';
// import { SimplifiedProduct } from "../interface";
// import Image from "next/image";
// import Link from "next/link";

// // ✅ Fetch data with error handling
// async function getData(category: string): Promise<SimplifiedProduct[]> {
//   if (!category) return [];
//   try {
//     const query = `*[_type == "Product" && category->name == $category]{
//       _id,
//       "imageUrl": images[0].asset->url,
//       price,
//       name,
//       "slug": slug.current,
//       "categoryName": category->name
//     }`;
//     return await client.fetch(query, { category });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }

// // ✅ Define props correctly
// interface CategoryPageProps {
//   params: {
//     category: string;
//   };
// }

// export default async function CategoryPage({ params }: CategoryPageProps) {
//   const category = params?.category || "";
//   const data: SimplifiedProduct[] = await getData(category);

//   return (
//     <div className="bg-white">
//            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//              {data.map((product) => (
//               <div key={product._id} className="group relative">
//                 <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
//                   <Image
//                     src={product.imageUrl}
//                     alt={product.name}
//                     width={300}
//                     height={300}
//                     className="object-cover object-center w-full h-full lg:h-full lg:w-full"
//                   />
//                 </div>

//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
//                       <Link href={`/product/${product.slug}`}>
//                         {product.name}
//                       </Link>
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">${product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           </div>
//           </div>
//         )
//           }
  //       {/* )}
  //     </div>
  //     </?
  //   </div>
  // ); */}














