import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { Award } from "lucide-react";

const awards = [
  {
    icon: Award,
    year: "2024",
    title: "Telematics Technology – Best Practice Adopter",
    org: "Apollo CV Awards",
    desc: "Recognized as First Runner Up for innovation in fleet tracking and operational efficiency.",
  },
  {
    icon: Award,
    year: "2024",
    title: "Large Truck Fleet Operator of the Year",
    org: "Apollo CV Awards",
    desc: "Recognized as First Runner Up for efficiency, scale management, and service excellence.",
  },
  {
    icon: Award,
    year: "2025",
    title: "Telematics Technology – Best Practice Adopter",
    org: "Apollo CV Awards",
    desc: "Recognized as First Runner Up for adopting advanced telematics solutions and innovation in fleet monitoring.",
  },
];

export default function AwardsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Recognition</p>
          <h2 className="section-title">Awards & Recognitions</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {awards.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift h-full flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-red flex items-center justify-center shrink-0">
                    <a.icon className="text-primary-foreground" size={22} />
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
                  <h3 className="font-heading font-bold text-base md:text-xl text-foreground mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Link href="/awards">
            <Button variant="outline" className="font-heading font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
