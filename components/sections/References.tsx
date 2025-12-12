"use client";

import React, { useState } from 'react';
import Section from '../Section';
import Card from '../Card';
import FadeIn from '../FadeIn';
import { projects } from '@/lib/data';

// Component for progressive loading: shows placeholder until iframe loads
function WebsitePreview({ url, title, screenshot }: { url: string; title: string; screenshot?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-full pt-6 bg-white relative">
      {/* Screenshot Placeholder - always rendered, fades out when iframe loads */}
      <div 
        className={`absolute inset-0 pt-6 z-10 transition-opacity duration-500 ${
          isLoaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {screenshot ? (
          <img 
            src={screenshot} 
            alt={`Vorschau von ${title}`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Loading spinner */}
            <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
            <span className="text-xs text-gray-400">Lädt Vorschau...</span>
          </div>
        )}
      </div>

      {/* Iframe - loads in background */}
      {url && !hasError && (
        <iframe 
          src={url} 
          title={`Vorschau von ${title}`}
          className={`w-[400%] h-[400%] origin-top-left transform scale-[0.25] border-0 pointer-events-none transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          scrolling="no"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 pt-6 flex items-center justify-center bg-gray-50 text-gray-400 text-sm z-10">
          Vorschau nicht verfügbar
        </div>
      )}

      {/* Overlay to catch clicks */}
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 z-20 bg-transparent"
        aria-label={`Besuche ${title}`}
      />
    </div>
  );
}

export default function References() {
  return (
    <Section 
      id="referenzen" 
      title="Das haben wir gebaut" 
      subtitle="Websites, die nicht nur gut aussehen, sondern Probleme lösen."
      background="gray"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
                
                {/* Progressive Loading Preview */}
                {project.url ? (
                  <WebsitePreview 
                    url={project.url} 
                    title={project.title}
                    screenshot={project.screenshot}
                  />
                ) : (
                  <div className="w-full h-full pt-6 flex items-center justify-center bg-gray-50 text-gray-400 text-sm">
                    Vorschau nicht verfügbar
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h3 className="text-base md:text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 flex-grow">
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
