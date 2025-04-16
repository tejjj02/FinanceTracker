import { PencilIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "1", name: "Food & Dining", color: "#FF6384", count: 24 },
  { id: "2", name: "Housing", color: "#36A2EB", count: 5 },
  { id: "3", name: "Transportation", color: "#FFCE56", count: 12 },
  { id: "4", name: "Entertainment", color: "#4BC0C0", count: 8 },
  { id: "5", name: "Shopping", color: "#9966FF", count: 15 },
  { id: "6", name: "Other", color: "#FF9F40", count: 7 },
]

export function CategoriesList() {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: category.color }} />
            <span className="font-medium">{category.name}</span>
            <Badge variant="outline">{category.count}</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <PencilIcon className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon">
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
