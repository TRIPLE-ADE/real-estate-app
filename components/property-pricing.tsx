import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface PricingDetails {
  price: number
  discount: number
  cleaningFee: number
  serviceFee: number
  total: number
}

interface CheckIn {
  from: string
  to: string
}

interface CheckOut {
  time: string
}

interface PropertyPricingProps {
  price: number
  priceUnit: string
  pricing: PricingDetails
  checkIn: CheckIn
  checkOut: CheckOut
}

export function PropertyPricing({ price, priceUnit, pricing, checkIn, checkOut }: PropertyPricingProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 sticky top-6">
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold">NGN {formatCurrency(price)}</span>
          <span className="text-gray-600 ml-1">/{priceUnit}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="border border-gray-300 rounded-tl-lg p-3">
          <div className="text-xs text-gray-600 mb-1">CHECK-IN</div>
          <div className="text-sm font-medium">{checkIn.from}</div>
        </div>
        <div className="border border-gray-300 rounded-tr-lg p-3">
          <div className="text-xs text-gray-600 mb-1">CHECK-OUT</div>
          <div className="text-sm font-medium">{checkOut.time}</div>
        </div>
        <div className="border border-gray-300 rounded-bl-lg rounded-br-lg p-3 col-span-2">
          <div className="text-xs text-gray-600 mb-1">GUESTS</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">1 guest</div>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>

      <Button className="w-full mb-6">Reserve home</Button>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div>NGN {formatCurrency(price)} x 1 week</div>
          <div>NGN {formatCurrency(price)}</div>
        </div>
        {pricing.discount > 0 && (
          <div className="flex justify-between">
            <div>Discount / Offers</div>
            <div>-NGN {formatCurrency(pricing.discount)}</div>
          </div>
        )}
        <div className="flex justify-between">
          <div>Cleaning fee</div>
          <div>NGN {formatCurrency(pricing.cleaningFee)}</div>
        </div>
        <div className="flex justify-between">
          <div>Cost service fee</div>
          <div>NGN {formatCurrency(pricing.serviceFee)}</div>
        </div>
        <div className="border-t pt-4 flex justify-between font-bold">
          <div>Total</div>
          <div>NGN {formatCurrency(pricing.total)}</div>
        </div>
      </div>
    </div>
  )
}
