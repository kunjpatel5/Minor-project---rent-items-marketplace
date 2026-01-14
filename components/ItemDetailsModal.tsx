import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import AddToCartForm from "@/components/AddToCartForm"

interface ItemDetailsModalProps {
  item: {
    id: number
    name: string
    description: string
    image: string
    price: number
    securityDeposit: number
    category: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function ItemDetailsModal({ item, isOpen, onClose }: ItemDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>Category: {item.category}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative h-[200px] w-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-sm text-gray-500">{item.description}</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">₹{item.price}/day</p>
            <p className="text-sm text-gray-500">Security Deposit: ₹{item.securityDeposit}</p>
          </div>
          <AddToCartForm item={item} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

