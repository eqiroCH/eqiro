import React from 'react';
import Section from '../Section';
import Card from '../Card';
import FadeIn from '../FadeIn';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <Section 
      id="leistungen" 
      title="Unsere Leistungen" 
      subtitle="Kein Fachchinesisch. Wir liefern genau das, was dein Unternehmen für den Online-Erfolg braucht."
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card className="flex flex-col h-full border-t-4 border-t-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4 bg-blue-50 inline-block px-2 py-1 rounded self-start">
                Für: {service.target}
              </p>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

