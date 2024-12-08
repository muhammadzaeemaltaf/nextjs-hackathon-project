import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function OrderSummary() {
  return (
    <div className="max-w-[320px] ml-auto">
      <div>
        <h2 className="text-[21px] font-medium">Order Summary</h2>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-[14px] text-[#8D8D8D]">
            <span className="text-muted-foreground">Subtotal</span>
            <span>₹20,890.00</span>
          </div>
          <div className="flex justify-between text-[14px] text-[#8D8D8D]">
            <span className="text-muted-foreground">Delivery/Shipping</span>
            <span>Free</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>₹20,890.00</span>
          </div>
          <Separator className="my-2" />
          <p className="text-[9px]  mt-1">
            (The total reflects the price of your order, including all duties and taxes)
          </p>
        </div>
        
        <div className="space-y-1 text-sm">
          <p className="font-bold text-[15px]">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Image
              src="/placeholder.svg"
              alt="Nike Dri-FIT Running Top"
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h3>
              <p className="text-sm text-muted-foreground">Qty: 1</p>
              <p className="font-medium">₹3,895.00</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image
              src="/placeholder.svg"
              alt="Nike Air Max 97 SE"
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div className="flex-1 space-y-1">
              <h3 className="font-medium">Nike Air Max 97 SE Men's Shoes</h3>
              <p className="text-sm text-muted-foreground">Size: UK 8</p>
              <p className="text-sm text-muted-foreground">Qty: 1</p>
              <p className="font-medium">₹16,995.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

