"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Notification from "@/components/Notification"
import { useCart } from "@/context/CartContext"
import ItemDetailsModal from "@/components/ItemDetailsModal"

// Define the Item type with all required properties
interface Item {
  id: number
  name: string
  description: string
  image: string
  price: number
  securityDeposit: number
  category: string
}

interface ItemCardProps {
  item: Item
}

export default function ItemCard({ item }: ItemCardProps) {
  const [showNotification, setShowNotification] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ ...item, days: 1 }) // Ensures id remains a number
    setShowNotification(true)

    // Auto-close notification after 3 seconds
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Item Image */}
      <div className="relative h-48">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Item Details */}
      <div className="p-4">
        <h3 className="font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.category}</p>
        <p className="text-gray-600 mb-4">₹{item.price}/day</p>

        {/* Buttons */}
        <div className="flex space-x-2">
          <Button onClick={() => setShowDetails(true)} className="flex-1" aria-label="View item details">
            View Details
          </Button>
          <Button onClick={handleAddToCart} variant="outline" className="flex-1" aria-label="Add item to cart">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <Notification message={`${item.name} added to cart!`} onClose={() => setShowNotification(false)} />
      )}

      {/* Item Details Modal */}
      <ItemDetailsModal item={item} isOpen={showDetails} onClose={() => setShowDetails(false)} />
    </div>
  )
}
