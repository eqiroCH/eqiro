"use client";

import React, { useState } from 'react';
import Section from '../Section';
import FadeIn from '../FadeIn';
import { processSteps } from '@/lib/data';

export default function Process() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <Section 
      id="ablauf" 
      title="So arbeiten wir zusammen" 
      subtitle="Einfach, transparent und ohne versteckte Kosten."
      background="white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Mobile: Compact Accordion */}
        <div className="md:hidden space-y-3">
          {processSteps.map((step, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.05}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {step.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openStep === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <FadeIn key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                <div className={`flex flex-row items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-left px-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.step}. {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 px-8"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

