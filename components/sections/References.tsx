import React from 'react';
import Section from '../Section';
import Card from '../Card';
import FadeIn from '../FadeIn';
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
          <FadeIn key={index} delay={index * 0.1}>
            <Card className="!p-0 flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              {/* Browser Preview Window */}
              <div className="relative bg-gray-100 border-b border-gray-200 aspect-video overflow-hidden">
                {/* Fake Browser Bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-10 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                
                {/* Iframe Preview */}
                <div className="w-full h-full pt-6 bg-white relative">
                   {project.url ? (
                    <iframe 
                      src={project.url} 
                      title={`Vorschau von ${project.title}`}
                      className="w-[400%] h-[400%] origin-top-left transform scale-[0.25] border-0 pointer-events-none"
                      loading="lazy"
                      scrolling="no"
                    />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 text-sm">
                       Vorschau nicht verfügbar
                     </div>
                   )}
                   {/* Overlay to catch clicks and prevent interaction with iframe */}
                   <a 
                     href={project.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="absolute inset-0 z-20 bg-transparent"
                     aria-label={`Besuche ${project.title}`}
                   />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group-hover:underline"
                  >
                    Website besuchen
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
