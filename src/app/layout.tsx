import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/nav";
import Footer from "@/components/Footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "John David Udoumoh Portfolio",
  description: "Abandon all hope ye who enter here ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/portfolio-logo.svg" />
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        <SpeedInsights />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
