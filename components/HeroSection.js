"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll } from "framer-motion";

// ── Config ──────────────────────────────────────────────────────────────────
const FRAME_COUNT = 150;
const FRAME_PATH  = (i) => `/assets/hero-sec/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
// ────────────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const sectionRef  = useRef(null);
  const canvasRef   = useRef(null);
  const framesRef   = useRef([]);                 // loaded Image objects
  const currentRef  = useRef(0);                  // last drawn frame index
  const rafRef      = useRef(null);

  const [loaded, setLoaded]       = useState(0);  // count of loaded frames
  const [ready, setReady]         = useState(false);
  const [arrowVisible, setArrow]  = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // ── Preload all frames ───────────────────────────────────────────────────
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT) setReady(true);
      };
      img.onerror = () => {
        // count errored frames too so loading doesn't stall
        loadedCount++;
        setLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT) setReady(true);
      };
      images.push(img);
    }

    framesRef.current = images;
  }, []);

  // ── Draw first frame once ready ──────────────────────────────────────────
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const ctx    = canvas?.getContext("2d");
    const frame  = framesRef.current[0];
    if (ctx && frame?.complete && frame.naturalWidth > 0)
      ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
  }, [ready]);

  // ── Scrub on scroll ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!ready) return;

    const drawFrame = (index) => {
      const canvas = canvasRef.current;
      const ctx    = canvas?.getContext("2d");
      const frame  = framesRef.current[index];
      if (!ctx || !frame?.complete || frame.naturalWidth === 0) return;
      ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
      currentRef.current = index;
    };

    const unsubscribe = scrollYProgress.on("change", (v) => {
      setArrow(v < 0.02);
      const index = Math.min(
        Math.floor(v * FRAME_COUNT),
        FRAME_COUNT - 1
      );
      if (index === currentRef.current) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(index));
    });

    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, scrollYProgress]);

  const progress = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Canvas — frame sequence renders here */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        />

        {/* Loading overlay */}
        <motion.div
          className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center gap-4"
          animate={{ opacity: ready ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          style={{ pointerEvents: ready ? "none" : "auto" }}
        >
          <img src="/assets/logo.png" alt="" className="h-12 w-auto opacity-80" />
          <div className="w-48 h-1 rounded-full bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          <p className="text-white/50 text-xs font-body tracking-widest">{progress}%</p>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            One of India's Largest FMCG Distribution Networks
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight mb-4 md:mb-6"
          >
            KATARIA ENTERPRISE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-primary-foreground/70 text-sm md:text-lg max-w-2xl mx-auto mb-8 px-2"
          >
            Powering India's supply chain with reliable logistics, smart warehousing and an expansive distribution network across 7+ states.
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          initial={{ opacity: 1 }}
          style={{ opacity: arrowVisible ? 1 : 0, transition: "opacity 0.3s" }}
          className="absolute bottom-8 left-50% -translate-x-1/2"
        >
          <ChevronDown className="text-primary-foreground/60" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
