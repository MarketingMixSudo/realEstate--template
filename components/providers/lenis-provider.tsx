"use client";

import { useEffect } from "react";
import Lenis from 'lenis'

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: .8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.5,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // ⬇️ Obsługa kliknięcia w linki z #id
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a");

      if (target && target.hash?.startsWith("#")) {
        event.preventDefault();

        const section = document.querySelector(target.hash) as HTMLElement | null; // 🔥 Rzutowanie

        if (section) {
          console.log("Przewijam do:", target.hash, section);
          lenis.scrollTo(section, { duration: 1.5 });
        } else {
          console.warn("Nie znaleziono sekcji:", target.hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}