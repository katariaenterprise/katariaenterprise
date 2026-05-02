"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

function CountUp({ value }) {
  const num = parseInt(value);
  const suffix = value.replace(String(num), "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function NetworkSection() {
  return (
    <section id="network" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Our Reach</p>
          <h2 className="section-title">Our Strong Distribution Network Across India</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Map */}
          <AnimatedSection>
            <div className="relative flex items-center justify-center">
              <Image
                src="/assets/INDIA7.png"
                alt="Kataria Enterprise distribution network across India"
                width={500}
                height={600}
                className="w-full max-w-[260px] md:max-w-sm mx-auto object-contain drop-shadow-xl"
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2}>
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3 leading-snug">
              Connecting India's Supply Chain From Gujarat to Bihar
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Headquartered in Rajkot, Gujarat, our logistics network spans 7 states and 280+ districts — ensuring reliable, on-time delivery for India's leading manufacturers.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "7+", label: "States Covered" },
                { value: "2500+", label: "Towns Covered" },
                { value: "8600+", label: "Pincodes Covered" },
                { value: "54cr+", label: "Population Covered" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary border border-border rounded-xl p-4 md:p-5 text-center hover-lift">
                  <p className="font-heading font-black text-2xl md:text-3xl text-primary"><CountUp value={s.value} /></p>
                  <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
