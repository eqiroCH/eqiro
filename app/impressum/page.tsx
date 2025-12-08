import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { agencyConfig } from '@/lib/agencyConfig';

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <Section title="Impressum">
          <div className="max-w-3xl mx-auto prose prose-blue">
            <p>
              <strong>{agencyConfig.agencyName}</strong><br />
              Musterstrasse 123<br />
              8000 Zürich<br />
              Schweiz
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: {agencyConfig.contactPhone}<br />
              E-Mail: {agencyConfig.contactEmail}
            </p>

            <h3>Vertretungsberechtigte Personen</h3>
            <p>
              Max Muster, Inhaber<br />
              Anna Beispiel, Inhaberin
            </p>

            <h3>Haftungsausschluss</h3>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>

            <p>
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

