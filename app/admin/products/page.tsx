import { AdminLayout } from '../components/layout/admin-layout'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: '10.99 ₽' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: '19.99 ₽' },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: '15.99 ₽' },
  { id: 4, name: 'Product 4', description: 'Description for Product 4', price: '25.99 ₽' },
  { id: 5, name: 'Product 5', description: 'Description for Product 5', price: '30.99 ₽' },
  { id: 6, name: 'Product 6', description: 'Description for Product 6', price: '12.99 ₽' },
]

export default function ProductsPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Товары</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-4">
              <div className="aspect-square relative rounded-md overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg"
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-zinc-400 mb-2">{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Редактировать</Button>
              <Button variant="destructive" size="sm">Удалить</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AdminLayout>
  )
}

