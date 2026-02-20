# Ordination Prof. Dr. Neumayr – Website

Hochmoderne, responsive One-Page-Website für die Arztpraxis (Innere Medizin, Kardiologie, Sportmedizin) in Lienz.

## Tech-Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **TypeScript**

## Entwicklung starten

```bash
npm install
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Anpassungen

- **E-Mail:** In `src/components/Footer.tsx` und `src/components/KontaktAnfahrt.tsx` die Platzhalter-E-Mail durch die echte Ordinations-E-Mail ersetzen.
- **Impressum & Datenschutz:** Inhalte in `src/app/impressum/page.tsx` und `src/app/datenschutz/page.tsx` mit den rechtlichen Texten ergänzen.
- **Logo:** Im Header ist aktuell ein Stethoskop-Icon als Platzhalter; für ein eigenes Logo die Komponente `src/components/Header.tsx` anpassen.

## Design

- Akzentfarbe: `#b86308`
- Schrift: Inter (Google Fonts)
- Sticky Navigation, Smooth Scrolling, klare Sektionen mit viel Weißraum
