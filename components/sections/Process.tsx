"use client";

import React from 'react';
import Section from '../Section';
import { getProcessSteps } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

export default function Process() {
  const { t, language } = useLanguage();
  const processSteps = getProcessSteps(language);

  return (
    <Section 
      id="ablauf" 
      title={t.process.title}
      subtitle={t.process.subtitle}
      background="white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>
          
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left md:px-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Number Circle */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Empty Space for balancing */}
                <div className="flex-1 md:px-8 hidden md:block"></div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
