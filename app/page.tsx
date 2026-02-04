import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import References from '@/components/sections/References';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Clients from '@/components/sections/Clients';

export const metadata: Metadata = {
  title: 'Eqiro',
  description: 'Moderne Websites für kleine Unternehmen in Zürich. Individuelle Webentwicklung ohne Templates. Onepager, Business-Websites & Relaunches. Transparente Preise, schnelle Umsetzung.',
  keywords: [
    'Website erstellen Zürich',
    'Webentwicklung Schweiz',
    'Professionelle Websites',
    'Onepager erstellen',
    'Business Website',
    'Website Agentur Zürich',
  ],
  alternates: {
    canonical: 'https://eqiro.ch',
  },
  openGraph: {
    title: 'Eqiro',
    description: 'Moderne Websites für kleine Unternehmen in Zürich. Individuelle Webentwicklung ohne Templates.',
    url: 'https://eqiro.ch',
    siteName: 'Eqiro',
    locale: 'de_CH',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <main className="flex-grow" role="main">
        <Hero />
        <section aria-label="Referenzen und Projekte">
        <References />
        </section>
        <section aria-label="Unser Arbeitsprozess">
        <Process />
        </section>
        <section aria-label="Preise und Angebot">
        <Pricing />
        </section>
        <section aria-label="Über uns">
          <About />
        </section>
        <section aria-label="Kundenstimmen">
          <Testimonials />
        </section>
        <section aria-label="Unsere Kunden">
          <Clients />
        </section>
        <section aria-label="Häufige Fragen">
        <FAQ />
        </section>
        <section aria-label="Kontakt">
        <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
