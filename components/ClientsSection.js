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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {clients.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-5 md:p-6 text-center hover-lift cursor-pointer flex sm:flex-col items-center gap-4 sm:gap-0">
                <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center sm:mx-auto sm:mb-4 shrink-0">
                  <img src={c.logo} alt={c.name} className="object-contain w-full h-full" loading="lazy" />
                </div>
                <div className="text-left sm:text-center">
                  <h3 className="font-heading font-bold text-base md:text-lg text-primary">{c.name}</h3>
                  <p className="text-primary/70 text-xs mt-0.5">{c.sector}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
