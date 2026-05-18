"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Disable Lenis on touch devices — native momentum scroll is smoother
    // and Lenis desynchronizes scroll-scrubbed animations on mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return children;
}
