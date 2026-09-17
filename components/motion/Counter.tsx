"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

interface CounterProps {
  value: number;
  className?: string;
  padStart?: number;
}

const DURATION_MS = 1200;

export default function Counter({ value, className = "", padStart }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }

    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const text = padStart ? String(display).padStart(padStart, "0") : String(display);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
