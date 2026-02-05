import React from 'react';
import Button from '../Button';
import FadeIn from '../FadeIn';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Moderne Webentwicklung für dein Unternehmen – <span className="text-blue-600">schnell, klar und stark.</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professionelle Websites, die einfach bedienbar sind und überzeugen.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 text-gray-700 font-medium">
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                Swiss-based
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </span>
                Custom Code
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </span>
                Secure & Fast
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <Button href="#kontakt" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-blue-200">
                <span>Kostenloses Beratungsgespräch</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
