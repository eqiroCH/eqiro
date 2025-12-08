import { Language } from './translations';

export const getServices = (lang: Language) => {
  const t = {
    de: {
      onepager: {
        title: "Onepager / Landingpage",
        description: "Alles auf einer Seite. Perfekt für den Start oder ein spezifisches Angebot.",
        target: "Kleine Dienstleister, Einzelkämpfer, Events",
        features: ["Alle Infos kompakt auf einen Blick", "Kontaktformular & Call-to-Action", "Mobil optimiert", "Schnelle Ladezeit"]
      },
      business: {
        title: "Business-Website",
        description: "Mehrseitige Website (3–7 Seiten). Für Unternehmen, die mehr zu sagen haben.",
        target: "KMU, Restaurants, Praxen",
        features: ["Startseite, Leistungen, Team, Kontakt", "SEO-Grundoptimierung", "Google Maps Integration", "Einfach erweiterbar"]
      },
      relaunch: {
        title: "Relaunch / Optimierung",
        description: "Deine alte Website ist langsam oder sieht aus wie 2010? Wir machen sie neu.",
        target: "Bestehende Websites",
        features: ["Modernes Redesign", "Technische Modernisierung", "Bessere Texte & Struktur", "Mobile-First Optimierung"]
      }
    },
    en: {
      onepager: {
        title: "One-Pager / Landing Page",
        description: "Everything on one page. Perfect for starting out or a specific offer.",
        target: "Small service providers, freelancers, events",
        features: ["All info compact at a glance", "Contact form & Call-to-Action", "Mobile optimized", "Fast loading time"]
      },
      business: {
        title: "Business Website",
        description: "Multi-page website (3–7 pages). For companies that have more to say.",
        target: "SMEs, restaurants, practices",
        features: ["Home, Services, Team, Contact", "Basic SEO optimization", "Google Maps integration", "Easily expandable"]
      },
      relaunch: {
        title: "Relaunch / Optimization",
        description: "Your old website is slow or looks like 2010? We'll remake it.",
        target: "Existing websites",
        features: ["Modern redesign", "Technical modernization", "Better texts & structure", "Mobile-first optimization"]
      }
    }
  }[lang];

  return [t.onepager, t.business, t.relaunch];
};

export const getProjects = (lang: Language) => {
  const t = {
    de: {
      salottino: {
        description: "Modernes Redesign für ein italienisches Restaurant. Mobil optimiert und mit digitaler Speisekarte.",
        solution: "Ein modernes, responsives Design, das die Atmosphäre des Restaurants widerspiegelt und auf allen Geräten perfekt funktioniert.",
        benefits: ["Digitale Speisekarte", "Verbesserte mobile Darstellung", "Hochwertiges Design"]
      },
      baris: {
        description: "Stilvolle Landingpage für einen Barbershop. Fokus auf Services und einfache Kontaktaufnahme.",
        solution: "Eine stilvolle Landingpage mit klarem Fokus auf Dienstleistungen und Atmosphäre.",
        benefits: ["Starker visueller Auftritt", "Einfache Übersicht der Services", "Direkte Kontaktmöglichkeit"]
      },
      agenzy: {
        description: "Professionelle Webpräsenz für eine Kreativagentur. Clean, performant und portfolio-zentriert.",
        solution: "Eine cleane, leistungsstarke Website, die das Portfolio und die Expertise der Agentur unterstreicht.",
        benefits: ["Klares Branding", "Performance-optimiert", "Professionelle Außenwirkung"]
      }
    },
    en: {
      salottino: {
        description: "Modern redesign for an Italian restaurant. Mobile optimized and with digital menu.",
        solution: "A modern, responsive design that reflects the restaurant's atmosphere and works perfectly on all devices.",
        benefits: ["Digital menu", "Improved mobile display", "High-quality design"]
      },
      baris: {
        description: "Stylish landing page for a barbershop. Focus on services and easy contact.",
        solution: "A stylish landing page with clear focus on services and atmosphere.",
        benefits: ["Strong visual appearance", "Simple overview of services", "Direct contact option"]
      },
      agenzy: {
        description: "Professional web presence for a creative agency. Clean, performant and portfolio-centric.",
        solution: "A clean, high-performance website that highlights the agency's portfolio and expertise.",
        benefits: ["Clear branding", "Performance optimized", "Professional external image"]
      }
    }
  }[lang];

  return [
    {
      id: "salottino",
      title: "Salottino",
      category: lang === 'de' ? "Gastronomie" : "Gastronomy",
      url: "https://salottinoweb.netlify.app",
      ...t.salottino
    },
    {
      id: "baris-barbershop",
      title: "Baris Barbershop",
      category: "Barbershop",
      url: "https://baris-barbershop.netlify.app",
      ...t.baris
    },
    {
      id: "agenzy",
      title: "Agenzy",
      category: lang === 'de' ? "Agentur" : "Agency",
      url: "https://agenzy.ch",
      ...t.agenzy
    }
  ];
};

export const getProcessSteps = (lang: Language) => {
  const t = {
    de: [
      { title: "Kennenlern-Call", description: "Kostenlos & unverbindlich (20–30 Min). Wir schauen, ob die Chemie stimmt und was du brauchst." },
      { title: "Angebot & Konzept", description: "Du bekommst einen klaren Preis und einen Plan, wie deine neue Seite aussehen wird." },
      { title: "Design & Umsetzung", description: "Wir bauen deine Website mit modernen Tools. Du kannst dich zurücklehnen." },
      { title: "Feedback & Anpassung", description: "Wir zeigen dir den Entwurf. Du sagst uns, was wir noch feinschleifen sollen." },
      { title: "Go-Live", description: "Wir schalten die Seite online und zeigen dir kurz, wie alles funktioniert." }
    ],
    en: [
      { title: "Intro Call", description: "Free & non-binding (20–30 min). We see if the chemistry is right and what you need." },
      { title: "Offer & Concept", description: "You get a clear price and a plan of what your new site will look like." },
      { title: "Design & Implementation", description: "We build your website with modern tools. You can sit back." },
      { title: "Feedback & Adjustment", description: "We show you the draft. You tell us what we should fine-tune." },
      { title: "Go-Live", description: "We put the site online and briefly show you how everything works." }
    ]
  }[lang];

  return t.map((step, index) => ({ step: index + 1, ...step }));
};

export const getTeamMembers = (lang: Language) => {
  const t = {
    de: {
      lion: "Ambitionierter Fullstack Developer. Spezialisiert auf moderne Web-Technologien und nutzerfreundliche Interfaces.",
      mustafa: "Passionierter Entwickler mit Fokus auf komplexe Webanwendungen und saubere Code-Architektur."
    },
    en: {
      lion: "Ambitious Fullstack Developer. Specialized in modern web technologies and user-friendly interfaces.",
      mustafa: "Passionate developer focusing on complex web applications and clean code architecture."
    }
  }[lang];

  return [
    {
      name: "Lion Hereqi",
      role: "Fullstack Developer",
      email: "hereqilion@gmail.com",
      github: "https://github.com/hereqi",
      linkedin: "https://www.linkedin.com/in/lion-h-3b394b333/",
      instagram: "https://instagram.com/lioxhe",
      description: t.lion
    },
    {
      name: "Mustafa Sagaaro",
      role: "Fullstack Developer",
      email: "sagaaromustafa@gmail.com",
      github: "https://github.com/mustafa-sagaaro",
      linkedin: "https://www.linkedin.com/in/mustafa-sagaaro-26166827a/",
      instagram: "https://instagram.com/mustafazh_",
      description: t.mustafa
    }
  ];
};
