import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";
import { MapPin, Building, Users, Truck, Eye, Target, Heart, Map, Handshake } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

export const metadata = {
  title: "About Us | Kataria Enterprise",
  description:
    "Learn about Kataria Enterprise — 36+ years of powering India's supply chain with reliable logistics, smart warehousing, and an expansive distribution network.",
};

const stats = [
  { icon: MapPin,   value: "7+",   label: "States" },
  { icon: Map, value: "280+", label: "Districts" },
  { icon: Handshake,    value: "1100+", label: "Dealers" },
  { icon: Truck,    value: "330+", label: "Containerised Trucks" },
];

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be India's most trusted and innovative logistics partner — connecting manufacturers to markets with speed, precision and care.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver end-to-end supply chain solutions that empower brands to scale confidently across every corner of India.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Reliability, transparency and excellence drive every decision we make — from the warehouse floor to the last-mile delivery.",
  },
];

const milestones = [
  { year: "1989", event: "Founded in Rajkot, Gujarat with a focus on FMCG distribution." },
  { year: "1994", event: "Expanded into a full-scale distribution company across Gujarat." },
  { year: "2000", event: "Entered multi-state operations beyond Gujarat." },
  { year: "2010", event: "Invested in 330+ container trucks and modern WMS technology." },
  { year: "2018", event: "Reached 10 lakh+ retailers across 280+ districts." },
  { year: "Today", event: "Operating across 7 states, serving 67 crore+ people." },
];

const leadership = [
  {
    name: "Rimal Kataria",
    role: "Founder & Managing Director",
    image: "/assets/20251222_142652.jpg.jpeg",
    bio: "With over 36 years of experience in logistics and distribution, Pravin Kataria built Kataria Enterprise from the ground up into one of India's most trusted supply chain partners.",
  },
  {
    name: "Kataria Enterprise Team",
    role: "Operations Leadership",
    image: "/assets/20251222_142700.jpg.jpeg",
    bio: "Our leadership team brings decades of combined expertise in warehousing, fleet management and pan-India distribution to drive operational excellence every day.",
  },
];

export default function AboutPage() {
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
              <TypewriterText text="ABOUT" speed={200} />
            </h1>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <AnimatedSection>
                <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="section-title mb-4 md:mb-6">
                  Delivering Value Through Smart Logistics Innovation
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Founded in 1989 and headquartered in Rajkot, Gujarat, Kataria Enterprise has grown into one of India's leading marketing, supply chain and warehouse management companies. We serve the FMCG sector with an unmatched distribution network spanning 7 states and 280+ districts.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With 330+ closed-body containerised trucks, 250+ dedicated professionals and partnerships with brands like Balaji Wafers, Coca-Cola and Vadilal, we ensure your products reach every retailer — on time, every time.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden h-56 md:h-80">
                  <Image
                    src="/assets/company-building.jpg"
                    alt="Kataria Enterprise office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                By The Numbers
              </p>
              <h2 className="section-title">Our Scale at a Glance</h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center gap-3 p-5 md:p-8 rounded-2xl bg-background hover-lift">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-red flex items-center justify-center">
                      <s.icon className="text-primary-foreground" size={22} />
                    </div>
                    <p className="font-heading font-black text-3xl md:text-4xl text-foreground"><CountUp value={s.value} /></p>
                    <p className="text-muted-foreground text-xs md:text-sm font-body">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision / Mission / Values ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                What Drives Us
              </p>
              <h2 className="section-title">Vision, Mission & Values</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.15}>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex md:flex-col items-start md:items-center gap-4 md:gap-0 text-left md:text-center hover-lift h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-red flex items-center justify-center shrink-0 md:mx-auto md:mb-5">
                      <v.icon className="text-primary-foreground" size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base md:text-xl text-foreground mb-2">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="section-padding bg-secondary overflow-hidden">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Our Journey
              </p>
              <h2 className="section-title">Milestones That Define Us</h2>
            </AnimatedSection>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
              <div className="flex flex-col gap-5 md:gap-8">
                {milestones.map((m, i) => (
                  <AnimatedSection key={m.year} delay={i * 0.1}>
                    <div className="flex gap-4 md:gap-6 items-start pl-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-red flex items-center justify-center shrink-0 z-10 border-4 border-background">
                        <span className="text-primary-foreground text-[10px] md:text-xs font-heading font-black leading-none text-center">{m.year.slice(0, 2)}</span>
                      </div>
                      <div className="bg-background border border-border rounded-2xl p-4 md:p-5 flex-1 hover-lift">
                        <p className="font-heading font-black text-primary text-base md:text-lg mb-1">{m.year}</p>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
