"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { mockOrders } from "@/lib/mock/orders"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, LogOut, Package } from "lucide-react"
import { cn } from "@/lib/utils"

const statusColor: Record<string, string> = {
  Delivered: "bg-emerald-100 text-emerald-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-amber-100 text-amber-700",
  Cancelled: "bg-red-100 text-red-700",
}

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  function handleLogout() {
    logout()
    router.replace("/login")
  }

  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-3">
        <Avatar className="h-20 w-20">
          <AvatarFallback className="bg-primary text-xl font-bold text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-xl font-bold text-foreground">{user?.name}</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>
            Member since{" "}
            {user?.joinDate
              ? new Date(user.joinDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })
              : ""}
          </span>
        </div>
      </div>

      <Separator />

      {/* Order History */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <h2 className="text-base font-bold text-foreground">Order History</h2>
        </div>
        <div className="flex flex-col gap-3">
          {mockOrders.map((order) => (
            <Card key={order.id} className="border-border/60">
              <CardContent className="flex items-center gap-3 p-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={order.productImage}
                    alt={order.productName}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {order.productName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(order.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="text-sm font-bold text-foreground">
                    ${order.price.toFixed(2)}
                  </span>
                  <Badge
                    className={cn(
                      "text-[10px] px-1.5 py-0 font-medium",
                      statusColor[order.status]
                    )}
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Actions */}
      <div className="flex flex-col gap-3 pb-4">
        <Button variant="outline" className="w-full" disabled>
          Edit Profile
        </Button>
        <Button
          variant="destructive"
          className="w-full gap-2"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
