"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z.coerce.number({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  }),
  date: z.date({
    required_error: "Date is required",
  }),
})

type TransactionFormValues = z.infer<typeof formSchema>

interface TransactionDialogProps {
  children: React.ReactNode
  transaction?: {
    id: string
    description: string
    amount: number
    date: string
  }
}

export function TransactionDialog({ children, transaction }: TransactionDialogProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: transaction
      ? {
          description: transaction.description,
          amount: Math.abs(transaction.amount),
          date: new Date(transaction.date),
        }
      : {
          description: "",
          amount: 0,
          date: new Date(),
        },
  })

  function onSubmit(data: TransactionFormValues) {
    // Here you would typically save the transaction to your database
    console.log(data)
    toast({
      title: transaction ? "Transaction updated" : "Transaction added",
      description: `${data.description} for ₹${data.amount} on ${format(data.date, "PPP")}`,
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{transaction ? "Edit Transaction" : "Add Transaction"}</DialogTitle>
          <DialogDescription>
            {transaction ? "Edit your transaction details below." : "Add a new transaction to your finance tracker."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Grocery shopping" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <span className="mr-2">₹</span>
                      <Input type="number" step="0.01" placeholder="0.00" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>Use positive values for income, negative for expenses.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
