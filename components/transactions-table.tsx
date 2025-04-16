"use client"

import { useState } from "react"
import { PencilIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TransactionDialog } from "@/components/transaction-dialog"
import { DeleteTransactionDialog } from "@/components/delete-transaction-dialog"

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
  {
    id: "6",
    amount: -4999.0,
    date: "2025-03-22",
    description: "Monthly Subscription",
  },
  {
    id: "7",
    amount: -3500.0,
    date: "2025-03-24",
    description: "Gas Station",
  },
  {
    id: "8",
    amount: -450.0,
    date: "2025-03-26",
    description: "Coffee Shop",
  },
  {
    id: "9",
    amount: -7999.0,
    date: "2025-03-28",
    description: "New Shoes",
  },
  {
    id: "10",
    amount: 15000.0,
    date: "2025-03-30",
    description: "Freelance Payment",
  },
]

export function TransactionsTable() {
  const [selectedTransaction, setSelectedTransaction] = useState<(typeof transactions)[0] | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell
                className={cn("text-right font-medium", transaction.amount > 0 ? "text-emerald-600" : "text-rose-600")}
              >
                {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toFixed(2)}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <PencilIcon className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <TransactionDialog transaction={transaction}>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
                    </TransactionDialog>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onSelect={() => {
                        setSelectedTransaction(transaction)
                        setDeleteDialogOpen(true)
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteTransactionDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        transaction={selectedTransaction}
      />
    </div>
  )
}
