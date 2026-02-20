"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDE_IMAGES = [
  { src: "/carousel/slide1.jpg", alt: "Praxis" },
  { src: "/carousel/slide2.jpg", alt: "Ordination" },
  { src: "/carousel/slide3.jpg", alt: "Praxisräumlichkeit" },
];

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #fafaf9 0%, #f5e6d9 40%, #fafaf9 100%)",
  "linear-gradient(135deg, #f5e6d9 0%, #fff 50%, #fafaf9 100%)",
  "linear-gradient(135deg, #fff 0%, #f5e6d9 50%, #fafaf9 100%)",
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-10 w-full max-w-5xl mx-auto">
      <div className="relative aspect-[21/9] sm:aspect-[3/1] overflow-hidden rounded-2xl bg-stone-100 shadow-card ring-1 ring-stone-200/60">
        {SLIDE_IMAGES.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${(index - current) * 100}%)`,
            }}
            aria-hidden={index !== current}
          >
            {failed[index] ? (
              <div
                className="absolute inset-0"
                style={{ background: FALLBACK_GRADIENTS[index % 3] }}
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                onError={() => setFailed((f) => ({ ...f, [index]: true }))}
              />
            )}
          </div>
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {SLIDE_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 bg-[#b86308]"
                  : "w-2 bg-white/80 hover:bg-white"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
