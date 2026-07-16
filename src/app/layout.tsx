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
  title: "Grub Bio",
  description: "Driving innovation at the intersection of organic waste management, sustainable agriculture, and climate resilience.",
  icons: {
    icon: "/GRUB-favicon.png",
  },
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
