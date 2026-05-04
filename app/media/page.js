"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";
import { Play, X, Youtube } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Kataria Enterprise Fleet Overview",
    desc: "A complete walkthrough of our 330+ containerised truck fleet operating across 7 states.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Warehouse Operations Tour",
    desc: "Inside our state-of-the-art WMS-powered warehouses managing high-volume FMCG inventory.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Safety & Training Programs",
    desc: "How we train our 250+ professionals to maintain the highest safety standards on the road.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Distribution Network Explained",
    desc: "Our pan-India distribution model covering 280+ districts and 2500+ towns.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Brand Partner Stories",
    desc: "Hear from Balaji, Coca-Cola and Vadilal on why they trust Kataria Enterprise.",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "36 Years of Growth",
    desc: "A look back at our journey from a single-state distributor to a pan-India powerhouse.",
  },
];

const photos = [
  { src: "/assets/media/15th_August.JPG", alt: "15th AUGUST", aspect: "aspect-[4/3]" },
  { src: "/assets/warehouse.jpeg", alt: "WAREHOUSE OPERATIONS", aspect: "aspect-square" },
  { src: "/assets/company-building.jpg", alt: "Corporate Office Rajkot", aspect: "aspect-video" },
  { src: "/assets/media/Corporate_Yoga.jpg", alt: "CORPORATE YOGA", aspect: "aspect-video" },
  { src: "/assets/media/26th_January.jpg", alt: "26th JANUARY", aspect: "aspect-[4/3]" },
  { src: "/assets/distribution.png", alt: "DISTRIBUTION NETWORK", aspect: "aspect-square" },
  { src: "/assets/hero-trucks2.jpeg", alt: "NEW TRUCKS", aspect: "aspect-video" },
  { src: "/assets/media/Eye_Checkup.jpg", alt: "HEALTH & EYE CHECKUP", aspect: "aspect-video" },
  { src: "/assets/media/Milestone_Achievement.JPG", alt: "ACHIEVEMENT CELEBRATION", aspect: "aspect-video" },
];

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Navbar />
      <main>

        {/* ── Page Header ── */}
        <section className="pt-24 pb-6 overflow-hidden">
          <div className="text-center">
            <h1
              className="font-heading font-black text-5xl md:text-8xl lg:text-9xl leading-none select-none"
              style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}
            >
              <TypewriterText text="MEDIA" speed={200} />
            </h1>
          </div>
        </section>

        {/* ── Photo Gallery ── */}
        <section className="section-padding overflow-hidden">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Photos
              </p>
              <h2 className="section-title">Photo Gallery</h2>
            </AnimatedSection>

            {/* Mobile: single column */}
            <div className="flex flex-col gap-3 md:hidden">
              {photos.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div
                    className="relative rounded-xl overflow-hidden cursor-pointer hover-lift"
                    onClick={() => setLightbox(p)}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end justify-start p-3">
                      <span className="text-primary-foreground font-heading font-semibold text-xs leading-tight">
                        {p.alt}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Desktop: masonry */}
            <div className="hidden md:block columns-3 gap-4 space-y-4">
              {photos.map((p, i) => (
                <div key={i} className="break-inside-avoid">
                  <AnimatedSection delay={i * 0.08}>
                    <div
                      className="relative rounded-2xl overflow-hidden cursor-pointer group hover-lift"
                      onClick={() => setLightbox(p)}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        sizes="33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="text-primary-foreground font-heading font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity px-4 text-center">
                          {p.alt}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Videos ── */}
        {/* <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Watch
              </p>
              <h2 className="section-title">Videos</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer hover-lift bg-foreground/10"
                    onClick={() => setActiveVideo(v.id)}
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                        alt={v.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="text-primary-foreground ml-1" size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-background">
                      <h3 className="font-heading font-bold text-sm text-foreground mb-1">{v.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── YouTube CTA ── */}
        {/* <section className="section-padding">
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl gradient-red p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-primary-foreground/80 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                    Stay Updated
                  </p>
                  <h2 className="font-heading font-black text-3xl md:text-4xl text-primary-foreground mb-3">
                    Subscribe to Our YouTube Channel
                  </h2>
                  <p className="text-primary-foreground/70 text-sm max-w-md">
                    Watch fleet tours, warehouse walkthroughs, brand stories and more — straight from the heart of Kataria Enterprise.
                  </p>
                </div>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-3 bg-primary-foreground text-primary font-heading font-bold text-sm px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Youtube size={20} />
                  Subscribe Now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section> */}

      </main>
      <Footer />

      {/* ── Video Lightbox ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X className="text-white" size={20} />
          </button>
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── Photo Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 md:p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="text-white" size={18} />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85dvh] rounded-xl md:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
