import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Confessions - Anonymous True Stories",
  description: "Watch and share real anonymous confessions in documentary-style videos.",
  openGraph: {
    title: "Confessions - Anonymous True Stories",
    description: "Watch and share real anonymous confessions in documentary-style videos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
