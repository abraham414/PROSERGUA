"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Marca un elemento como "visible" la primera vez que entra al viewport y
 * deja de observarlo (las animaciones de entrada del sitio corren una sola
 * vez). Si el usuario pidió prefers-reduced-motion, se marca visible de
 * inmediato y nunca se activa el observer.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
