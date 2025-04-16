"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Food",
    budget: 15000,
    actual: 18000,
  },
  {
    name: "Housing",
    budget: 30000,
    actual: 25000,
  },
  {
    name: "Transport",
    budget: 10000,
    actual: 12000,
  },
  {
    name: "Entertainment",
    budget: 7000,
    actual: 8000,
  },
  {
    name: "Shopping",
    budget: 12000,
    actual: 15000,
  },
  {
    name: "Other",
    budget: 6000,
    actual: 5000,
  },
]

export function BudgetComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <Tooltip
          formatter={(value) => [`₹${value}`, ""]}
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Bar dataKey="budget" name="Budget" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="actual" name="Actual" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
