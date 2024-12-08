import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CartIcon2, Products } from "../../../../data";

const page = ({ params }: { params: { id: string } }) => {
  const product = Products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto pr-3">
        <div className="flex justify-between flex-wrap  gap-8 items-start ">
          <div className="bg-[#F8F8F8] mx-auto  md:w-[653px] md:h-[653px] rounded-lg p-8 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="md:w-[653px] md:h-[653px] object-cover"
            />
          </div>
          <div className="space-y-6 w-[376px] px-4 lg:px-1 lg:py-1 mx-auto">
            <div className="space-y-2">
              <h1 className="text-[48px] leading-[48px] font-[500] tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm/relaxed text-muted-foreground text-balance" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                rerum vitae cumque assumenda vero et animi dolorum error,
                voluptatem a nobis dignissimos debitis est culpa obcaecati
                maiores tempore maxime repudiandae harum delectus laborum
                molestiae quas dolor! Provident, laborum non! Beatae.{" "}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-[36px] font-[500]">{product.price}.00</span>
              </div>
              <Button className="rounded-full w-auto px-6 bg-black" size="lg">
            <span className="mx-2">{CartIcon2}</span>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
