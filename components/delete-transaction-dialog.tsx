"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface DeleteTransactionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  transaction: {
    id: string
    description: string
    amount: number
    date: string
  } | null
}

export function DeleteTransactionDialog({ open, onOpenChange, transaction }: DeleteTransactionDialogProps) {
  const handleDelete = () => {
    if (!transaction) return
    // Here you would typically delete the transaction from your database
    console.log(`Deleting transaction: ${transaction.id}`)
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the transaction <span className="font-medium">{transaction?.description}</span>{" "}
            from your records.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
