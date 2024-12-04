import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const cardImg = [
  {
    id: 1,
    img: "https://c8.alamy.com/comp/F935G7/credit-card-with-russia-flag-background-for-bank-presentations-and-F935G7.jpg",
  },
  {
    id: 2,
    img: "https://www.rusalia.com/wp-content/uploads/2023/10/mir-card-trio-2024.webp",
  },
  {
    id: 3,
    img: "https://maurisweb.ru/images/detailed/102/%D0%A0%D0%A1%D0%91_%D0%BA%D0%B0%D1%80%D1%82%D0%B0_.jpg",
  },
  {
    id: 4,
    img: "https://www.rusalia.com/wp-content/uploads/2023/10/mir-card-trio-2024.webp",
  },
  {
    id: 5,
    img: "https://maurisweb.ru",
  },
];
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Способы оплаты</h3>
            <div className="flex flex-wrap gap-3" key={"somtehinv"}>
                {/* map for image from card image */}
                {cardImg.map((card) => (
                  <div key={card.id}>
                    <Image
                      src={card.img}
                      alt="Visa"
                      width={48}
                      height={32}
                      className="bg-white rounded p-1"
                    />
                  </div>
                ))}
            
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <nav className="grid gap-2">
              <Link href="#" className="hover:text-zinc-300 transition-colors">
                Условия продажи
              </Link>
              <Link href="#" className="hover:text-zinc-300 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="hover:text-zinc-300 transition-colors">
                Пользовательское соглашение
              </Link>
              <Link href="#" className="hover:text-zinc-300 transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Support Button */}
          <div className="flex justify-start md:justify-end">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Написать в поддержку
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-4 text-sm text-zinc-400">
          <p>
            2024 © Playerok — маркетплейс игровых товаров и услуг. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
