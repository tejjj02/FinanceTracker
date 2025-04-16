import { IndianRupee, CreditCard, ArrowUpDown, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { TransactionDialog } from "@/components/transaction-dialog"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MobileSidebar />
          <h1 className="text-lg font-heading tracking-wide md:text-2xl">Dashboard</h1>
          <div className="ml-auto">
            <TransactionDialog>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </TransactionDialog>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 sm:gap-8 sm:p-6 md:gap-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-heading tracking-wide">Total Balance</CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,552.56</div>
                <p className="text-sm text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-heading tracking-wide">Monthly Income</CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹90,000.00</div>
                <p className="text-sm text-muted-foreground">+5.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-heading tracking-wide">Monthly Expenses</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹44,447.44</div>
                <p className="text-sm text-muted-foreground">+1.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-heading tracking-wide">Savings Rate</CardTitle>
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.1%</div>
                <p className="text-sm text-muted-foreground">+4.3% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle className="font-heading tracking-wide">Monthly Expenses</CardTitle>
                <CardDescription>Your spending over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="font-heading tracking-wide">Recent Transactions</CardTitle>
                <CardDescription>Your latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href="/transactions">View All Transactions</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
