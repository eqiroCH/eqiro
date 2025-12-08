import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { projects } from '@/lib/data';

export default function References() {
  return (
    <Section 
      id="referenzen" 
      title="Ausgewählte Projekte" 
      subtitle="Websites, die nicht nur gut aussehen, sondern Probleme lösen."
      background="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Das Problem:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Unsere Lösung:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-auto">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Das Ergebnis:</h4>
              <ul className="space-y-2">
                {project.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-blue-500 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

