import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
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
    <html lang="en" className={`${inter.variable} ${geist.variable} scroll-smooth`}>
      <body className={`${inter.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
