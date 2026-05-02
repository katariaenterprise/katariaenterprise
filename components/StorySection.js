import AnimatedSection from "./AnimatedSection";

const milestones = [
  { year: "1989", title: "The Beginning of a Vision", desc: "Kataria Enterprise was founded in 1989 with the goal of reshaping distribution and logistics in India. With a focus on reliability, speed and service excellence, the company began building its foundation in the FMCG sector." },
  { year: "1994", title: "A New Era of Expansion", desc: "By 1994, Kataria Enterprise had evolved into a full-scale distribution company, expanding its reach and establishing strong relationships with brands and retailers across Gujarat. This marked the beginning of its large-scale network growth." },
  { year: "2000", title: "Entering Multi-State Operations", desc: "The company extended its footprint beyond Gujarat, entering multiple states and strengthening its operational capabilities. Advance planning, structured processes and a growing workforce supported this expansion." },
  { year: "2010", title: "Building Scale & Infrastructure", desc: "Kataria Enterprise invented in state-of-the-art warehousing and logistics system. With 330+ closed-body container trucks and modern WMS technology, the company scaled up to handle high-volume FMCG distribution with accuracy and speed." },
  { year: "2018", title: "Reaching 10Lakh+ Retailers", desc: "A major milestone was achieved as the network grew to server over 10 lakh retailers across 280+ districts. Brands such as Balaji Wafers, Vadilal and Coca-Cola placed their trust in Kataria Enterprise's reliable distribution model." },
  { year: "TODAY", title: "A Nationwide Trusted Partner", desc: "Now operating across 7 states and reaching over 67 crore people, Kataria Enterprise is recognized as a leader in Marketing, Supply Chain and Warehouse Management. With 250+ professionals and a deep-rooted commitment to excellence, the company continues to innovate and grow." },
];

export default function StorySection() {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Our Journey</p>
          <h2 className="section-title">The Story Behind Growth</h2>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line — desktop center, mobile left */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8 md:gap-12">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.15}>
                {/* Mobile: all left-aligned with left timeline */}
                <div className="flex gap-4 md:hidden pl-2">
                  <div className="w-6 h-6 rounded-full gradient-red border-4 border-background shrink-0 z-10 mt-1" />
                  <div className="bg-background border border-border rounded-2xl p-5 flex-1 hover-lift">
                    <p className="font-heading font-black text-3xl text-primary/20 leading-none mb-1">{m.year}</p>
                    <h3 className="font-heading font-bold text-base text-foreground mb-1">{m.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Desktop: alternating */}
                <div className={`hidden md:flex flex-row items-center gap-12 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className="bg-background border border-border rounded-2xl p-8 hover-lift">
                      <p className="font-heading font-black text-5xl text-primary/20 leading-none mb-2">{m.year}</p>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full gradient-red border-4 border-background shrink-0 z-10" />
                  <div className="flex-1 flex">
                    <span
                      className={`font-heading font-black text-7xl leading-none select-none ${i % 2 !== 0 ? "text-right w-full" : ""}`}
                      style={{ WebkitTextStroke: "1.5px hsl(var(--primary))", color: "transparent" }}
                    >
                      {m.year}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
