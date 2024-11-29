import { ContentGrid } from "./components/content.grid"
import { Sidebar } from "./components/sidebar"


const Admin =() => {
  return (
    <div className="flex bg-zinc-950 text-zinc-50 min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <ContentGrid />
      </main>
    </div>
  )
}
export default Admin
