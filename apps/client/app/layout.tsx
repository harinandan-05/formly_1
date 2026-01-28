import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Formly",
  description: "Easiest way to create forms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
