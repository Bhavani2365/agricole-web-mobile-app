"use client"

import { useAuth } from "@/lib/auth-context"
import { mockPlants } from "@/lib/mock/plants"
import { mockReviews } from "@/lib/mock/reviews"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { ReviewCard } from "@/components/review-card"

export default function HomePage() {
  const { user } = useAuth()
  const firstName = user?.name.split(" ")[0] || "Gardener"
  const recentReviews = mockReviews.slice(0, 4)

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      {/* Welcome header */}
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-primary text-sm font-bold text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-foreground">
            Hello, {firstName}!
          </h1>
          <p className="text-sm text-muted-foreground">
            {"What are you growing today?"}
          </p>
        </div>
      </div>

      {/* Featured Plants */}
      <section>
        <h2 className="mb-3 text-base font-bold text-foreground">
          Featured Plants
        </h2>
        <FeaturedCarousel plants={mockPlants.slice(0, 5)} />
      </section>

      {/* Categories */}
      <section>
        <h2 className="mb-3 text-base font-bold text-foreground">
          Categories
        </h2>
        <CategoryGrid />
      </section>

      {/* Recent Reviews */}
      <section>
        <h2 className="mb-3 text-base font-bold text-foreground">
          Recent Reviews
        </h2>
        <div className="flex flex-col gap-3">
          {recentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  )
}
