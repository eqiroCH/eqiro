import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { teamMembers } from '@/lib/data';

export default function About() {
  return (
    <Section 
      id="ueber-uns" 
      title="Wer hinter Studio NextWeb steht" 
      subtitle="Wir sind zwei Entwickler aus der Region Zürich. Unser Ziel: Ehrliche Arbeit ohne Agentur-Kauderwelsch."
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <Card key={index} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold text-gray-400">
              {member.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                &quot;{member.description}&quot;
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

