import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const metadata: Metadata = {
  title: { default: "Étude Garniture Mécanique", template: "%s · Étude 02CEX202PO" },
  description: "Étude technique de remplacement du presse-étoupe de la pompe 02CEX202PO par une garniture mécanique à cartouche.",
  authors: [{ name: "Mohammed Essommani" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b1518" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
