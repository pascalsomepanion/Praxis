"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  Heart,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const schwerpunkte = [
  {
    icon: Stethoscope,
    title: "Innere Medizin",
    items: [
      "Umfassende Abklärung internistischer Beschwerdebilder",
      "Ursachenforschung statt reiner Symptombekämpfung",
      "Individuelle Behandlungspläne für langfristige Gesundheit",
      "Spezialisierte Betreuung bei komplexen Organerkrankungen",
    ],
  },
  {
    icon: Heart,
    title: "Kardiologie",
    items: [
      "Modernste Herz-Kreislauf-Diagnostik (High-End Canon Ultraschall)",
      "Früherkennung von Herzrhythmusstörungen und Durchblutungsstörungen",
      "Individuelle Risikoanalyse für Schlaganfall und Herzinfarkt",
      "Langzeit-Überwachung und Blutdruck-Management",
    ],
  },
  {
    icon: Activity,
    title: "Sportmedizin",
    items: [
      "Punktgenaue Analyse der körperlichen Leistungsfähigkeit",
      "Wissenschaftlich fundierte Trainingsberatung für alle Level",
      "Sportkardiologische Freigabe für Wettkampf und Freizeit",
      "Prävention von Überlastungsschäden und Sportverletzungen",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Vorsorge",
    items: [
      "Maßgeschneiderte Check-ups für jedes Lebensalter",
      "Frühzeitiges Erkennen von versteckten Gesundheitsrisiken",
      "Beratung zu Lebensstil, Ernährung und Vitalität",
      "Ausführliche Befundbesprechung ohne Zeitdruck",
    ],
  },
];

const TITELBILD = "/hero-herz-titel.png";

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Link
        href="#info"
        className="flex flex-col items-center gap-3 transition opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
        aria-label="Zum Info-Bereich scrollen"
      >
        <motion.span
        className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink-muted text-shadow-soft"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
      </motion.span>
      <motion.div
        className="h-10 w-px bg-ink-muted/60"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top" }}
      />
      </Link>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="bg-surface-elevated">
      {/* Hintergrund: komplett weiß, erst unter dem Header */}
      <div
        className="fixed inset-0 top-16 z-0 bg-white"
        aria-hidden
      />

      {/* Titelbild: nur das Herz, rechts; erst unter dem Header */}
      <div
        className="fixed inset-0 top-16 z-0 flex items-center justify-end overflow-hidden pr-0"
        aria-hidden
      >
        <div className="relative h-full w-full max-w-[55vw] min-w-[280px] lg:max-w-[50vw]">
          <Image
            src={TITELBILD}
            alt=""
            fill
            priority
            className="object-contain object-right object-bottom"
            sizes="55vw"
            quality={90}
          />
        </div>
      </div>

      {/* Hero-Inhalt: nur sichtbare Höhe unter dem Header, damit Scroll-Hinweis im Viewport bleibt */}
      <div
        className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 pb-24 text-center sm:px-6 lg:px-8"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-accent text-shadow-soft"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Ordination
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="mt-4 font-display font-semibold text-display-xl text-ink text-shadow-title"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              >
                Prof. h.c. Univ.-Doz. Dr.
                <br />
                Günther Neumayr
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="mt-5 text-base text-ink-muted text-shadow-soft sm:text-lg"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              >
                Wahlarztpraxis in Lienz | Osttirol
              </motion.p>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </div>

      {/* Abschnitt unter dem Titelbild (Ziel für Menü „Info“) – Abstand zum Header wie bei Leistungen/Team */}
      <div id="info" className="relative z-10 scroll-mt-past-hero bg-white/92 min-h-full pt-2 sm:pt-4">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
          {/* Braune Überschrift wie bei den anderen Abschnitten */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Allgemeine Informationen
            </p>
            <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
              Ihre Gesundheit im Mittelpunkt
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Ihre Gesundheit verdient Zeit und Präzision. Wir begleiten Sie ganzheitlich mit fachlicher Expertise.
            </p>
          </div>
          {/* Schwerpunkte mit Icons und Karten-Darstellung */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-stagger">
            {schwerpunkte.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft transition hover:border-accent/20 hover:shadow-card"
                >
                  <div className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-accent opacity-0 transition group-hover:opacity-100" aria-hidden />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <ul className="mt-3 space-y-2" role="list">
                    {item.items.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-snug text-stone-600"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
