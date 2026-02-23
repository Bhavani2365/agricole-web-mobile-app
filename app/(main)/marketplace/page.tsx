"use client"

import { useState, useMemo } from "react"
import { mockProducts } from "@/lib/mock/products"
import { ProductCard } from "@/components/product-card"
import { SearchBar } from "@/components/search-bar"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ProductCategory } from "@/lib/types"

const allCategories: ProductCategory[] = [
  "Seeds",
  "Tools",
  "Pots",
  "Fertilizer",
  "Watering",
  "Lighting",
  "Soil",
  "Accessories",
]

export default function MarketplacePage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    null
  )

  const filtered = useMemo(() => {
    let items = mockProducts
    if (activeCategory) {
      items = items.filter((p) => p.category === activeCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    return items
  }, [search, activeCategory])

  return (
    <div className="flex flex-col gap-5 px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-5 w-5 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Marketplace</h1>
      </div>

      {/* Search */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        <Badge
          variant={activeCategory === null ? "default" : "outline"}
          className={cn(
            "cursor-pointer shrink-0 px-3 py-1 text-xs",
            activeCategory === null && "bg-primary text-primary-foreground"
          )}
          onClick={() => setActiveCategory(null)}
        >
          All
        </Badge>
        {allCategories.map((cat) => (
          <Badge
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            className={cn(
              "cursor-pointer shrink-0 px-3 py-1 text-xs",
              activeCategory === cat && "bg-primary text-primary-foreground"
            )}
            onClick={() =>
              setActiveCategory(activeCategory === cat ? null : cat)
            }
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12 text-center">
          <ShoppingBag className="h-10 w-10 text-muted-foreground/50" />
          <p className="text-sm text-muted-foreground">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
