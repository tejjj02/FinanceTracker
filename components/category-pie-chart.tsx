"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

const data = [
  { name: "Food & Dining", value: 18000, color: "#FF6384" },
  { name: "Housing", value: 25000, color: "#36A2EB" },
  { name: "Transportation", value: 12000, color: "#FFCE56" },
  { name: "Entertainment", value: 8000, color: "#4BC0C0" },
  { name: "Shopping", value: 15000, color: "#9966FF" },
  { name: "Other", value: 5000, color: "#FF9F40" },
]

export function CategoryPieChart() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`₹${value}`, "Amount"]}
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
