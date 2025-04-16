"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Home,
  PieChart,
  Settings,
  Wallet,
  Moon,
  Sun,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Load sidebar state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed")
    if (savedState !== null) {
      setIsCollapsed(savedState === "true")
    }
  }, [])

  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isCollapsed.toString())
  }, [isCollapsed])

  return (
    <div className={cn("relative transition-all duration-300 ease-in-out", isCollapsed ? "w-16" : "w-64")}>
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="flex flex-1 items-center gap-2 font-heading text-lg">
            <Wallet className="h-6 w-6" />
            {!isCollapsed && <span className="tracking-wide">Finance Tracker</span>}
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2 bg-muted/40">
          <nav className="grid items-start px-2 text-base font-medium">
            <Link href="/" passHref>
              <Button
                variant="ghost"
                className={cn(
                  "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname === "/" && "bg-muted text-primary",
                  isCollapsed && "justify-center px-2",
                )}
              >
                <Home className="h-4 w-4" />
                {!isCollapsed && <span>Dashboard</span>}
              </Button>
            </Link>
            <Link href="/transactions" passHref>
              <Button
                variant="ghost"
                className={cn(
                  "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname === "/transactions" && "bg-muted text-primary",
                  isCollapsed && "justify-center px-2",
                )}
              >
                <CreditCard className="h-4 w-4" />
                {!isCollapsed && <span>Transactions</span>}
              </Button>
            </Link>
            <Link href="/categories" passHref>
              <Button
                variant="ghost"
                className={cn(
                  "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname === "/categories" && "bg-muted text-primary",
                  isCollapsed && "justify-center px-2",
                )}
              >
                <PieChart className="h-4 w-4" />
                {!isCollapsed && <span>Categories</span>}
              </Button>
            </Link>
            <Link href="/budgets" passHref>
              <Button
                variant="ghost"
                className={cn(
                  "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname === "/budgets" && "bg-muted text-primary",
                  isCollapsed && "justify-center px-2",
                )}
              >
                <BarChart3 className="h-4 w-4" />
                {!isCollapsed && <span>Budgets</span>}
              </Button>
            </Link>
            <Link href="/settings" passHref>
              <Button
                variant="ghost"
                className={cn(
                  "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname === "/settings" && "bg-muted text-primary",
                  isCollapsed && "justify-center px-2",
                )}
              >
                <Settings className="h-4 w-4" />
                {!isCollapsed && <span>Settings</span>}
              </Button>
            </Link>
          </nav>
        </div>
        <div className="mt-auto border-t py-4 px-4">
          <ThemeToggle isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  )
}

function ThemeToggle({ isCollapsed }: { isCollapsed: boolean }) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground",
        isCollapsed && "justify-center px-2",
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {!isCollapsed && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
    </Button>
  )
}
