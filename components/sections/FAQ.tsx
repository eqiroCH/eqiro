import React from 'react';
import Section from '../Section';
import FadeIn from '../FadeIn';

const faqs = [
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Für einen einfachen Onepager benötigen wir in der Regel etwa 1-2 Wochen. Umfangreichere Firmen-Websites dauern etwa 3-5 Wochen, abhängig von Ihren Anforderungen und wie schnell wir Feedback erhalten."
  },
  {
    question: "Was kostet eine Website bei euch?",
    answer: "Jedes Projekt ist anders, daher erstellen wir individuelle Angebote. Ein professioneller Onepager startet oft im niedrigen vierstelligen Bereich. Wichtig für uns: Sie erhalten immer einen Festpreis vorab, ohne versteckte Nachkosten."
  },
  {
    question: "Kann ich Texte und Bilder später selbst ändern?",
    answer: "Ja, absolut. Wir bauen Ihre Website so auf, dass Sie einfache Änderungen selbst vornehmen können. Auf Wunsch bieten wir auch Wartungspakete ab CHF 50.–/Monat an, bei denen wir Updates und kleine Änderungen für Sie übernehmen."
  },
  {
    question: "Muss ich mich um Hosting und Domain kümmern?",
    answer: "Die Domain (z.B. ihr-name.ch) kaufen Sie selbst, damit Sie rechtlich zu 100% Ihnen gehört – wir unterstützen Sie dabei Schritt für Schritt. Die technische Einrichtung übernehmen wir. Auf Wunsch und gegen Aufpreis kümmern wir uns auch komplett um die Verwaltung."
  }
];

export default function FAQ() {
  return (
    <Section 
      id="faq" 
      title="Häufige Fragen" 
      subtitle="Alles, was Sie wissen müssen, bevor wir starten."
      background="white"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="up">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:bg-blue-50 transition-colors duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

