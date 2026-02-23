"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { BottomNav, SideNav } from "@/components/bottom-nav"
import { Spinner } from "@/components/ui/spinner"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-background">
        <Spinner className="h-8 w-8 text-primary" />
      </div>
    )
  }

  return (
    <div className="flex min-h-svh bg-background">
      <SideNav />
      <main className="flex-1 pb-20 md:pb-0">
        <div className="mx-auto max-w-2xl">{children}</div>
      </main>
      <BottomNav />
    </div>
  )
}
