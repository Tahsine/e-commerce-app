import type { Metadata } from "next";
import { Anton, Fredoka } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import CartModal from "@/components/CartModal";

import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

import { SITE_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Exquisite dining experience. Fresh ingredients, unforgettable flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${anton.variable} antialiased`}>
        <CartProvider>
          {children}
          <Analytics />
          <CartModal />
        </CartProvider>
      </body>
    </html>
  );
}
