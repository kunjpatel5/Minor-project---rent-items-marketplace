import CategoryPage from "@/components/CategoryPage"

const otherItems = [
  {
    id: 1,
    name: "Camping Tent",
    image: "/other/Camping Tent.jpg",
    price: 750,
    securityDeposit: 1500,
    category: "Outdoor", 
    description: "Spacious 4-person tent for outdoor adventures.",
  },
  {
    id: 2,
    name: "Telescope",
    image: "/other/Telescope.jpg",
    price: 1500,
    securityDeposit: 3000,
    category: "Electronics", 
    description: "High-powered telescope for stargazing enthusiasts.",
  },
  {
    id: 3,
    name: "Karaoke Machine",
    image: "/other/Karaoke Machine.jpg",
    price: 900,
    securityDeposit: 1800,
    category: "Entertainment",
    description: "Professional karaoke system for parties and events.",
  },
  {
    id: 4,
    name: "Inflatable Pool",
    image: "/other/Inflatable Pool.jpg",
    price: 600,
    securityDeposit: 1200,
    category: "Outdoor",
    description: "Large inflatable pool for summer fun.",
  },
  {
    id: 5,
    name: "Projector Screen",
    image: "/other/Projector Screen.jpg",
    price: 450,
    securityDeposit: 900,
    category: "Electronics",
    description: "Portable projector screen for home cinema experiences.",
  },
  {
    id: 6,
    name: "Surfboard",
    image: "/other/Surfboard.jpg",
    price: 1125,
    securityDeposit: 2250,
    category: "Sports",
    description: "High-performance surfboard for catching waves.",
  },
  {
    id: 7,
    name: "DJ Equipment Set",
    image: "/other/DJ Equipment Set.jpg",
    price: 2250,
    securityDeposit: 4500,
    category: "Entertainment",
    description: "Complete DJ setup for professional performances.",
  },
  {
    id: 8,
    name: "Pottery Wheel",
    image: "/other/Pottery Wheel.jpg",
    price: 825,
    securityDeposit: 1650,
    category: "Art & Crafts",
    description: "Electric pottery wheel for ceramic enthusiasts.",
  },
  {
    id: 9,
    name: "Sewing Machine",
    image: "/other/Sewing Machine.jpg",
    price: 525,
    securityDeposit: 1050,
    category: "Home Appliances",
    description: "Versatile sewing machine for various projects.",
  },
  {
    id: 10,
    name: "Metal Detector",
    image: "/other/Metal Detector.jpg",
    price: 675,
    securityDeposit: 1350,
    category: "Outdoor",
    description: "High-sensitivity metal detector for treasure hunting.",
  },
]


export default function OtherCategory() {
  return <CategoryPage categoryName="Other" items={otherItems} />
}

