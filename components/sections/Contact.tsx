"use client";

import React, { useState } from 'react';
import Section from '../Section';
import Card from '../Card';
import Button from '../Button';
import FadeIn from '../FadeIn';
import { agencyConfig } from '@/lib/agencyConfig';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // WICHTIG: Hier muss dein Access Key hin. 
          // Du bekommst ihn kostenlos auf web3forms.com
          access_key: "e72e2575-30c4-4c9b-b54c-e9a2f9ef0f72", 
          name: formState.name,
          email: formState.email,
          message: formState.message,
          company: formState.company,
          subject: `Neue Anfrage von ${formState.name}`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', company: '', message: '' });
      } else {
        setError(result.message || "Es ist ein Fehler aufgetreten.");
        console.error("Form error:", result);
      }
    } catch (err) {
      setError("Verbindung fehlgeschlagen. Bitte versuche es später noch einmal.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section 
      id="kontakt" 
      title="Lass uns sprechen" 
      subtitle="Schick uns kurz deine Situation und wir melden uns schnell mit einer ehrlichen Einschätzung – kostenlos und unverbindlich."
      background="gray"
    >
      {/* Mobile: Side-by-side Icons + Form */}
      <div className="md:hidden flex gap-3 max-w-5xl mx-auto">
        {/* Left: Vertical Icon Column */}
        <div className="flex flex-col gap-3 flex-shrink-0">
          <a 
            href={`mailto:${agencyConfig.contactEmail}`} 
            className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
            aria-label="E-Mail"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
          <a 
            href={agencyConfig.whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors shadow-sm"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/eqiroch" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61587065925421" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors shadow-sm"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Right: Form */}
        <div className="flex-1">
          <Card className="!p-4">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-600 mb-6">Danke für deine Anfrage. Wir melden uns so schnell wie möglich bei dir.</p>
                <Button onClick={() => setIsSuccess(false)} variant="secondary">
                  Neue Nachricht schreiben
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="bg-red-50 text-red-600 p-2 rounded-lg text-sm border border-red-100">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Dein Name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="name@firma.ch"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">Unternehmen (optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Deine Firma"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Wie können wir dir helfen?"
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Desktop: Keep original layout */}
      <div className="hidden md:grid grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
        
        {/* Contact Info */}
        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-5">
            <a href={`mailto:${agencyConfig.contactEmail}`} className="block group">
              <Card className="flex items-center space-x-5 py-9 px-6 group-hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-transparent group-hover:border-l-cyan-600">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">E-Mail</h3>
                  <p className="text-sm text-gray-600">{agencyConfig.contactEmail}</p>
                </div>
              </Card>
            </a>

            <a href={agencyConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="flex items-center space-x-5 py-9 px-6 group-hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-transparent group-hover:border-l-green-600">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</h3>
                  <p className="text-sm text-gray-600">Nachricht schreiben</p>
                </div>
              </Card>
            </a>

            <a href="https://www.instagram.com/eqiroch" target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="flex items-center space-x-5 py-9 px-6 group-hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-transparent group-hover:border-l-pink-600">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors">Instagram</h3>
                  <p className="text-sm text-gray-600">@eqiroch</p>
                </div>
              </Card>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61587065925421" target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="flex items-center space-x-5 py-9 px-6 group-hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-transparent group-hover:border-l-blue-700">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Facebook</h3>
                  <p className="text-sm text-gray-600">Eqiro CH</p>
                </div>
              </Card>
            </a>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn direction="left" delay={0.4}>
          <Card>
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-600 mb-6">Danke für deine Anfrage. Wir melden uns so schnell wie möglich bei dir.</p>
                <Button onClick={() => setIsSuccess(false)} variant="secondary">
                  Neue Nachricht schreiben
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name-desktop" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name-desktop"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Dein Name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email-desktop" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input
                    type="email"
                    id="email-desktop"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="name@firma.ch"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company-desktop" className="block text-sm font-medium text-gray-700 mb-1">Unternehmen (optional)</label>
                  <input
                    type="text"
                    id="company-desktop"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Deine Firma"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message-desktop" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea
                    id="message-desktop"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Wie können wir dir helfen?"
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </form>
            )}
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
