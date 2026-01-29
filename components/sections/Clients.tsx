"use client";

import React, { useState, useEffect } from 'react';
import Section from '../Section';

// Kunden-Logos
const clients = [
  { name: 'Nirali', logo: 'nirali.png', id: 1 },
  { name: 'Osteria Dei Poeti', logo: 'OsteriaDeiPoeti.png', id: 2 },
  { name: 'Salottino', logo: 'salottino.png', id: 3 },
  { name: 'Wow Wash Reinigung', logo: 'wowwashreinigung.png', id: 4 },
  { name: 'AEREX', logo: 'aerex.png', id: 5 },
];

export default function Clients() {
  const [offset, setOffset] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + 1;
        // Nach 5 vollständigen Durchgängen (5 * clients.length) zurück zum Start
        if (next >= clients.length * 5) {
          setDisableTransition(true);
          setTimeout(() => {
            setDisableTransition(false);
          }, 50);
          return 0; // Springe zurück zum Anfang
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Erstelle endlose Kette der Logos: 5x dupliziert [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
  const endlessClients = [...clients, ...clients, ...clients, ...clients, ...clients];

  // Berechne translateX
  const logoWidth = 128; // w-32 = 128px
  const gap = 32; // gap-8 = 2rem = 32px
  const itemWidth = logoWidth + gap;
  
  const translateX = offset * itemWidth;

  return (
    <Section 
      id="kunden" 
      title=""
      background="white"
      className="!pt-8 md:!pt-12 !pb-8 md:!pb-12"
    >
      <div className="w-screen max-w-none relative left-1/2 -ml-[50vw] overflow-hidden">
        <div 
          className="flex items-center gap-8 md:gap-12 lg:gap-16"
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: disableTransition ? 'none' : 'transform 1s ease-in-out',
          }}
        >
          {endlessClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-32 h-20 md:w-40 md:h-24 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img 
                src={`/clients/${client.logo}`} 
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

