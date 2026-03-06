import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { themeInitScript } from "@/lib/theme-init";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhwanilvyas.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhwanil Vyas - Software Engineer",
    template: "%s | Dhwanil Vyas",
  },
  description:
    "Software engineer with 6+ years of experience building products with React, React Native, Node.js, and TypeScript. Portfolio, projects, and contact.",
  keywords: [
    "Dhwanil Vyas",
    "Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "React Native",
    "Full Stack",
    "TypeScript",
    "JavaScript",
    "portfolio",
  ],
  authors: [{ name: "Dhwanil Vyas", url: siteUrl }],
  creator: "Dhwanil Vyas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dhwanil Vyas - Software Engineer",
    title: "Dhwanil Vyas - Software Engineer",
    description:
      "Software engineer with 6+ years of experience. React, React Native, Node.js, TypeScript. Portfolio and contact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhwanil Vyas - Software Engineer",
    description:
      "Software engineer with 6+ years of experience. React, React Native, Node.js, TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {children}
      </body>
      <GoogleTagManager gtmId="G-REV0NK79N4" />
    </html>
  );
}
