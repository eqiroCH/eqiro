import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { agencyConfig } from "@/lib/agencyConfig";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eqiro",
  description: "Professionelle Websites für kleine Unternehmen, Dienstleister und Startups in der Region Zürich. Schnell, modern und bezahlbar.",
  icons: {
    icon: '/eqiro-logo.png', // Pfad zum Favicon/Logo im public Ordner
    // apple: '/apple-touch-icon.png', // Optional: für Apple Devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
