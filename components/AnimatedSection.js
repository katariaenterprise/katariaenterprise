"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const [startVisible, setStartVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight) setStartVisible(true);
  }, []);

  if (prefersReduced || startVisible) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
