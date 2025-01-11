"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,

} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
 

export default function ShoppingCartModal (){
    const {cartCount , shouldDisplayCart , handleCartClick,cartDetails} = useShoppingCart()
return(
    <Sheet open={shouldDisplayCart} onOpenChange={() =>handleCartClick()}>

    <SheetContent className="sm:max-w-lg w-[90vw]">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
    
      </SheetHeader>
   
      <div className="flex flex-col h-full justify-between">
       <div className="mt-8 flex-1 overflow-y-auto">
<ul className="-my-6 divide-y divide-gray-200">
{cartCount === 0 ?(
<h1 className="py-6">You dont have any items</h1>
):(
   <>

   {Object.values(cartDetails ?? {}).map((entry) =>(

<li key={entry.id} className="flex py-6 ">

  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
<Image src={entry.image as string} alt="pic" width={100} height={200}  />
  </div>

<div className="ml-4 flex-1 flex-col">
<div>

  <div className="flex justify-between text-base font-medium text-gray-900">
<h3>

  {entry.name}
</h3>
<p className="ml-4">${entry.price}</p>
  </div>
  <p>{entry.description}</p>
</div>
</div>


</li>


   ))}
   </>
)

}
</ul>
       </div>
      </div>
     
    </SheetContent>
  </Sheet>
)
}