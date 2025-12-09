import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { agencyConfig } from '@/lib/agencyConfig';

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <main className="flex-grow pt-20">
        <Section id="impressum" title="Impressum" background="white">
          <div className="max-w-3xl mx-auto prose prose-blue">
            <p className="lead">
              Angaben gemäß Schweizer Recht.
            </p>

            <h3>Kontaktadresse</h3>
            <p>
              {agencyConfig.agencyName}<br />
              {agencyConfig.location}<br />
              Schweiz
            </p>
            <p>
              E-Mail: <a href={`mailto:${agencyConfig.contactEmail}`}>{agencyConfig.contactEmail}</a><br />
              Telefon: {agencyConfig.contactPhone}
            </p>

            <h3>Haftungsausschluss</h3>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
            <p>
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>

            <h3>Urheberrechte</h3>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich <strong>{agencyConfig.agencyName}</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
