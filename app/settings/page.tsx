"use client"

import { useState } from "react"
import { Check, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { useTheme } from "@/components/theme-provider"

export default function SettingsPage() {
  const [currency, setCurrency] = useState("inr")
  const [dateFormat, setDateFormat] = useState("dd/mm/yyyy")
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"
  const [notifications, setNotifications] = useState(true)
  const [budgetAlerts, setBudgetAlerts] = useState(true)

  const handleSaveSettings = () => {
    // Here you would typically save the settings to your database
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
      action: (
        <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-4 w-4 text-white" />
        </div>
      ),
    })
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MobileSidebar />
          <h1 className="text-lg font-heading tracking-wide md:text-2xl">Settings</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="font-heading tracking-wide">Preferences</CardTitle>
                <CardDescription>Manage your app preferences and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                      <SelectItem value="usd">US Dollar ($)</SelectItem>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                      <SelectItem value="gbp">British Pound (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <RadioGroup
                    id="date-format"
                    value={dateFormat}
                    onValueChange={setDateFormat}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dd/mm/yyyy" id="dd/mm/yyyy" />
                      <Label htmlFor="dd/mm/yyyy">DD/MM/YYYY</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mm/dd/yyyy" id="mm/dd/yyyy" />
                      <Label htmlFor="mm/dd/yyyy">MM/DD/YYYY</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yyyy/mm/dd" id="yyyy/mm/dd" />
                      <Label htmlFor="yyyy/mm/dd">YYYY/MM/DD</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="theme"
                      checked={isDarkMode}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    <Label htmlFor="theme">Dark Mode</Label>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-heading tracking-wide">Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Enable Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications about your finances</p>
                    </div>
                    <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="budget-alerts">Budget Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when you're close to budget limits</p>
                    </div>
                    <Switch id="budget-alerts" checked={budgetAlerts} onCheckedChange={setBudgetAlerts} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading tracking-wide">Data Management</CardTitle>
                <CardDescription>Manage your financial data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-heading tracking-wide">Export Data</h3>
                  <p className="text-sm text-muted-foreground">Download your financial data in various formats</p>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" className="w-full">
                    Export as CSV
                  </Button>
                  <Button variant="outline" className="w-full">
                    Export as PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    Export as Excel
                  </Button>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-heading tracking-wide">Clear Data</h3>
                  <p className="text-sm text-muted-foreground">Remove all your financial data</p>
                  <Button variant="destructive" className="w-full">
                    Clear All Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
