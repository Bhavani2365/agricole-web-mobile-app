import {
  Carrot,
  Flower2,
  Cherry,
  TreePine,
  Cactus,
  Shrub,
} from "lucide-react"
import type { PlantCategory } from "@/lib/types"

const categories: { label: PlantCategory; icon: React.ElementType }[] = [
  { label: "Vegetables", icon: Carrot },
  { label: "Herbs", icon: Shrub },
  { label: "Flowers", icon: Flower2 },
  { label: "Fruits", icon: Cherry },
  { label: "Succulents", icon: Cactus },
  { label: "Trees", icon: TreePine },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {categories.map((cat) => (
        <button
          key={cat.label}
          className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-accent"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <cat.icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground">
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  )
}
