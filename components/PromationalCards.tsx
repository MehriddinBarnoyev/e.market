import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PromotionalCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="bg-gradient-to-r from-red-900 to-pink-900 border-0">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Скидки</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white/90">
            Товары по скидке до -90%
            <br />
            Успей купить по низкой цене!
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-blue-900 to-blue-700 border-0">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Отзывы</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white/90">
            Проверенные продавцы с отзывами
            <br />
            Каждая сделка защищена!
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-green-900 to-green-700 border-0">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Зови друзей</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white/90">
            Делись ссылкой для приглашения —<br />
            получай 10% от их первой покупки
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
