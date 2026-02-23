import { mockPlants } from "@/lib/mock/plants"
import { mockProducts } from "@/lib/mock/products"
import { mockReviews } from "@/lib/mock/reviews"
import { mockOrders } from "@/lib/mock/orders"
import type { Plant, Product, Review, Order } from "@/lib/types"

export const USE_MOCK = true

export async function getPlants(): Promise<Plant[]> {
  if (USE_MOCK) return mockPlants
  // TODO: Supabase query
  return []
}

export async function getPlantById(id: string): Promise<Plant | undefined> {
  if (USE_MOCK) return mockPlants.find((p) => p.id === id)
  // TODO: Supabase query
  return undefined
}

export async function getProducts(): Promise<Product[]> {
  if (USE_MOCK) return mockProducts
  // TODO: Supabase query
  return []
}

export async function getProductById(id: string): Promise<Product | undefined> {
  if (USE_MOCK) return mockProducts.find((p) => p.id === id)
  // TODO: Supabase query
  return undefined
}

export async function getReviews(targetId?: string): Promise<Review[]> {
  if (USE_MOCK) {
    if (targetId) return mockReviews.filter((r) => r.targetId === targetId)
    return mockReviews
  }
  // TODO: Supabase query
  return []
}

export async function getOrders(): Promise<Order[]> {
  if (USE_MOCK) return mockOrders
  // TODO: Supabase query
  return []
}
