import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://www.civitasatlas.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Civitas Atlas Technologies | India's Land Intelligence Infrastructure",
    template: "%s | Civitas Atlas Technologies",
  },
  description:
    "Civitas Atlas Technologies builds MahaAtlas, the Maharashtra Land Intelligence Platform — unifying GIS, AI, LegalTech, and PropTech with public land records into one trusted intelligence layer.",
  keywords: [
    "Civitas Atlas",
    "MahaAtlas",
    "land intelligence platform",
    "digital public infrastructure India",
    "GIS Maharashtra",
    "land records technology",
    "LegalTech India",
    "PropTech India",
    "7/12 extract digitization",
  ],
  authors: [{ name: "Civitas Atlas Technologies" }],
  creator: "Civitas Atlas Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Civitas Atlas Technologies",
    title: "Civitas Atlas Technologies | India's Land Intelligence Infrastructure",
    description:
      "MahaAtlas unifies GIS, AI, LegalTech, and PropTech with public land records — building trusted land intelligence for citizens, institutions, and governments.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Civitas Atlas Technologies — MahaAtlas Land Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civitas Atlas Technologies | India's Land Intelligence Infrastructure",
    description:
      "MahaAtlas unifies GIS, AI, LegalTech, and PropTech with public land records into one trusted intelligence platform.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-atlas-black font-body text-atlas-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-atlas-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-atlas-black"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
