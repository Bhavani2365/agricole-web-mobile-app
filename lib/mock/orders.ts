import type { Order } from "@/lib/types"

export const mockOrders: Order[] = [
  {
    id: "order-1",
    productName: "Heirloom Seed Collection",
    productImage: "/images/products/seed-pack.jpg",
    date: "2026-02-10",
    price: 24.99,
    status: "Delivered",
  },
  {
    id: "order-2",
    productName: "Premium Potting Mix",
    productImage: "/images/products/soil-mix.jpg",
    date: "2026-02-15",
    price: 12.99,
    status: "Shipped",
  },
  {
    id: "order-3",
    productName: "Terracotta Planter",
    productImage: "/images/products/ceramic-pot.jpg",
    date: "2026-02-18",
    price: 18.5,
    status: "Processing",
  },
  {
    id: "order-4",
    productName: "Organic Plant Food",
    productImage: "/images/products/fertilizer.jpg",
    date: "2025-12-20",
    price: 15.99,
    status: "Delivered",
  },
]
