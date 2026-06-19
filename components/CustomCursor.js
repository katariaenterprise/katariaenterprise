"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => cursor.style.opacity = "1";
    const handleMouseLeave = () => cursor.style.opacity = "0";

    // Constant rotation animation
    const animate = () => {
      rotationRef.current += 2;
      const img = cursor?.querySelector('img');
      if (img) {
        img.style.transform = `translate(-50%, -50%) rotate(${rotationRef.current}deg)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden md:block"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 0.3s ease",
        filter: "drop-shadow(0 0 14px rgba(0, 0, 0, 0.8))",
      }}
    >
      <img
        src="/assets/cursor.png"
        alt=""
        style={{
          width: "58px",
          height: "58px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
