import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "@/components/footer-one";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LOCALES } from "@/i18n";
import { getMessages } from "next-intl/server";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gas & Heating Services in Weston-super-Mare, Bristol & Bridgwater | Local Boiler & Heating Expert",
  description:
    "Trusted local gas and heating engineer in Weston-super-Mare, Bristol and Bridgwater. Expert in boiler servicing, heating repairs, radiator installation and smart boiler controls. Call for reliable service today!",
  keywords: [
    "gas engineer Weston-super-Mare, Bristol and Bridgwater",
    "boiler repair Weston-super-Mare",
    "heating engineer Weston-super-Mare, Bristol and Bridgwater",
    "radiator installation Weston-super-Mare",
    "smart boiler controls",
    "boiler service near me",
    "gas boiler installation Bristol",
    "local heating expert Bridgwater",
  ],
  openGraph: {
    title: "Gas & Heating Services in Weston-super-Mare, Bristol and Bridgwater | Local Expert",
    description:
      "Professional gas and heating services in Weston-super-Mare, Bristol and Bridgwater. From boiler repairs and servicing to smart heating upgrades — reliable, local, and affordable.",
    // url: "https://www.yourdomain.co.uk/",
    siteName: "Gas & Heating Services in Weston-super-Mare, Bristol and Bridgwater",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Gas & Heating Engineer in Weston-super-Mare, Bristol and Bridgwater",
      },
    ],
  },
  alternates: {
    // canonical: "https://www.yourdomain.co.uk/",
    languages: {
      // "en-GB": "https://www.yourdomain.co.uk/",
      // "pl-PL": "https://www.yourdomain.co.uk/pl",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas & Heating Services in Weston-super-Mare, Bristol and Bridgwater | Local Expert",
    description:
      "Reliable gas and heating engineer offering boiler repairs, servicing, and installations in Weston-super-Mare.",
    images: ["/images/poheating-metadata.jpg"],
  },
  category: "Heating and Plumbing Services",
};
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate the locale
  if (!LOCALES.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error('Failed to load messages:', error);
    // Fallback to empty messages
    messages = {};
  }

  return (
    <html lang={locale}>
      <Head>
        <link rel="preload" as="image" href="/images/poheating-hero.webp" />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <FooterSection />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}