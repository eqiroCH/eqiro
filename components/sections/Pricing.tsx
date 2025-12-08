import React from 'react';
import Section from '../Section';
import Card from '../Card';
import Button from '../Button';

export default function Pricing() {
  return (
    <Section 
      id="preise" 
      title="Preise & Angebot" 
      subtitle="Jedes Projekt ist einzigartig. Deshalb gibt es bei uns keine Standard-Preisschilder, sondern faire Angebote nach Mass."
      background="gray"
    >
      <div className="max-w-3xl mx-auto">
        <Card className="text-center p-8 md:p-12 border-blue-100 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Dein individuelles Festpreis-Angebot
          </h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Egal ob einfacher Onepager oder komplexe Firmen-Website: Wir kalkulieren transparent und fair. 
            Nach unserem kostenlosen Erstgespräch erhältst du ein verbindliches Angebot – ohne versteckte Kosten.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Kostenloses Gespräch</h4>
                <p className="text-sm text-gray-500">Wir lernen uns kennen und besprechen deine Ziele.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Verbindlicher Fixpreis</h4>
                <p className="text-sm text-gray-500">Du weisst genau, was es kostet. Keine Überraschungen.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Schnelle Umsetzung</h4>
                <p className="text-sm text-gray-500">Wir liefern professionelle Ergebnisse in kurzer Zeit.</p>
              </div>
            </div>
          </div>

          <Button href="#kontakt" variant="primary" className="text-lg px-8 py-4 w-full md:w-auto">
            Jetzt unverbindlich anfragen
          </Button>
        </Card>
      </div>
    </Section>
  );
}
