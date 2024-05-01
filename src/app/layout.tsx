import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import { Card, CardContent } from "@/components/ui/card";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "50 Problems",
  description: "Top 50 problems reported by you and ready to solve by great engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        "max-w-xl mx-auto p-2",
        fontSans.variable
      )}>
        <header>
          <Card className="neu">
            <CardContent className="py-3">
              <h2 className="text-xl text-center font-bold">
                50 Problems
              </h2>
            </CardContent>
          </Card>
        </header>

        <main className="h-screen overflow-scroll no-scrollbar">
          {children}
        </main>
      </body>
    </html>
  )
}
