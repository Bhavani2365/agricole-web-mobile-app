import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Plant } from "@/lib/types"
import { cn } from "@/lib/utils"

const difficultyColor = {
  Easy: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Hard: "bg-red-100 text-red-700 border-red-200",
}

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <Link href={`/my-plants/${plant.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
        <div className="relative aspect-square">
          <Image
            src={plant.image}
            alt={plant.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col gap-1.5 p-3">
          <h3 className="truncate text-sm font-bold text-foreground">
            {plant.name}
          </h3>
          <div className="flex items-center gap-1.5">
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-medium">
              {plant.category}
            </Badge>
            <Badge
              variant="outline"
              className={cn("text-[10px] px-1.5 py-0 font-medium border", difficultyColor[plant.difficulty])}
            >
              {plant.difficulty}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  )
}
