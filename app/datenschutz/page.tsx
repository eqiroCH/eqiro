"use client";

import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { useLanguage } from '@/lib/LanguageContext';

export default function Datenschutz() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <Section title={t.legal.privacy.title}>
          <div className="max-w-3xl mx-auto prose prose-blue">
            <p>
              {t.legal.privacy.responsible}
            </p>
            <p>
              <strong>Eqiro</strong><br />
              (Adresse siehe Impressum)
            </p>

            <h3>{t.legal.privacy.generalTitle}</h3>
            <p>
              {t.legal.privacy.generalText}
            </p>

            <h3>{t.legal.privacy.dataCollectionTitle}</h3>
            <h4>{t.legal.privacy.formTitle}</h4>
            <p>
              {t.legal.privacy.formText}
            </p>

            <h4>{t.legal.privacy.cookiesTitle}</h4>
            <p>
              {t.legal.privacy.cookiesText}
            </p>

            <h4>{t.legal.privacy.logsTitle}</h4>
            <p>
              {t.legal.privacy.logsText}
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
