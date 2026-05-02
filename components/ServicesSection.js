import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "Supply Chain Management", image: "/assets/supply-chain.png", desc: "End-to-end supply chain solutions optimized for efficiency and reliability." },
  { title: "Warehouse Management", image: "/assets/warehouse.jpeg", desc: "State-of-the-art warehousing with advanced inventory management systems." },
  { title: "Distribution Network", image: "/assets/distribution.png", desc: "Pan-India distribution network ensuring timely delivery across 28+ districts." },
];

export default function ServicesSection() {
  return (
    <section id="goods-&-services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="section-title">Our Services</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.15}>
              <div className="group relative rounded-xl overflow-hidden h-80 hover-lift cursor-pointer">
                <Image src={s.image} alt={s.title} fill className="object-cover hover-zoom" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">{s.title}</h3>
                  <p className="text-primary-foreground/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
