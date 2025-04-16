import { PencilIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const budgets = [
  { id: "1", category: "Food & Dining", budget: 15000, spent: 18000 },
  { id: "2", category: "Housing", budget: 30000, spent: 25000 },
  { id: "3", category: "Transportation", budget: 10000, spent: 12000 },
  { id: "4", category: "Entertainment", budget: 7000, spent: 8000 },
  { id: "5", category: "Shopping", budget: 12000, spent: 15000 },
  { id: "6", category: "Other", budget: 6000, spent: 5000 },
]

export function BudgetsList() {
  return (
    <div className="space-y-6">
      {budgets.map((budget) => {
        const percentage = Math.min(Math.round((budget.spent / budget.budget) * 100), 100)
        const isOverBudget = budget.spent > budget.budget

        return (
          <div key={budget.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{budget.category}</div>
                <div className="text-sm text-muted-foreground">
                  ₹{budget.spent.toFixed(2)} / ₹{budget.budget.toFixed(2)}
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <PencilIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
            <Progress
              value={percentage}
              className={isOverBudget ? "bg-destructive/20" : ""}
              indicatorClassName={isOverBudget ? "bg-destructive" : ""}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{percentage}%</span>
              {isOverBudget && <span className="text-destructive">Over budget</span>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
