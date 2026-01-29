"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { agencyConfig } from '@/lib/agencyConfig';
import Button from './Button';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 md:w-12 md:h-12 text-blue-600 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M75 25H35L20 50L35 75H75" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 50H65" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{agencyConfig.agencyName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {agencyConfig.navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button href="#kontakt" variant="primary" className="py-2.5 px-6 text-sm shadow-blue-100 shadow-lg">
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 focus:outline-none hover:text-blue-600 transition-colors"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-full shadow-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {agencyConfig.navLinks.map((link) => (
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
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
