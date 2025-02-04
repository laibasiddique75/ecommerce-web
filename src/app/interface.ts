// export interface simplifiedProduct{
//     _id:string;
//     imageUrl:string;
//     price:number;
//     slug:string;
//     categoryName:string;
//     name:string;
// }

// export interface fullProduct{
//     _id:string;
//     images:any;
//     price:number;
//     slug:string;
//     categoryName:string;
//     name:string;
//     description:string;
// }



import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SimplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

export interface FullProduct {
    _id: string;
    images: SanityImageSource[];  // ✅ Replaced 'any' with SanityImageSource[]
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
}
