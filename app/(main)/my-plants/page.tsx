"use client"

import { mockPlants } from "@/lib/mock/plants"
import { PlantCard } from "@/components/plant-card"
import { AddPlantDialog } from "@/components/add-plant-dialog"
import { Leaf } from "lucide-react"

export default function MyPlantsPage() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-bold text-foreground">My Plants</h1>
        </div>
        <span className="text-sm text-muted-foreground">
          {mockPlants.length} plants
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {mockPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

      <AddPlantDialog />
    </div>
  )
}
