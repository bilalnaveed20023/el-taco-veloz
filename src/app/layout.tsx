import type { Metadata, Viewport } from "next";
import { Big_Shoulders, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/content";

const display = Big_Shoulders({ weight: ["700", "800", "900"], subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "El Taco Veloz · Fast tacos in Midtown and Southwest Detroit";
const description =
  "Tacos, burritos, quesadillas, tortas and breakfast, ordered at the counter and out in about five minutes. Vegan options, $2 Taco Tuesday. Inside Marcus Market on 2nd Ave and on Toledo St.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3130"),
  title,
  description,
  applicationName: "El Taco Veloz",
  keywords: ["El Taco Veloz", "Midtown Detroit tacos", "Marcus Market", "vegan tacos Detroit", "Taco Tuesday Detroit"],
  openGraph: { type: "website", siteName: "El Taco Veloz", title, description, locale: "en_US", images: [{ url: asset("/img/og.jpg"), width: 1200, height: 630 }] },
};

export const viewport: Viewport = { themeColor: "#4a1220", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
