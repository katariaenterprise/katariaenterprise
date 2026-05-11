import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";
import { Award, Briefcase, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "Management | Kataria Enterprise",
  description: "Meet the leadership team behind Kataria Enterprise — the people driving 36+ years of FMCG logistics excellence across India.",
  keywords: ["Kataria Enterprise management", "Vallabhbhai Kataria", "Rimal Kataria", "logistics company leadership India", "FMCG distribution company directors"],
  alternates: { canonical: "https://www.katariaenterprise.duckdns.org/management" },
  openGraph: {
    title: "Management | Kataria Enterprise",
    description: "Meet the leadership team behind Kataria Enterprise — the people driving 36+ years of FMCG logistics excellence across India.",
    url: "https://www.katariaenterprise.duckdns.org/management",
    images: [{ url: "/assets/vbk.jpg", width: 1200, height: 630, alt: "Kataria Enterprise Leadership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Management | Kataria Enterprise",
    description: "Meet the leadership team behind Kataria Enterprise — the people driving 36+ years of FMCG logistics excellence across India.",
    images: ["/assets/vbk.jpg"],
  },
};

const leaders = [
  {
    name: "Mr. Vallabhbhai Kataria",
    role: "Founder & Managing Director",
    image: "/assets/vbk.jpg",
    experience: "36+ Years",
    bio: [
      "Mr. Vallabhbhai Kataria, Founder & Chairman of Kataria Enterprises, was born into a farming family in a remote village near Junagadh. Driven by strong ambition, he earned a degree in electrical engineering and began his journey in 1972 as a partner in a loss-making firm, Veena Engineering—successfully turning it into a profitable business.",
      "In 1981, he expanded into trading by launching Vinayak Sales Agency in Junagadh, dealing in electrical goods, followed by establishing a Coca-Cola distribution agency in the region.",
      "In 1994, he founded Kataria Enterprise, taking on a large-scale FMCG distribution project. Starting with a single Swaraj Mazda vehicle, he built a powerful network of 330+ closed-body containers, distributing Balaji Wafers and Namkeen across 90% of India. Today, the company ranks 5th nationally in single-product distribution networks.",
    ],
    highlights: [
      "Began entrepreneurial journey in 1972 with Veena Engineering",
      "Founded Vinayak Sales Agency in 1981 for electrical goods distribution",
      "Established Coca-Cola distribution network in Junagadh",
      "Founded Kataria Enterprise in 1994",
      "Scaled operations from 1 vehicle to 100+ container trucks",
      "Achieved nationwide distribution covering ~90% of India",
      "Ranked among top FMCG distribution networks in India",
    ],
  },
  {
    name: "Late Mr. Paras V. Kataria",
    role: "Director – National Distribution & Operations",
    image: "/assets/pvk.jpg",
    experience: "20+ Years",
    bio: [
      "Mr. Paras V. Kataria, the elder son of Mr. Vallabhbhai Kataria, has been instrumental in building and expanding the vast distribution network of Kataria Enterprise. He played a key role in turning his father’s vision of a nationwide network into reality. Under his leadership, Balaji products have reached every corner—from small villages with populations as low as 1,500 to leading retail stores and malls in major metro cities.",
    ],
    highlights: [
      "Manages 330+ truck fleet across India",
      "Oversees 250+ field professionals",
      "Drives WMS technology adoption",
      "Ensures 99%+ on-time delivery rate",
    ],
  },
  {
    name: "Mr. Rimal V. Kataria",
    role: "Director – Supply Chain & Logistics",
    image: "/assets/rvk.jpg",
    experience: "20+ Years",
    bio: [
      "Mr. Rimal V. Kataria, the younger son of Mr. Vallabhbhai Kataria, serves as the driving force behind the company’s management and operations. A qualified chemical engineer, he plays a key role in ensuring the smooth functioning of the organization, while efficiently overseeing the supply chain and nationwide logistics network.",
    ],
    highlights: [
      "Manages 330+ truck fleet across India",
      "Oversees 250+ field professionals",
      "Drives WMS technology adoption",
      "Ensures 99%+ on-time delivery rate",
    ],
  },
  {
    name: "Mr. Rupesh Vadariya",
    role: "General Manager – Operations & Human Resources",
    image: "/assets/rv.jpg",
    experience: "20+ Years",
    bio: [
      "Mr. Rupesh Vadariya plays a vital role at Kataria Enterprise, overseeing both operations and human resource management. He ensures the organization recruits the right talent and aligns them with the company’s mission and culture. In addition, he manages core operations—especially logistics, which form the backbone of the business—while also addressing dealer challenges to strengthen the distribution and marketing network.",
    ],
    highlights: [
      "Manages 330+ truck fleet across India",
      "Oversees 250+ field professionals",
      "Drives WMS technology adoption",
      "Ensures 99%+ on-time delivery rate",
    ],
  },
];

const departments = [
  {
    icon: Briefcase,
    name: "Supply Chain",
    desc: "End-to-end planning, procurement coordination and vendor management to keep the supply chain running without interruption.",
    headcount: "60+",
  },
  {
    icon: TrendingUp,
    name: "Sales & Distribution",
    desc: "A dedicated field force covering 2500+ towns, building retailer relationships and driving brand visibility on the ground.",
    headcount: "100+",
  },
  {
    icon: Users,
    name: "Warehouse & Logistics",
    desc: "Skilled warehouse staff and fleet coordinators managing inventory accuracy, loading operations and route optimisation.",
    headcount: "70+",
  },
  {
    icon: Award,
    name: "Quality & Compliance",
    desc: "Ensuring every operation meets safety standards, regulatory requirements and the quality benchmarks set by our brand partners.",
    headcount: "20+",
  },
];

export default function ManagementPage() {
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
              <TypewriterText text="LEADERS" speed={200} />
            </h1>
          </div>
        </section>

        {/* ── Leadership Profiles ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col gap-12 md:gap-20">
              {leaders.map((l, i) => (
                <AnimatedSection key={`${l.name}-${i}`} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
                      <Image
                        src={l.image}
                        alt={l.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={i === 0}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-primary font-heading font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">
                        {l.role}
                      </p>
                      <h2 className="font-heading font-black text-2xl md:text-4xl text-foreground mb-3 md:mb-4">
                        {l.name}
                      </h2>
                      <div className="flex flex-col gap-3">
                        {l.bio.map((para, j) => (
                          <p key={j} className="text-muted-foreground text-sm leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Departments ── */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Our Teams
              </p>
              <h2 className="section-title">Departments That Drive Us</h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {departments.map((d, i) => (
                <AnimatedSection key={d.name} delay={i * 0.1}>
                  <div className="bg-background border border-border rounded-2xl p-4 md:p-6 hover-lift h-full flex flex-col gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-red flex items-center justify-center shrink-0">
                      <d.icon className="text-primary-foreground" size={18} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1 md:mb-2">
                        <h3 className="font-heading font-bold text-sm md:text-base text-foreground">{d.name}</h3>
                        <span className="font-heading font-black text-primary text-base md:text-lg">{d.headcount}</span>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team Stat Banner ── */}
        <section className="section-padding">
          <div className="container mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl gradient-red p-8 md:p-16 text-center">
                <p className="text-primary-foreground/80 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Together We Deliver
                </p>
                <p
                  className="font-heading font-black text-6xl md:text-9xl leading-none select-none mb-3 md:mb-4"
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)", color: "transparent" }}
                >
                  250+
                </p>
                <h2 className="font-heading font-black text-2xl md:text-4xl text-primary-foreground mb-3 md:mb-4">
                  Professionals Across India
                </h2>
                <p className="text-primary-foreground/70 text-sm max-w-xl mx-auto">
                  From warehouse floors to boardrooms, our 250+ strong team is the backbone of every delivery, every partnership and every milestone Kataria Enterprise has achieved.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
