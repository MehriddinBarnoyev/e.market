import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNavbar } from "@/components/MainNavbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gaming Marketplace",
  description: "A marketplace for gamers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

