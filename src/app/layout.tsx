import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/navbar/floating-nav";
import { NewsletterSection, SiteFooter } from "@/components/footer/site-footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CiruBio - Advancing Africa's Bio-circular Economy",
  description: "Driving innovation at the intersection of organic waste management, sustainable agriculture, and climate resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}>
        <FloatingNav />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <NewsletterSection />
        <SiteFooter />
      </body>
    </html>
  );
}
