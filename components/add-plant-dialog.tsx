"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus } from "lucide-react"
import { toast } from "sonner"
import type { PlantCategory } from "@/lib/types"

const categories: PlantCategory[] = [
  "Vegetables",
  "Herbs",
  "Flowers",
  "Fruits",
  "Succulents",
  "Trees",
]

export function AddPlantDialog({ onAdd }: { onAdd?: (name: string) => void }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [category, setCategory] = useState<PlantCategory | "">("")
  const [description, setDescription] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !category) return

    onAdd?.(name)
    toast.success(`${name} added to your plants!`)
    setName("")
    setCategory("")
    setDescription("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-20 right-4 z-40 h-14 w-14 rounded-full shadow-lg md:bottom-6 md:right-6"
          aria-label="Add a new plant"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Plant</DialogTitle>
          <DialogDescription>
            Add a plant to your collection to track its growth.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="plant-name">Plant Name</Label>
            <Input
              id="plant-name"
              placeholder="e.g. Cherry Tomato"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="plant-category">Category</Label>
            <Select
              value={category}
              onValueChange={(val) => setCategory(val as PlantCategory)}
            >
              <SelectTrigger id="plant-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="plant-description">Description (optional)</Label>
            <Textarea
              id="plant-description"
              placeholder="Tell us about your plant..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <Button type="submit" disabled={!name || !category}>
            Add Plant
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
