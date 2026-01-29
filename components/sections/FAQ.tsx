"use client";

import React, { useState } from 'react';
import Section from '../Section';
import FadeIn from '../FadeIn';
import Link from 'next/link';

const faqs = [
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Für einen einfachen Onepager benötigen wir in der Regel etwa 1-2 Wochen. Umfangreichere Firmen-Websites dauern etwa 3-5 Wochen, abhängig von deinen Anforderungen und wie schnell wir Feedback erhalten."
  },
  {
    question: "Was kostet eine Website bei euch?",
    answer: "Jedes Projekt ist anders, daher erstellen wir individuelle Angebote. Ein professioneller Onepager startet oft im niedrigen vierstelligen Bereich. Wichtig für uns: Du erhältst immer einen Festpreis vorab, ohne versteckte Nachkosten."
  },
  {
    question: "Kann ich Texte und Bilder später selbst ändern?",
    answer: "Ja, absolut. Wir bauen deine Website so auf, dass du einfache Änderungen selbst vornehmen kannst. Auf Wunsch bieten wir auch Wartungspakete ab CHF 50.–/Monat an, bei denen wir Updates und kleine Änderungen für dich übernehmen."
  },
  {
    question: "Muss ich mich um Hosting und Domain kümmern?",
    answer: "Wir unterstützen dich beim Kauf der Domain (z.B. dein-name.ch), jedoch kaufst du sie selbst, damit sie rechtlich dir gehört. Wir begleiten dich dabei step-by-step. Die technische Einrichtung übernehmen wir. Auf Wunsch und gegen Aufpreis kümmern wir uns auch komplett um die Verwaltung."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Mobile accordion
  const [expandedDesktop, setExpandedDesktop] = useState<Set<number>>(new Set()); // Desktop expand/collapse
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    email: '',
    question: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleDesktop = (index: number) => {
    const newExpanded = new Set(expandedDesktop);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedDesktop(newExpanded);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e72e2575-30c4-4c9b-b54c-e9a2f9ef0f72",
          email: formState.email,
          message: formState.question,
          subject: "Neue Frage aus FAQ",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({ email: '', question: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
        }, 2000);
      } else {
        setError(result.message || "Es ist ein Fehler aufgetreten.");
      }
    } catch (err) {
      setError("Verbindung fehlgeschlagen. Bitte versuche es später noch einmal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Get preview text for desktop (only first sentence)
  const getPreviewText = (text: string, index: number): string => {
    // For first 3 questions, show only first sentence as specified
    if (index < 3) {
      const firstSentence = text.match(/^[^.!?]+[.!?]/);
      if (firstSentence) {
        return firstSentence[0].trim();
      }
      // Fallback: first sentence up to first period
      const periodIndex = text.indexOf('.');
      if (periodIndex > 0) {
        return text.substring(0, periodIndex + 1);
      }
    }
    // For question 4 (index 3), show specific preview text
    if (index === 3) {
      return "Wir unterstützen dich beim Kauf der Domain (z.B. dein-name.ch)";
    }
    // Fallback for other questions
    const firstSentence = text.match(/^[^.!?]+[.!?]/);
    if (firstSentence) {
      return firstSentence[0].trim();
    }
    const periodIndex = text.indexOf('.');
    if (periodIndex > 0) {
      return text.substring(0, periodIndex + 1);
    }
    return text;
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <Section 
      id="faq" 
      title="Häufige Fragen" 
        subtitle="Alles, was du wissen musst, bevor wir starten."
      background="white"
        className="!pt-8 md:!pt-12"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="up">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:bg-blue-50 transition-colors duration-300">
              {/* Mobile: Clickable question with accordion */}
              <button
                onClick={() => toggleFAQ(index)}
                className="md:hidden w-full text-left flex items-center justify-between"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile: Collapsible answer */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-3' : 'max-h-0'
                }`}
              >
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
              </div>
              
              {/* Desktop: Entire box clickable – expand/collapse on click */}
              <div
                className="hidden md:block w-full text-left cursor-pointer"
                onClick={() => toggleDesktop(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDesktop(index);
                  }
                }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {expandedDesktop.has(index) ? (
                    <>
                      {faq.answer}
                      {faq.answer.length > getPreviewText(faq.answer, index).length && (
                        <span className="ml-2 text-blue-600/80 hover:text-blue-600 font-medium text-sm transition-colors">
                          Weniger anzeigen
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {getPreviewText(faq.answer, index)}
                      {faq.answer.length > getPreviewText(faq.answer, index).length && (
                        <span className="ml-2 text-blue-600/80 hover:text-blue-600 font-medium text-sm transition-colors">
                          Mehr anzeigen
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        
        {/* Call to Action */}
        <FadeIn delay={0.5} direction="up">
          <div className="text-center mt-12 pt-8 border-t border-gray-200 space-y-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base transition-colors cursor-pointer"
            >
              Noch Fragen offen?
            </button>
            <div>
              <Link 
                href="#kontakt"
                className="text-gray-400 hover:text-blue-600 text-xs md:text-sm transition-colors cursor-pointer"
              >
                Keine? Dann kontaktiere uns über deine Idee.
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => !isSuccess && setIsModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            {isSuccess ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frage gesendet!</h3>
                <p className="text-gray-600">Wir melden uns schnell bei dir.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Deine Frage</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Deine E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="name@beispiel.ch"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                      Was möchtest du wissen?
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Deine Frage..."
                      value={formState.question}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                    >
                      Abbrechen
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Frage senden'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </Section>
    </>
  );
}

