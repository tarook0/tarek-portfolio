import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tarek Al-Habbal | Software Engineer & Team Lead",
  description:
    "Portfolio of Tarek Al-Habbal, a Software Engineering Team Lead & CTO specializing in full-stack development with .NET, Next.js, Java, Python, and Flutter.",
  keywords: [
    "software engineer",
    "team lead",
    // "CTO",
    "full-stack developer",
    ".NET developer",
    "next.js developer",
    "react developer",
    "flutter developer",
    "portfolio",
  ],
  authors: [{ name: "Tarek Al-Habbal" }],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="tarek-theme-preference"
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
