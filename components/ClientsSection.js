import AnimatedSection from "./AnimatedSection";

const clients = [
  { name: "BALAJI", sector: "Snacks & Namkeen", logo: "/assets/balaji.svg" },
  { name: "COCA-COLA", sector: "Beverages", logo: "/assets/coca-cola.svg" },
  { name: "VADILAL", sector: "Ice Cream & Frozen Foods", logo: "/assets/vadilal.svg" },
];

export default function ClientsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Our Partners</p>
          <h2 className="section-title">Trusted By India's Leading Names</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center hover-lift cursor-pointer">
                <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <img src={c.logo} alt={c.name} className="object-contain w-full h-full" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">{c.name}</h3>
                <p className="text-primary/70 text-xs mt-1">{c.sector}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
