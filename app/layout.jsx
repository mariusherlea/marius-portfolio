//app/layout.jsx
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://www.mariusherlea.dev"),

  title: {
    default: "Marius Herlea | Full Stack Developer",
    template: "%s | Marius Herlea",
  },

  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Strapi and eCommerce applications. Portfolio featuring StorePulse SaaS analytics, blog platforms and Stripe integrations.",

  keywords: [
    "Marius Herlea",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Strapi",
    "Frontend Developer",
    "eCommerce Developer",
    "Stripe",
    "Portfolio",
  ],

  authors: [
    {
      name: "Marius Herlea",
      url: "https://www.mariusherlea.dev",
    },
  ],

  creator: "Marius Herlea",

  verification: {
    google: "9Yfq0y-el0uz9Q79zPdKstvOZZzUe1w-5nBDoyaBqng"
  },

  openGraph: {
    title: "Marius Herlea | Full Stack Developer",
    description:
      "Portfolio featuring Next.js, React, TypeScript, Strapi and SaaS projects.",
    url: "https://www.mariusherlea.dev",
    siteName: "Marius Herlea Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marius Herlea Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marius Herlea | Full Stack Developer",
    description:
      "Portfolio featuring Next.js, React, TypeScript and SaaS projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}