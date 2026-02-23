"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { mockProducts } from "@/lib/mock/products"
import { mockReviews } from "@/lib/mock/reviews"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ReviewCard, StarRating } from "@/components/review-card"
import { ArrowLeft, Star, Store, ShoppingCart } from "lucide-react"
import { toast } from "sonner"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = mockProducts.find((p) => p.id === id)

  if (!product) return notFound()

  const reviews = mockReviews.filter((r) => r.targetId === product.id)

  function handleAddToCart() {
    toast.success(`${product!.name} added to cart!`)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="relative aspect-square w-full bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <Link href="/marketplace">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-3 h-9 w-9 rounded-full bg-card/80 text-foreground backdrop-blur-sm hover:bg-card"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Marketplace</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5 px-4 py-5">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold text-foreground">
              {product.name}
            </h1>
            {product.inStock ? (
              <Badge className="shrink-0 bg-emerald-100 text-emerald-700">
                In Stock
              </Badge>
            ) : (
              <Badge variant="secondary" className="shrink-0">
                Out of Stock
              </Badge>
            )}
          </div>

          <p className="mt-2 text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-foreground">
                {product.rating}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>

        {/* Seller */}
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Store className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Sold by</p>
            <p className="text-sm font-semibold text-foreground">
              {product.seller}
            </p>
          </div>
        </div>

        {/* Add to Cart */}
        <Button
          className="w-full gap-2"
          size="lg"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-5 w-5" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>

        {/* Reviews */}
        {reviews.length > 0 && (
          <>
            <Separator />
            <section>
              <h2 className="mb-3 text-base font-bold text-foreground">
                Reviews ({reviews.length})
              </h2>
              <div className="flex flex-col gap-3">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
