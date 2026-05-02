"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function TypewriterText({ text, className = "", speed = 18, tag: Tag = "span" }) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return (
    <Tag ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && inView && (
        <span className="inline-block w-0.5 h-[1em] bg-primary align-middle ml-0.5 animate-pulse" />
      )}
    </Tag>
  );
}
