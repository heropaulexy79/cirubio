import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/navbar/floating-nav";
import { SiteFooter } from "@/components/footer/site-footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grub.bio | Sustainable Insect Protein & Circular Bioeconomy",
  description: "Grub.bio transforms organic waste into sustainable insect protein, organic fertilizer, and environmental intelligence solutions that drive the circular bioeconomy.",
  keywords: ["sustainable insect protein", "circular economy", "organic waste recycling", "black soldier fly", "waste management", "organic fertilizer", "climate technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans font-medium antialiased min-h-screen bg-background text-foreground flex flex-col`}>
        <FloatingNav />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
