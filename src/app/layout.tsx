import type { Metadata } from "next";
import { Inter, Space_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/nav";
import Footer from "@/components/Footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "John David Udoumoh Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>John Udoumoh | Frontend Engineer & Next.js Developer</title>
        <link rel="icon" href="/assets/portfolio-logo.svg" />
        <meta
          name="description"
          content="Hark! Welcome, fair traveller. Set thine eyes upon that which may be call’d naught but art."
        />
        <meta
          name="keywords"
          content="Frontend Developer, Next.js Developer, React Engineer, Software Engineer, Portfolio, Web Development"
        />
        <meta name="author" content="John Udoumoh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VQHPFFMBM8"
      ></script>
      {/* Load Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VQHPFFMBM8"
      />

      {/* Initialize Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VQHPFFMBM8');
        `}
      </Script>

      <body className={`${inter.variable} ${spaceMono.variable} ${bricolage.variable} antialiased`}>
        <SpeedInsights />
        <Nav />
        {children}
        <Footer />
      </body>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "John Udoumoh",
            jobTitle: "Frontend Engineer",
            url: "https://yourwebsite.com",
            sameAs: [
              "https://github.com/udoumoh",
              "https://www.linkedin.com/in/johnudoumoh",
            ],
          }),
        }}
      />
    </html>
  );
}
