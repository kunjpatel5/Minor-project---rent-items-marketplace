"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ItemCard from "@/components/ItemCard"

// Mock data for demonstration
const userItems = [
  { 
    id: 1, 
    name: "Vintage Bicycle", 
    image: "/featureditems/Vintage Bicycle.jpg", 
    price: 750,  
    securityDeposit: 1500,
    category: "Vehicles",
    description: "A classic vintage bicycle, perfect for city rides.",
  },
  {
    id: 2,
    name: "Professional Camera",
    image: "/featureditems/Professional Camera.jpg",
    price: 1900,  
    securityDeposit: 3800,
    category: "Cameras",
    description: "High-resolution DSLR camera, great for professional photography.",
  },
];


export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "Sachin Kumar",
    email: "sachin@gmail.com",
    phone: "+91 9876543210",
    address:"Parul University",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    console.log("Updated user data:", userData);
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Profile</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Manage your personal details and account settings</CardDescription>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={userData.name} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={userData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" value={userData.phone} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" value={userData.address} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/sachin.png" alt="Profile picture" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-semibold">{userData.name}</h2>
                    <p className="text-gray-600">Member since January 2025</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>{userData.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>{userData.phone}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold">Address</p>
                    <p>{userData.address}</p>
                  </div>
                </div>
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Items Rented:</span> 15
              </p>
              <p>
                <span className="font-semibold">Items Listed:</span> 3
              </p>
              <p>
                <span className="font-semibold">Total Earnings:</span> ₹50,000
              </p>
              <p>
                <span className="font-semibold">Account Status:</span> <span className="text-green-600">Active</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
        <Tabs defaultValue="listed">
          <TabsList>
            <TabsTrigger value="listed">Listed Items</TabsTrigger>
            <TabsTrigger value="rented">Rented Items</TabsTrigger>
          </TabsList>
          <TabsContent value="listed">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {userItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="rented">
            <p className="text-gray-600 mt-4">You haven't rented any items yet.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

