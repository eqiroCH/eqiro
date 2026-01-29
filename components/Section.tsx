import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  background = 'white'
}: SectionProps) {
  
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}







