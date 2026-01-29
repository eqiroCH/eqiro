import React from 'react';
import Section from '../Section';
import Card from '../Card';
import Button from '../Button';
import FadeIn from '../FadeIn';

export default function Pricing() {
  return (
    <Section 
      id="preise" 
      background="gray"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.2} direction="up">
          <Card className="text-center p-6 md:p-12 lg:p-16 border-blue-100 shadow-lg">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dein individuelles Preis-Angebot
            </h3>
            <p className="text-gray-600 mb-8 md:mb-10 text-base md:text-lg">
              Jedes Projekt ist einzigartig.<br />
              Egal ob einfacher Onepager oder komplexe Firmen-Website – wir kalkulieren transparent und fair.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12 mb-8 md:mb-10 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 lg:whitespace-nowrap">Kostenloses Gespräch</h4>
                  <p className="text-sm text-gray-500 mt-1">Wir lernen uns kennen und besprechen deine Ziele.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Verbindlicher Preis</h4>
                  <p className="text-sm text-gray-500 mt-1">Du weisst genau, was es kostet. Keine Überraschungen.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 lg:whitespace-nowrap">Schnelle Umsetzung</h4>
                  <p className="text-sm text-gray-500 mt-1">Wir liefern professionelle Ergebnisse in kurzer Zeit.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Höchste Qualität</h4>
                  <p className="text-sm text-gray-500 mt-1">Modern, sauber und auf höchstem Niveau.</p>
                </div>
              </div>
            </div>

            <Button href="#kontakt" variant="primary" className="text-lg px-8 py-4 w-full md:w-auto">
              <span>Deine Vision</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Button>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
