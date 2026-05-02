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

    const scrub = (progress) => {
      if (video.readyState >= 2 && video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    // Fire only on actual scroll changes — no RAF spam
    const unsubscribe = scrollYProgress.on("change", (v) => {
      scrub(v);
      setArrowVisible(v < 0.02);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* HTML5 video — scroll-scrubbed via currentTime */}
        <video
          ref={videoRef}
          src="/assets/truck-vid-scrub.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
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
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground leading-tight mb-6"
          >
            KATARIA ENTERPRISE{/*<span className="text-primary">ENTERPRISE</span>*/}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            Powering India's supply chain with reliable logistics, smart warehousing and an expansive distribution network across 7+ states.
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          initial={{ opacity: 1 }}
          style={{ opacity: arrowVisible ? 1 : 0, transition: "opacity 0.3s" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-primary-foreground/60" size={32} />
        </motion.div>
      </div>
    </section>
  );
}