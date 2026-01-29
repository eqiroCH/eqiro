import React from 'react';
import Section from '../Section';
import Card from '../Card';
import FadeIn from '../FadeIn';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <Section 
      id="testimonials" 
      title="Was unsere Kunden sagen"
      background="gray"
      className="!pb-8 md:!pb-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <Card className="h-full flex flex-col p-6 md:p-8 bg-white border-blue-100 hover:border-blue-300 transition-colors">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Quote Text */}
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

