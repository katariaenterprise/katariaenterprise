import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";
import { Warehouse, Network, TrendingUp, ShieldCheck, Clock, HeadphonesIcon } from "lucide-react";

export const metadata = {
  title: "Services | Kataria Enterprise",
  description:
    "Explore Kataria Enterprise's end-to-end logistics services — supply chain management, warehousing, distribution and more across 7+ states in India.",
};

const services = [
  {
    title: "Supply Chain Management",
    image: "/assets/supply-chain.png",
    icon: TrendingUp,
    desc: [
      "We design and manage end-to-end supply chain solutions tailored to the FMCG sector. From procurement coordination to last-mile delivery, every link in the chain is optimised for speed and reliability.",
      "Our advanced planning systems ensure zero stockouts and minimal transit time across all 7 states we operate in.",
    ],
    highlights: ["Demand forecasting & planning", "Vendor coordination", "Real-time tracking", "Zero-stockout guarantee"],
  },
  {
    title: "Warehouse Management",
    image: "/assets/warehouse.jpeg",
    icon: Warehouse,
    desc: [
      "Our state-of-the-art warehouses are equipped with modern WMS technology to manage high-volume FMCG inventory with precision.",
      "From inbound receiving to outbound dispatch, every movement is tracked, recorded and optimised for accuracy.",
    ],
    highlights: ["WMS-powered inventory control", "Temperature-sensitive storage", "FIFO & FEFO compliance", "24/7 security & surveillance"],
  },
  {
    title: "Distribution Network",
    image: "/assets/distribution.png",
    icon: Network,
    desc: [
      "With 330+ closed-body containerised trucks and a network spanning 280+ districts, we deliver your products to every retailer — on time, every time.",
      "Our route optimisation engine ensures the most efficient delivery paths, reducing costs and improving service levels.",
    ],
    highlights: ["330+ containerised trucks", "280+ districts covered", "2500+ towns reached", "Route optimisation engine"],
  },
];

const whyUs = [
  { icon: Clock,           title: "On-Time Delivery",    desc: "99%+ on-time delivery rate across all routes and districts." },
  { icon: ShieldCheck,     title: "Safe & Secure",        desc: "Closed-body containerised trucks ensure product safety in all conditions." },
  { icon: Network,         title: "Pan-India Reach",      desc: "7 states, 280+ districts, 2500+ towns — we go where your brand needs to be." },
  { icon: HeadphonesIcon,  title: "Dedicated Support",    desc: "A dedicated account team for every brand partner, available round the clock." },
];

export default function ServicesPage() {
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
              <TypewriterText text="SERVICES" speed={200} />
            </h1>
          </div>
        </section>

        {/* ── Service Detail Cards ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col gap-24">
              {services.map((s, i) => (
                <AnimatedSection key={s.title + i} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden h-80">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-5 left-5">
                        <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center">
                          <s.icon className="text-primary-foreground" size={22} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
                        {s.title}
                      </h2>
                      <div className="flex flex-col gap-3 mb-6">
                        {s.desc.map((para, j) => (
                          <p key={j} className="text-muted-foreground text-sm leading-relaxed">{para}</p>
                        ))}
                      </div>
                      <ul className="flex flex-col gap-3">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-3 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Why Us
              </p>
              <h2 className="section-title">Why Brands Choose Kataria</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((w, i) => (
                <AnimatedSection key={w.title} delay={i * 0.1}>
                  <div className="bg-background border border-border rounded-2xl p-6 hover-lift h-full flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center shrink-0">
                      <w.icon className="text-primary-foreground" size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-foreground mb-2">{w.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        {/* <section className="section-padding">
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl gradient-red p-10 md:p-16 text-center">
                <p className="text-primary-foreground/80 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Partner With Us
                </p>
                <h2 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-4">
                  Ready to Scale Your Distribution?
                </h2>
                <p className="text-primary-foreground/70 text-sm max-w-xl mx-auto mb-8">
                  Join India's leading FMCG brands who trust Kataria Enterprise to move their products across 7 states and 280+ districts.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-heading font-bold text-sm px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Get In Touch
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
