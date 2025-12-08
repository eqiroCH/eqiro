import React from 'react';
import Section from '../Section';
import Card from '../Card';
import Button from '../Button';
import { pricingPackages } from '@/lib/data';

export default function Pricing() {
  return (
    <Section 
      id="preise" 
      title="Transparente Preismodelle" 
      subtitle="Jedes Projekt ist anders, aber diese Pakete geben dir eine gute Orientierung."
      background="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPackages.map((pkg, index) => (
          <Card key={index} className={`flex flex-col h-full relative ${index === 1 ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20 shadow-xl scale-100 md:scale-105 z-10' : ''}`}>
            {index === 1 && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full shadow-md">
                Beliebt
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>
              <div className="text-3xl font-extrabold text-gray-900">{pkg.priceLabel}</div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button href="#kontakt" variant={index === 1 ? 'primary' : 'outline'} className="w-full">
              Angebot anfragen
            </Button>
          </Card>
        ))}
      </div>
      
      <p className="text-center text-gray-500 text-sm mt-12">
        * Alle Preise sind Richtwerte. Du erhältst immer ein individuelles, verbindliches Festpreis-Angebot nach unserem Erstgespräch.
      </p>
    </Section>
  );
}

