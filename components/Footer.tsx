import React from 'react';
import Link from 'next/link';
import { agencyConfig } from '@/lib/agencyConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">{agencyConfig.agencyName}</h3>
            <p className="text-sm text-gray-400">{agencyConfig.tagline}</p>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>

          <div className="text-center md:text-right text-sm text-gray-500">
            &copy; {currentYear} {agencyConfig.agencyName}. <br className="hidden md:inline" />
            {agencyConfig.location}.
          </div>
          
        </div>
      </div>
    </footer>
  );
}

