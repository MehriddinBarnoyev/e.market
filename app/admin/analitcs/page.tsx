import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminLayout } from "../components/layout/admin-layout"

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <div className="grid gap-6 ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Analytics</h1>
        </div>
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-zinc-900 text-white  border-zinc-800">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <div className="mt-4 h-[200px] w-full bg-zinc-800/50 rounded-lg" />
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 text-white  border-zinc-800">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.3%</div>
              <div className="mt-4 h-[200px] w-full bg-zinc-800/50 rounded-lg" />
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 text-white  border-zinc-800">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <div className="mt-4 h-[200px] w-full bg-zinc-800/50 rounded-lg" />
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}

