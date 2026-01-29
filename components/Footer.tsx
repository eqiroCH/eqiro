import React from 'react';
import Link from 'next/link';
import { agencyConfig } from '@/lib/agencyConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 text-blue-500 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M75 25H35L20 50L35 75H75" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 50H65" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">{agencyConfig.agencyName}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {agencyConfig.tagline}
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {agencyConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-blue-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-blue-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <span className="text-gray-500 w-20">E-Mail:</span>
                <a href={`mailto:${agencyConfig.contactEmail}`} className="hover:text-blue-400 transition-colors">{agencyConfig.contactEmail}</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 w-20">Telefon:</span>
                <a href={`tel:${agencyConfig.contactPhone.replace(/\s/g, '')}`} className="hover:text-blue-400 transition-colors">{agencyConfig.contactPhone}</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-500 w-20">Ort:</span>
                <span>{agencyConfig.location}</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
          <div>
            &copy; {currentYear} {agencyConfig.agencyName}. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}
