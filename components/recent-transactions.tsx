import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const transactions = [
  {
    id: "1",
    amount: -8500.0,
    date: "2025-03-14",
    description: "Grocery Shopping",
  },
  {
    id: "2",
    amount: 75000.0,
    date: "2025-03-15",
    description: "Salary Deposit",
  },
  {
    id: "3",
    amount: -3200.0,
    date: "2025-03-17",
    description: "Restaurant Bill",
  },
  {
    id: "4",
    amount: -12999.0,
    date: "2025-03-18",
    description: "New Headphones",
  },
  {
    id: "5",
    amount: -1800.0,
    date: "2025-03-20",
    description: "Movie Tickets",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center gap-4">
          <Avatar
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full",
              transaction.amount > 0 ? "bg-emerald-100" : "bg-rose-100",
            )}
          >
            <AvatarFallback className={cn(transaction.amount > 0 ? "text-emerald-700" : "text-rose-700")}>
              {transaction.amount > 0 ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-base font-medium leading-none">{transaction.description}</p>
            <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
          </div>
          <div className={cn("font-medium text-lg", transaction.amount > 0 ? "text-emerald-600" : "text-rose-600")}>
            {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}
