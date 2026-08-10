import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Étude de modernisation d’étanchéité | Mohammed Essommani",
  description:
    "Étude technique de remplacement du presse-étoupe de la pompe 02CEX202PO par une garniture mécanique à cartouche.",
  authors: [{ name: "Mohammed Essommani" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
