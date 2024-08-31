import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <p className="text-lg mb-8">This is the main dashboard page.</p>
      <Button>Get Started</Button>
    </div>
  )
}
