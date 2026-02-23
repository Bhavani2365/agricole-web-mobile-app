export interface User {
  id: string
  name: string
  email: string
  avatar: string
  joinDate: string
}

export interface GrowthStage {
  stage: string
  description: string
  duration: string
}

export interface Plant {
  id: string
  name: string
  image: string
  description: string
  category: PlantCategory
  growthStages: GrowthStage[]
  wateringFrequency: string
  sunlight: string
  difficulty: "Easy" | "Medium" | "Hard"
}

export interface Product {
  id: string
  name: string
  image: string
  price: number
  description: string
  rating: number
  reviewCount: number
  category: ProductCategory
  inStock: boolean
  seller: string
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  targetId: string
  targetType: "plant" | "product"
  rating: number
  comment: string
  date: string
}

export interface Order {
  id: string
  productName: string
  productImage: string
  date: string
  price: number
  status: "Delivered" | "Shipped" | "Processing" | "Cancelled"
}

export type PlantCategory =
  | "Vegetables"
  | "Herbs"
  | "Flowers"
  | "Fruits"
  | "Succulents"
  | "Trees"

export type ProductCategory =
  | "Seeds"
  | "Tools"
  | "Pots"
  | "Fertilizer"
  | "Watering"
  | "Lighting"
  | "Soil"
  | "Accessories"
