import type { Metadata } from "next";
import { Varela_Round as Round } from "next/font/google";
import "./globals.css";

const inter = Round({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhwanil Vyas",
  description: "A passionate software engineer. Contact for projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
