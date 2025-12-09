import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import References from '@/components/sections/References';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <References />
        <Process />
        <Pricing />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
