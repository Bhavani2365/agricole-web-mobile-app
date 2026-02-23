import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/marketplace/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
              <Badge variant="secondary" className="bg-card text-foreground">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1.5 p-3">
          <h3 className="truncate text-sm font-bold text-foreground">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-0.5">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium text-muted-foreground">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
