import { AdminLayout } from '../components/layout/admin-layout'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: '10.99 ₽', imgs:"https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.502xw:1.00xh;0.256xw,0&resize=640:*"},
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: '19.99 ₽', imgs:"https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/10/11/ozhG7gZI-gaming-gear-1200x800.jpg"},
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: '15.99 ₽', imgs:"https://images.immediate.co.uk/production/volatile/sites/3/2020/06/best-ps4-accessories-43287ea.jpg?quality=90&resize=620,414"},
  { id: 4, name: 'Product 4', description: 'Description for Product 4', price: '25.99 ₽', imgs:"https://media.licdn.com/dms/image/D4D12AQG2jMnE6VTJNA/article-cover_image-shrink_600_2000/0/1692181683749?e=2147483647&v=beta&t=ejlmpckB1OWmiJ4zcKOgt6VHWYWMc8l4xIGA5DNZ1XY"},
  { id: 5, name: 'Product 5', description: 'Description for Product 5', price: '30.99 ₽', imgs:"https://s3-ap-southeast-1.amazonaws.com/cdn.gamestheshop.com/boxart/c963f2e2-4bd1-4936-8102-3c77e1168241.jpg"},
  { id: 6, name: 'Product 6', description: 'Description for Product 6', price: '12.99 ₽', imgs:"https://fbi.cults3d.com/uploads/collection/shot_en/94/XBOX_ONE_STEERING_WHEEL_FOR_WIRED_CONTROLLERS.jpg"},
]

export default function ProductsPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Товары</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-4">
              <div className="aspect-square  relative rounded-md overflow-hidden mb-4">
                <Image
                  src={product.imgs}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold text-white mb-2">{product.name}</h3>
              <p className="text-sm text-zinc-400 mb-2 ">{product.description}</p>
              <p className="font-bold text-white">{product.price}</p>
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

