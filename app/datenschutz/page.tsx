import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { agencyConfig } from '@/lib/agencyConfig';

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <main className="flex-grow pt-20">
        <Section id="datenschutz" title="Datenschutzerklärung" background="white">
          <div className="max-w-3xl mx-auto prose prose-blue">
            <p>
              Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
            </p>
            <p>
              {agencyConfig.agencyName}<br />
              {agencyConfig.location}<br />
              E-Mail: {agencyConfig.contactEmail}
            </p>

            <h3>Allgemeiner Hinweis</h3>
            <p>
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf unserer Website</h3>
            <h4>Kontaktformular</h4>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>

            <h3>SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3>Web3Forms</h3>
            <p>
              Wir nutzen für unser Kontaktformular den Dienst Web3Forms. Die eingegebenen Daten werden an Web3Forms übermittelt und von dort per E-Mail an uns weitergeleitet. Web3Forms speichert die Daten nicht dauerhaft, sondern dient lediglich als Gateway. Weitere Informationen finden Sie in der Datenschutzerklärung von Web3Forms.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
