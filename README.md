# Eqiro - Portfolio Website

Dies ist eine vollständige, produktionsreife Website für eine kleine Webagentur, erstellt mit Next.js 15, TypeScript und Tailwind CSS.

## 🚀 Starten

1. Abhängigkeiten installieren:
   ```bash
   pnpm install
   # oder
   npm install
   ```

2. Entwicklungsserver starten:
   ```bash
   pnpm dev
   # oder
   npm run dev
   ```

3. Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## 📁 Struktur

- `app/`: Enthält die Seiten (`page.tsx`, `impressum/`, `datenschutz/`) und das Layout.
- `components/`: Wiederverwendbare UI-Komponenten (`Button`, `Card`, `Section`) und Layout-Komponenten (`NavBar`, `Footer`).
- `components/sections/`: Die einzelnen Sektionen der Startseite (Hero, Services, Preise, etc.).
- `lib/`: Konfiguration und Daten.

## ⚙️ Anpassung

### Name & Branding
In der Datei `lib/agencyConfig.ts` kannst du zentrale Einstellungen ändern:
- Agenturname
- Slogan
- Kontakt-Email
- Standort

### Inhalte (Texte, Preise, Projekte)
Alle Inhalte sind strukturiert in `lib/data.ts` abgelegt. Hier kannst du einfach die Texte, Listen und Objekte bearbeiten, um:
- Leistungen anzupassen
- Neue Referenzprojekte hinzuzufügen
- Preise zu ändern
- Den Ablauf zu aktualisieren
- Team-Mitglieder zu bearbeiten

### Farben & Styling
Das Projekt nutzt Tailwind CSS. 
- Globale Styles befinden sich in `app/globals.css`.
- Die Primärfarbe ist aktuell `blue-600`. Um das Farbschema zu ändern, kannst du per "Suchen & Ersetzen" z.B. `blue-600` durch `indigo-600` oder `emerald-600` ersetzen.

## 📦 Build für Produktion

```bash
pnpm build
pnpm start
```

Viel Erfolg mit deiner neuen Agentur-Website!
