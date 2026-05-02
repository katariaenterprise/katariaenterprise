"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Truck, Handshake, Map } from "lucide-react";

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

const stats = [
  { icon: MapPin, value: "7+", label: "States" },
  { icon: Map, value: "280+", label: "Districts" },
  { icon: Handshake, value: "1100+", label: "Dealers" },
  { icon: Truck, value: "330+", label: "Containerised Trucks" },
];

export default function AboutSection() {
  return (
    <section id="about-us" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="section-title max-w-3xl mx-auto">
            Delivering Value Through Smart Logistics Innovation
          </h2>
          <p
            className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-4 select-none"
            style={{
              WebkitTextStroke: "2px hsl(var(--primary))",
              color: "transparent",
            }}
          >
            36+ Years
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-secondary hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-red flex items-center justify-center">
                  <s.icon className="text-primary-foreground" size={26} />
                </div>
                <p className="font-heading font-black text-4xl text-foreground"><CountUp value={s.value} /></p>
                <p className="text-muted-foreground text-sm font-body">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
