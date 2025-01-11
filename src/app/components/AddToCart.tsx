'use client';
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";

export interface ProductCart{
   
    name: string;
    price: number;
    description:string;
    currency:string;
    image:any
}


export default function AddToCart({currency,description,image,name,price}:ProductCart){
const {addItem , handleCartClick} = useShoppingCart()

const product ={
    name:name,
    description:description,
    price:price,
    currency:currency,
    image:urlFor(image),
    id:"ghjk",
};

    return (
      <Button onClick={()=>{
        addItem(product),handleCartClick()
      }


      }>
        Add to Cart
      </Button>
    )
}