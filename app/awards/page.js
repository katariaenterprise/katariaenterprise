import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import { Trophy, Award, Star, Medal, ThumbsUp, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Awards & Recognitions | Kataria Enterprise",
  description:
    "Kataria Enterprise's awards and recognitions — celebrating 36+ years of excellence in logistics, supply chain and distribution across India.",
};

const awards = [
  {
    icon: Award,
    year: "2025",
    title: "Telematics Technology – Best Practice Adopter",
    org: "Apollo CV Awards",
    desc: [
      "Recognized as First Runner Up for adopting advanced telematics solutions.",
      "Awarded for innovation in fleet monitoring and operational efficiency.",
    ],
  },
  {
    icon: Award,
    year: "2024",
    title: "Large Truck Fleet Operator of the Year",
    org: "Apollo CV Awards",
    desc: [
      "Recognized as First Runner Up for large fleet operations.",
      "Awarded for efficiency, scale management, and service excellence.",
    ],
  },
  {
    icon: Award,
    year: "2024",
    title: "Telematics Technology – Best Practice Adopter",
    org: "Apollo CV Awards",
    desc: [
      "Recognized as First Runner Up for telematics adoption excellence.",
      "Awarded for innovation in fleet tracking and operational efficiency.",
    ],
  },
  {
    icon: Award,
    year: "2023",
    title: "Token of Appreciation",
    org: "Bharat Petroleum – SmartFleet",
    desc: [
      "Recognized as a valued SmartFleet customer for strong association.",
      "Awarded for consistent usage and trust in fleet fuel management solutions.",
    ],
  },
  {
    icon: Trophy,
    year: "2023",
    title: "ELITE – Master Recognition",
    org: "Ashok Leyland (Hinduja Group)",
    desc: [
      "Recognized as an ELITE Master partner by Ashok Leyland.",
      "Awarded for excellence in fleet operations and strong industry performance.",
      ],
  },
  {
    icon: Trophy,
    year: "2018",
    title: "Large Truck Fleet Operator of the Year",
    org: "Apollo CV Awards",
    desc: [
      "Recognized for excellence in managing large-scale fleet operations.",
      "Awarded for operational efficiency and strong logistics performance.",
    ],
  },
  {
    icon: Award,
    year: "2015",
    title: "Founder Member – Rajkot Branch",
    org: "ING Vysya Bank",
    desc: [
      "Recognized as a founding member of the Rajkot branch.",
      "Awarded for early association and contribution to branch establishment.",
    ],
  },
  {
    icon: Award,
    year: "2014",
    title: "Valued Customer Recognition",
    org: "IndianOil Corporation Ltd.",
    desc: [
      "Recognized as a valued customer for strong association and support.",
      "Awarded for contributing to long-term partnership and consistent business growth.",
    ],
  },
  {
    icon: Trophy,
    year: "2014",
    title: "Best Customer Recognition",
    org: "Gohilraj Petroleum – Bharat Petroleum",
    desc: [
      "Recognized for strong business association and consistent fuel usage.",
      "Awarded for reliability and long-term partnership with the dealer.",
    ],
  },
  {
    icon: Trophy,
    year: "2013",
    title: "Operational Excellence – Planning & Scheduling",
    org: "CEAT India Road Transportation Awards",
    desc: [
      "Recognized as West Zone winner for planning & scheduling excellence.",
      "Awarded for efficient route management and timely execution.",
    ],
  },
  {
    icon: Trophy,
    year: "2013",
    title: "Operational Excellence – National Rank 2",
    org: "CEAT India Road Transportation Awards",
    desc: [
      "Recognized as National Winner with Rank 2 in Operational Excellence.",
      "Awarded for outstanding performance among top logistics operators in India.",
    ],
  },
  {
    icon: Trophy,
    year: "2011",
    title: "Best Customer Award",
    org: "Indian Oil",
    desc: [
      "Recognized for strong partnership and consistent business performance.",
      "Awarded for reliability, trust, and long-term customer relationship.",
    ],
  },
  {
    icon: Trophy,
    year: "2011",
    title: "Operational Excellence – West Zone",
    org: "CEAT India Road Transportation Awards",
    desc: [
      "Recognized as West Zone winner for excellence in logistics operations.",
      "Awarded for efficiency, timely deliveries, and strong service performance.",
    ],
  },
];

const stats = [
  { value: "15+", label: "Awards Won" },
  { value: "36+", label: "Years of Excellence" },
  { value: "3",   label: "National Recognitions" },
  { value: "10+", label: "Industry Bodies" },
];

export default function AwardsPage() {
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
              <TypewriterText text="AWARDS" speed={200} />
            </h1>
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center gap-2 p-5 md:p-6 rounded-2xl bg-secondary hover-lift">
                    <p className="font-heading font-black text-3xl md:text-4xl text-primary">{s.value}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Awards Grid ── */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Our Achievements
              </p>
              <h2 className="section-title">Awards & Recognitions</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {awards.map((a, i) => (
                <AnimatedSection key={a.title + a.year} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-5 md:p-8 hover-lift h-full flex flex-col gap-4 md:gap-5">
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl gradient-red flex items-center justify-center shrink-0">
                        <a.icon className="text-primary-foreground" size={20} />
                      </div>
                      <span
                        className="font-heading font-black text-4xl md:text-5xl leading-none select-none"
                        style={{ WebkitTextStroke: "1.5px hsl(var(--primary))", color: "transparent" }}
                      >
                        {a.year}
                      </span>
                    </div>
                    <div>
                      <p className="text-primary font-heading font-semibold text-xs uppercase tracking-widest mb-1">{a.org}</p>
                      <h3 className="font-heading font-bold text-base md:text-xl text-foreground mb-2 md:mb-3">{a.title}</h3>
                      <div className="flex flex-col gap-1.5 md:gap-2">
                        {a.desc.map((para, j) => (
                          <p key={j} className="text-muted-foreground text-xs md:text-sm leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        {/* <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl gradient-red p-10 md:p-16 text-center">
                <p className="text-primary-foreground/80 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Join Our Success Story
                </p>
                <h2 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-4">
                  Excellence Recognised, Trust Earned
                </h2>
                <p className="text-primary-foreground/70 text-sm max-w-xl mx-auto mb-8">
                  36+ years of awards and recognitions reflect the trust India's leading brands place in Kataria Enterprise every single day.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-heading font-bold text-sm px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Partner With Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section> */}

      </main>
      <Footer />
    </>
  );
}
