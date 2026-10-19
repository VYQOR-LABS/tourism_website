import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Inter } from "next/font/google";
import JsonLd from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "East Africa Safaris, Tours & Travel",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Plan tailor-made safaris, beach escapes, cultural journeys and outdoor adventures across Kenya, Tanzania, Rwanda and Uganda with Safariman Expeditions.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "East Africa Safaris, Tours & Travel",
    description:
      "Plan tailor-made safaris, beach escapes, cultural journeys and outdoor adventures across Kenya, Tanzania, Rwanda and Uganda.",
    images: [{ url: "/maasai-mara-acacia.jpg", alt: "Safari landscape in East Africa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "East Africa Safaris, Tours & Travel",
    description:
      "Plan tailor-made safaris, beach escapes, cultural journeys and outdoor adventures across Kenya, Tanzania, Rwanda and Uganda.",
    images: ["/maasai-mara-acacia.jpg"],
  },
  icons: {
    icon: "/safariman_logo.png",
    shortcut: "/safariman_logo.png",
    apple: "/safariman_logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/safariman_logo.png`,
        image: `${SITE_URL}/maasai-mara-acacia.jpg`,
        description:
          "East African travel company creating safari, beach, cultural and adventure journeys across Kenya, Tanzania, Rwanda and Uganda.",
        telephone: "+254733349711",
        email: "info@safariman.co.ke",
        areaServed: ["Kenya", "Tanzania", "Rwanda", "Uganda"].map((name) => ({
          "@type": "Country",
          name,
        })),
        sameAs: [
          "https://web.facebook.com/SafarimanExped/",
          "https://x.com/safariman007",
          "https://www.instagram.com/safariman_expeditions/",
          "https://www.tripadvisor.com/Attraction_Review-g294207-d13951657-Reviews-Safariman_Expeditions-Nairobi.html",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable}`}>
      <body>
        <JsonLd data={structuredData} />
        {children}
      </body>
    </html>
  );
}
