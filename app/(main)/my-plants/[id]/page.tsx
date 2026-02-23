"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { mockPlants } from "@/lib/mock/plants"
import { mockReviews } from "@/lib/mock/reviews"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ReviewCard, StarRating } from "@/components/review-card"
import {
  ArrowLeft,
  Droplets,
  Sun,
  Gauge,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"

const difficultyColor = {
  Easy: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  Hard: "bg-red-100 text-red-700",
}

export default function PlantDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const plant = mockPlants.find((p) => p.id === id)

  if (!plant) return notFound()

  const reviews = mockReviews.filter((r) => r.targetId === plant.id)

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/20" />
        <Link href="/my-plants">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-3 h-9 w-9 rounded-full bg-card/80 text-foreground backdrop-blur-sm hover:bg-card"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to My Plants</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-6 px-4 py-5">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold text-foreground">{plant.name}</h1>
            <Badge
              className={cn(
                "shrink-0 text-xs font-semibold",
                difficultyColor[plant.difficulty]
              )}
            >
              {plant.difficulty}
            </Badge>
          </div>
          <Badge variant="outline" className="mt-2">
            {plant.category}
          </Badge>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {plant.description}
          </p>
        </div>

        <Separator />

        {/* Care Info */}
        <section>
          <h2 className="mb-3 text-base font-bold text-foreground">
            Care Guide
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                <Droplets className="h-4 w-4 text-blue-500" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">
                Water
              </span>
              <span className="text-center text-xs font-semibold text-foreground">
                {plant.wateringFrequency}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50">
                <Sun className="h-4 w-4 text-amber-500" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">
                Sunlight
              </span>
              <span className="text-center text-xs font-semibold text-foreground">
                {plant.sunlight}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <Gauge className="h-4 w-4 text-primary" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">
                Difficulty
              </span>
              <span className="text-center text-xs font-semibold text-foreground">
                {plant.difficulty}
              </span>
            </div>
          </div>
        </section>

        <Separator />

        {/* Growth Stages */}
        <section>
          <h2 className="mb-4 text-base font-bold text-foreground">
            Growth Stages
          </h2>
          <div className="relative flex flex-col gap-0">
            {plant.growthStages.map((stage, index) => (
              <div key={stage.stage} className="relative flex gap-4 pb-6 last:pb-0">
                {/* Vertical line */}
                {index < plant.growthStages.length - 1 && (
                  <div className="absolute left-[15px] top-8 h-[calc(100%-16px)] w-0.5 bg-border" />
                )}
                {/* Circle */}
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">
                      {stage.stage}
                    </span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {stage.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
