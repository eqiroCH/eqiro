import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { agencyConfig } from "@/lib/agencyConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${agencyConfig.agencyName} – ${agencyConfig.tagline}`,
  description: "Professionelle Websites für kleine Unternehmen, Dienstleister und Startups in der Region Zürich. Schnell, modern und bezahlbar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
