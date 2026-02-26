import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Sembar Adventure - Arung Jeram Sungai Cisadane Bogor",
  description: "Wahana arung jeram terbaik di Sungai Cisadane, Bogor. Petualangan rafting seru untuk keluarga, pelajar, dan corporate. Paket Family Trip, Panorama Trip, dan Adventure Trip.",
  keywords: ["arung jeram", "rafting", "Bogor", "Cisadane", "Sembah Adventure", "outbound", "rafting Bogor", "wisata air", "family rafting", "adventure"],
  authors: [{ name: "Sembah Adventure" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sembah Adventure - Arung Jeram Sungai Cisadane",
    description: "Petualangan rafting seru di Sungai Cisadane, Bogor. Cocok untuk keluarga, pelajar, dan corporate event.",
    url: "https://sembahadventure.com",
    siteName: "Sembah Adventure",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sembah Adventure - Arung Jeram Sungai Cisadane",
    description: "Petualangan rafting seru di Sungai Cisadane, Bogor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
