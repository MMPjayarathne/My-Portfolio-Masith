import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MedievalSharp, Cinzel, Moon_Dance } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const moonDance = Moon_Dance({
  variable: "--font-moon-dance", 
  weight: "400", 
  subsets: ["latin"],
});
const medievalSharp = MedievalSharp({
  variable: "--font-medieval-sharp",
  weight: "400",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Masith Pramuditha",
  description: "Portfolio of Masith Pramuditha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} ${medievalSharp.variable} ${cinzel.variable} ${moonDance.variable} antialiased`}
       >
        {children}
      </body>
    </html>
  );
}
