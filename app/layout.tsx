import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { agencyConfig } from "@/lib/agencyConfig";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://eqiro.ch";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${agencyConfig.agencyName} – ${agencyConfig.tagline}`,
    template: `%s | ${agencyConfig.agencyName}`,
  },
  description: "Professionelle Websites für kleine Unternehmen, Dienstleister und Startups in der Region Zürich. Schnell, modern und bezahlbar. Individuelle Webentwicklung ohne Templates.",
  keywords: [
    "Webentwicklung Zürich",
    "Website erstellen Schweiz",
    "Professionelle Websites",
    "Onepager erstellen",
    "Landingpage Zürich",
    "Webdesign Schweiz",
    "Website Agentur Zürich",
    "Fullstack Entwickler Schweiz",
    "Responsive Websites",
    "SEO optimierte Websites",
    "Moderne Websites",
    "Business Website",
    "Firmenwebsite erstellen",
  ],
  authors: [{ name: agencyConfig.agencyName }],
  creator: agencyConfig.agencyName,
  publisher: agencyConfig.agencyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: agencyConfig.agencyName,
  title: `${agencyConfig.agencyName} – ${agencyConfig.tagline}`,
  description: "Professionelle Websites für kleine Unternehmen, Dienstleister und Startups in der Region Zürich. Schnell, modern und bezahlbar.",
    countryName: "Switzerland",
  },
  twitter: {
    card: "summary_large_image",
    title: `${agencyConfig.agencyName} – ${agencyConfig.tagline}`,
    description: "Professionelle Websites für kleine Unternehmen in der Region Zürich. Schnell, modern und bezahlbar.",
    creator: "@eqiro", // Falls vorhanden
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification code - hier eintragen wenn vorhanden
    // google: "verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Webentwicklung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": siteUrl,
    name: agencyConfig.agencyName,
    description: "Professionelle Webentwicklung für kleine Unternehmen, Dienstleister und Startups in der Region Zürich. Individuelle Websites ohne Templates.",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/logo.svg`,
    telephone: agencyConfig.contactPhone,
    email: agencyConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
    areaServed: {
      "@type": "City",
      name: "Zürich",
    },
    priceRange: "$$",
    serviceType: [
      "Webentwicklung",
      "Webdesign",
      "Landingpage Erstellung",
      "Onepager Entwicklung",
      "Business Website",
      "Website Relaunch",
      "SEO Optimierung",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "10",
    },
    sameAs: [
      // Social Media Links hier eintragen falls vorhanden
      // "https://www.linkedin.com/company/eqiro",
      // "https://github.com/eqiro",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: agencyConfig.agencyName,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: agencyConfig.contactPhone,
      contactType: "customer service",
      areaServed: "CH",
      availableLanguage: ["German", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
  };

  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
