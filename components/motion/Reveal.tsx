"use client";

import type { ReactNode, Ref } from "react";
import { useInView } from "./useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  const classes = `transition-all duration-700 ease-out motion-reduce:transition-none ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  } ${className}`;
  const style = { transitionDelay: inView ? `${delay}ms` : "0ms" };

  if (as === "li") {
    return (
      <li ref={ref as Ref<HTMLLIElement>} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={classes} style={style}>
      {children}
    </div>
  );
}
