"use client"

import Link from "next/link"
import Image from "next/image"
import type { Plant } from "@/lib/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

export function FeaturedCarousel({ plants }: { plants: Plant[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-3">
        {plants.map((plant) => (
          <CarouselItem
            key={plant.id}
            className="basis-[75%] pl-3 sm:basis-[55%]"
          >
            <Link href={`/my-plants/${plant.id}`} className="block">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 75vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Badge
                    variant="secondary"
                    className="mb-1.5 bg-card/80 text-foreground backdrop-blur-sm"
                  >
                    {plant.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-card">{plant.name}</h3>
                  <p className="text-sm text-card/80">{plant.difficulty} to grow</p>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
