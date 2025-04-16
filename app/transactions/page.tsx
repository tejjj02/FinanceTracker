import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TransactionDialog } from "@/components/transaction-dialog"
import { TransactionsTable } from "@/components/transactions-table"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function TransactionsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MobileSidebar />
          <h1 className="text-lg font-heading tracking-wide md:text-2xl">Transactions</h1>
          <div className="ml-auto">
            <TransactionDialog>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </TransactionDialog>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <TransactionsTable />
        </main>
      </div>
    </div>
  )
}
