import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Inter } from "next/font/google";
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
  title: "Safariman | Tourism Website",
  description:
    "Premium East Africa travel experiences with safari, beach escapes, culture and adventure tours.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/safariman_logo.png",
    shortcut: "/safariman_logo.png",
    apple: "/safariman_logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
