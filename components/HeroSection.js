"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll } from "framer-motion";

const VIDEO_SRC = "/assets/truck-vid-scrub.mp4";
const CACHE_KEY = "ke-hero-video-v1";

async function getVideoBlob(onProgress) {
  // 1. Try Cache API first (persists across page loads)
  if ("caches" in window) {
    const cache = await caches.open(CACHE_KEY);
    const cached = await cache.match(VIDEO_SRC);
    if (cached) {
      onProgress(100);
      return URL.createObjectURL(await cached.blob());
    }
  }

  // 2. Fetch with progress tracking
  const res = await fetch(VIDEO_SRC);
  const total = Number(res.headers.get("content-length")) || 0;
  const reader = res.body.getReader();
  const chunks = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    if (total) onProgress(Math.round((received / total) * 100));
  }

  const blob = new Blob(chunks, { type: "video/mp4" });

  // 3. Store in Cache API for next visit
  if ("caches" in window) {
    const cache = await caches.open(CACHE_KEY);
    await cache.put(VIDEO_SRC, new Response(blob.slice(), { headers: { "content-type": "video/mp4" } }));
  }

  return URL.createObjectURL(blob);
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const blobUrlRef = useRef(null);
  const [arrowVisible, setArrowVisible] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);   // 0–100
  const [ready, setReady] = useState(false);              // blob loaded + video seekable

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // ── Load video into blob / cache ──
  useEffect(() => {
    let objectUrl = null;

    getVideoBlob(setLoadProgress).then((url) => {
      objectUrl = url;
      blobUrlRef.current = url;
      const video = videoRef.current;
      if (!video) return;
      video.src = url;
      video.load();
      // canplaythrough is unreliable on iOS Safari blob URLs
      // fall back to canplay or a short timeout if neither fires
      const onReady = () => setReady(true);
      video.addEventListener("canplaythrough", onReady, { once: true });
      video.addEventListener("canplay", onReady, { once: true });
    }).catch(() => {
      // Fallback: just use the original src if fetch fails
      const video = videoRef.current;
      if (video) { video.src = VIDEO_SRC; video.load(); }
      setReady(true);
    });

    return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, []);

  // ── Scrub: RAF-throttled + iOS-safe (waits for seeked before next seek) ──
  useEffect(() => {
    if (!ready) return;
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    let rafId = null;
    let pendingProgress = null;
    let lastSeeked = -1;
    let isSeeking = false;

    const doSeek = (p) => {
      if (video.readyState >= 2 && video.duration && Math.abs(p - lastSeeked) > 0.001) {
        isSeeking = true;
        lastSeeked = p;
        video.currentTime = p * video.duration;
      }
    };

    const flushSeek = () => {
      rafId = null;
      // On iOS, don't stack seeks — wait for seeked event
      if (isSeeking || pendingProgress === null) return;
      const p = pendingProgress;
      pendingProgress = null;
      doSeek(p);
    };

    // iOS fires seeked when the frame is actually ready to display
    const onSeeked = () => {
      isSeeking = false;
      // Drain any pending progress that arrived while we were seeking
      if (pendingProgress !== null && !rafId) {
        rafId = requestAnimationFrame(flushSeek);
      }
    };

    video.addEventListener("seeked", onSeeked);

    const unsubscribe = scrollYProgress.on("change", (v) => {
      pendingProgress = v;
      setArrowVisible(v < 0.02);
      if (!rafId && !isSeeking) rafId = requestAnimationFrame(flushSeek);
    });

    return () => {
      unsubscribe();
      if (rafId) cancelAnimationFrame(rafId);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [ready, scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Video — src set dynamically after blob is ready */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "contents" }}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />

        {/* Loading overlay — fades out once ready */}
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
              animate={{ width: `${loadProgress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          <p className="text-white/50 text-xs font-body tracking-widest">{loadProgress}%</p>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            One of India’s Largest FMCG Distribution Networks
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