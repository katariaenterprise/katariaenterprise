"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [arrowVisible, setArrowVisible] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    // RAF-throttled seek: only one seek per animation frame, skip if same value
    let rafId = null;
    let pendingProgress = null;
    let lastSeeked = -1;

    const flushSeek = () => {
      rafId = null;
      if (pendingProgress === null) return;
      const p = pendingProgress;
      pendingProgress = null;
      if (video.readyState >= 2 && video.duration && Math.abs(p - lastSeeked) > 0.001) {
        video.currentTime = p * video.duration;
        lastSeeked = p;
      }
    };

    const unsubscribe = scrollYProgress.on("change", (v) => {
      pendingProgress = v;
      setArrowVisible(v < 0.02);
      if (!rafId) rafId = requestAnimationFrame(flushSeek);
    });

    return () => {
      unsubscribe();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* HTML5 video — scroll-scrubbed via currentTime */}
        <video
          ref={videoRef}
          src="/assets/truck-vid-scrub.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "contents" }}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Welcome To
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight mb-4 md:mb-6"
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