import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { MainNavbar } from "@/components/MainNavbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gaming Marketplace",
  description: "A marketplace for gamers",
  icons: "https://play-lh.googleusercontent.com/-t3rK4VwNHQiwPlvmCNvRFcL-gi8Zb9oYlL9mEgJ4s2C4hL42fwU0nq6FczRT835Ag"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`} suppressHydrationWarning>
        <MainNavbar />
        {children}
      </body>
    </html>
  )
}

