import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryPieChart } from "@/components/category-pie-chart"
import { CategoriesList } from "@/components/categories-list"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MobileSidebar />
          <h1 className="text-lg font-heading tracking-wide md:text-2xl">Categories</h1>
          <div className="ml-auto">
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle className="font-heading tracking-wide">Expense Distribution</CardTitle>
                <CardDescription>Your spending by category</CardDescription>
              </CardHeader>
              <CardContent>
                <CategoryPieChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="font-heading tracking-wide">Categories</CardTitle>
                <CardDescription>Manage your transaction categories</CardDescription>
              </CardHeader>
              <CardContent>
                <CategoriesList />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
