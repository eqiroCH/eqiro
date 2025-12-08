"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { agencyConfig } from '@/lib/agencyConfig';
import Button from './Button';
import { useLanguage } from '@/lib/LanguageContext';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: t.nav.projects, href: "#referenzen" },
    { name: t.nav.process, href: "#ablauf" },
    { name: t.nav.offer, href: "#preise" },
    { name: t.nav.about, href: "#ueber-uns" },
    { name: t.nav.contact, href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            {/* Logo-Bild liegt in /public/eqiro-logo.png – hier bei Bedarf austauschen */}
            {/* <Image src="/eqiro-logo.png" alt="Eqiro Logo" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10 object-contain" /> */}
            
            {/* Fallback, falls noch kein Logo-Bild da ist - hier bitte durch Image-Komponente ersetzen sobald Logo in public/ folder liegt */}
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Eqiro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Button href="#kontakt" variant="primary" className="py-2.5 px-6 text-sm shadow-blue-100 shadow-lg">
              {t.nav.cta}
            </Button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-sm font-medium border-l border-gray-200 pl-6 ml-2">
              <button 
                onClick={() => setLanguage('de')} 
                className={`transition-colors ${language === 'de' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-600'}`}
              >
                DE
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`transition-colors ${language === 'en' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-600'}`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button & Language Switcher Mobile */}
          <div className="flex items-center md:hidden space-x-4">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <button 
                onClick={() => setLanguage('de')} 
                className={`${language === 'de' ? 'text-blue-600 font-bold' : 'text-gray-400'}`}
              >
                DE
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`${language === 'en' ? 'text-blue-600 font-bold' : 'text-gray-400'}`}
              >
                EN
              </button>
            </div>

            <button 
              className="p-2 text-gray-600 focus:outline-none hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
              aria-label="Menü umschalten"
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-full shadow-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-50 last:border-0"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button href="#kontakt" variant="primary" className="w-full text-center mt-4" onClick={closeMenu}>
              {t.nav.ctaMobile}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
