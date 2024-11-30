import { AdminLayout } from '../components/layout/admin-layout'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const users = [
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'Пользователь', status: 'Активный' },
  { id: 2, name: 'Анна Петрова', email: 'anna@example.com', role: 'Админ', status: 'Активный' },
  { id: 3, name: 'Сергей Сидоров', email: 'sergey@example.com', role: 'Модератор', status: 'Заблокирован' },
  { id: 4, name: 'Мария Кузнецова', email: 'maria@example.com', role: 'Пользователь', status: 'Активный' },
  { id: 5, name: 'Алексей Смирнов', email: 'alexey@example.com', role: 'Пользователь', status: 'Неактивный' },
]

export default function UsersPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Пользователи</h1>
      <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-zinc-800/50">
              <TableHead className="text-zinc-400">ID</TableHead>
              <TableHead className="text-zinc-400">Имя</TableHead>
              <TableHead className="text-zinc-400">Email</TableHead>
              <TableHead className="text-zinc-400">Роль</TableHead>
              <TableHead className="text-zinc-400">Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-zinc-800/50">
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge  variant={user.status === 'Активный' ? 'success' : 'secondary'} key={user.id}>
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  )
}

