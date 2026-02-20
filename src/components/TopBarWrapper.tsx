"use client";

import { useState, useEffect } from "react";

export function TopBarWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const threshold = 40;
    const handleScroll = () => setVisible(window.scrollY <= threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky top-0 z-[60] w-full overflow-hidden transition-[max-height] duration-300 ease-out"
      style={{ maxHeight: visible ? "4rem" : "0" }}
      role="region"
      aria-label="Öffnungszeiten und Praxisinhaber"
    >
      {children}
    </div>
  );
}
