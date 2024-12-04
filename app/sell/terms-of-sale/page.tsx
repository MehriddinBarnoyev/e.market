import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground flex justify-center align">
        {/* Main Content */}
        <main className="container  py-8">
          <div className="grid gap-8  md:grid-cols-2 ">
            {/* What you need to know */}
            <div className="space-y-6 ">
              <h2 className="text-xl font-semibold">Что нужно знать</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex items-center justify-center w-6 h-6 text-sm bg-primary text-primary-foreground rounded-full">
                    i
                  </div>
                  <p className="text-sm">
                    Заполнить информацию о товаре и выставить его на продажу
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="p-1.5 bg-muted rounded-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4H14V12H2V4Z"
                        className="stroke-foreground"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Выполнить свои обязательства по передаче товара покупателю
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="p-1.5 bg-muted rounded-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        className="stroke-foreground"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6 8L7.5 9.5L10.5 6.5"
                        className="stroke-foreground"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Вы получите оплату после того, как покупатель подтвердит
                    получение товара
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Сервисные сборы 20%
                </p>
              </div>
            </div>

            {/* Forbidden */}
            <Card className="p-6 bg-card">
              <h2 className="mb-6 text-xl font-semibold">Запрещено</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-destructive">✕</div>
                  <p className="text-sm">
                    Указывать недостоверную информацию о товаре
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="text-destructive">✕</div>
                  <p className="text-sm">Мошенничество в любом виде</p>
                </div>
                <div className="flex gap-3">
                  <div className="text-destructive">✕</div>
                  <p className="text-sm">
                    Общение с покупателем за пределами Playerok
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="text-destructive">✕</div>
                  <p className="text-sm">
                    Продажа запрещенных товаров, в том числе полученных
                    нелегальным путем
                  </p>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  За нарушение условий продажи средства будут возвращены
                  покупателю, Ваш товар будет снят с продажи и Ваша учетная
                  запись будет заблокирована
                </p>
              </div>
            </Card>
          </div>

          {/* Start Selling Button */}
          <div className="mt-8 space-y-4">
            <Link href={"/sell"}>
              <Button className="w-full bg-sky-800 " size="lg">
                Начать продажу
              </Button>
            </Link>
            <p className="text-center text-sm text-white">
              Нажимая «Начать продажу», Вы принимаете Условия продажи
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

{
  /* 
  import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-black text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-400">Playerok</CardTitle>
          <p className="text-center text-gray-400">★ 5.0 7.9 mln</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-300">Что нужно знать</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Заполнить информацию о товаре и выставить его на продажу</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Выполнить свои обязательства по передаче товара покупателю</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Вы получите оплату после того, как покупатель подтвердит получение товара</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400">Сервисные сборы 20%</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-red-300">Запрещено</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Указывать недостоверную информацию о товаре</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Мошенничество в любом виде</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Общение с покупателем за пределами Playerok</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Продажа запрещенных товаров, в том числе полученных нелегальным путем</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            За нарушение условий продажи средства будут возвращены покупателю, Ваш товар будет снят с продажи и Ваша учетная запись будет заблокирована
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Начать продажу
          </Button>
          <p className="text-xs text-center text-gray-500">
            Нажимая «Начать продажу», Вы принимаете Условия продажи
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


  
*/
}
