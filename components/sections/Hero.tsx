import React from 'react';
import Button from '../Button';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Moderne Websites für Ihr Unternehmen – <span className="text-blue-600">schnell, klar und stark.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professionelle Websites, die einfach bedienbar sind und überzeugen.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8 mb-12 text-gray-700 font-medium">
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              Individuelles Design
            </div>
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              Mobil optimiert & schnell
            </div>
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              Persönliche Betreuung
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="#kontakt" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-blue-200">
              Kostenloses Erstgespräch anfragen
            </Button>
            <Button href="#referenzen" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
              Referenzen ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
