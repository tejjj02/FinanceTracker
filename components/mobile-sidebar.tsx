"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CreditCard, Home, Menu, PieChart, Settings, Wallet, X, Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "@/components/theme-provider"

export function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-between border-b px-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-lg tracking-wide"
              onClick={() => setOpen(false)}
            >
              <Wallet className="h-6 w-6" />
              <span>Finance Tracker</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-2 text-base font-medium">
              <Link href="/" passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                    pathname === "/" && "bg-muted text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Link href="/transactions" passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                    pathname === "/transactions" && "bg-muted text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Transactions</span>
                </Button>
              </Link>
              <Link href="/categories" passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                    pathname === "/categories" && "bg-muted text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <PieChart className="h-4 w-4" />
                  <span>Categories</span>
                </Button>
              </Link>
              <Link href="/budgets" passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                    pathname === "/budgets" && "bg-muted text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Budgets</span>
                </Button>
              </Link>
              <Link href="/settings" passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                    pathname === "/settings" && "bg-muted text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
              </Link>
            </nav>
          </div>
          <div className="mt-auto border-t py-4 px-2">
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      className="flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </Button>
  )
}
