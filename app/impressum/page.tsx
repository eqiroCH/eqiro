"use client";

import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { agencyConfig } from '@/lib/agencyConfig';
import { useLanguage } from '@/lib/LanguageContext';

export default function Impressum() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <Section title={t.legal.imprint.title}>
          <div className="max-w-3xl mx-auto prose prose-blue">
            <p>
              <strong>{agencyConfig.agencyName}</strong><br />
              Musterstrasse 123<br />
              8000 Zürich<br />
              {t.footer.locationValue}
            </p>

            <h3>{t.legal.imprint.contact}</h3>
            <p>
              {t.footer.phone} {agencyConfig.contactPhone}<br />
              {t.footer.email} {agencyConfig.contactEmail}
            </p>

            <h3>{t.legal.imprint.representatives}</h3>
            <p className="whitespace-pre-line">
              {t.legal.imprint.representativesText}
            </p>

            <h3>{t.legal.imprint.disclaimerTitle}</h3>
            <p className="whitespace-pre-line">
              {t.legal.imprint.disclaimerText}
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
