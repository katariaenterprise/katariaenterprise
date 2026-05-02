"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import { MapPin, Map, Landmark, LocateFixed, Handshake, Store, UsersRound, CalendarCheck } from "lucide-react";

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
  { icon: MapPin,   value: "7+",    label: "States" },
  { icon: Map,      value: "280+",  label: "Districts" },
  { icon: Landmark, value: "2500+", label: "Towns" },
  { icon: LocateFixed,   value: "8600+",   label: "Pincodes" },
  { icon: Handshake,     value: "1100+",   label: "Dealers" },
  { icon: Store,         value: "10lakh+", label: "Retailers" },
  { icon: UsersRound,    value: "54cr+",   label: "Population" },
  { icon: CalendarCheck, value: "300+",    label: "Dealers/Day" },
];

const states = [
  {
    code: "GJ",
    name: "Gujarat",
    image: "/assets/GJ.png",
    districts: "33",
    towns: "500+",
    desc: "Our home state and headquarters. The strongest network with full district coverage across all major cities and rural areas.",
  },
  {
    code: "RJ",
    name: "Rajasthan",
    image: "/assets/RJ.png",
    districts: "50+",
    towns: "400+",
    desc: "Extensive coverage across Rajasthan's vast geography, reaching both urban centres and remote districts.",
  },
  {
    code: "MP",
    name: "Madhya Pradesh",
    image: "/assets/MP.png",
    districts: "52+",
    towns: "350+",
    desc: "Deep penetration across central India's largest state, connecting manufacturers to retailers in every corner.",
  },
  {
    code: "UP",
    name: "Uttar Pradesh",
    image: "/assets/UP.png",
    districts: "75+",
    towns: "600+",
    desc: "India's most populous state covered with a robust distribution network serving 600+ towns.",
  },
  {
    code: "HR",
    name: "Haryana",
    image: "/assets/HR.png",
    districts: "22+",
    towns: "200+",
    desc: "Strategic coverage across Haryana connecting the northern supply chain corridor efficiently.",
  },
  {
    code: "DL",
    name: "Delhi",
    image: "/assets/DL.png",
    districts: "11+",
    towns: "150+",
    desc: "Full coverage of the national capital region including all major wholesale and retail markets.",
  },
  {
    code: "BH",
    name: "Bihar",
    image: "/assets/BH.png",
    districts: "38+",
    towns: "300+",
    desc: "Growing presence in eastern India with strong distribution across Bihar's key districts and towns.",
  },
];

// const coverageStats = [
//   { value: "7+",    label: "States Covered" },
//   { value: "2500+", label: "Towns Covered" },
//   { value: "6200+", label: "Pincodes Covered" },
//   { value: "54cr+", label: "Population Covered" },
// ];

export default function NetworkPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Page Header ── */}
        <section className="pt-28 pb-8 overflow-hidden">
          <div className="text-center">
            <h1
              className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-none select-none"
              style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}
            >
              <TypewriterText text="NETWORK" speed={200} />
            </h1>
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-secondary hover-lift">
                    <div className="w-14 h-14 rounded-xl gradient-red flex items-center justify-center">
                      <s.icon className="text-primary-foreground" size={26} />
                    </div>
                    <p className="font-heading font-black text-4xl text-foreground">
                      <CountUp value={s.value} />
                    </p>
                    <p className="text-muted-foreground text-sm font-body">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── India Map + Coverage ──
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/assets/INDIA7.png"
                    alt="Kataria Enterprise distribution network across India"
                    width={500}
                    height={600}
                    className="w-full max-w-sm mx-auto object-contain drop-shadow-xl"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
                <h2 className="section-title mb-4 leading-snug">
                  Connecting India's Supply Chain From Gujarat to Bihar
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Headquartered in Rajkot, Gujarat, our logistics network spans 7 states and 280+ districts — ensuring reliable, on-time delivery for India's leading manufacturers across 54 crore+ people.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {coverageStats.map((s) => (
                    <div key={s.label} className="bg-background border border-border rounded-xl p-5 text-center hover-lift">
                      <p className="font-heading font-black text-3xl text-primary"><CountUp value={s.value} /></p>
                      <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section> */}

        {/* ── States Grid ── */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                State by State
              </p>
              <h2 className="section-title">Our Presence Across 7 States</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {states.map((s, i) => (
                <AnimatedSection key={s.code} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover-lift h-full flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0 p-2">
                        <Image
                          src={s.image}
                          alt={s.name}
                          width={56}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-xl text-foreground">{s.name}</h3>
                        <div className="flex gap-3 mt-1">
                          <span className="text-xs text-muted-foreground">{s.districts} Districts</span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">{s.towns} Towns</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
