import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Étude Garniture Mécanique",
  description: "Étude technique de remplacement du presse-étoupe de la pompe 02CEX202PO par une garniture mécanique à cartouche.",
  authors: [{ name: "Mohammed Essommani" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1518",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
