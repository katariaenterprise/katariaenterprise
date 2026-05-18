import AnimatedSection from "./AnimatedSection";
import AboutStats from "./AboutStats";

export default function AboutSection() {
  return (
    <section id="about-us" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-10">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="section-title max-w-3xl mx-auto">
            Delivering Value Through Smart Logistics Innovation
          </h2>
          <p
            className="font-heading font-black text-5xl md:text-8xl lg:text-9xl leading-none mb-4 select-none"
            style={{
              WebkitTextStroke: "2px hsl(var(--primary))",
              color: "transparent",
            }}
          >
            36+ Years
          </p>
        </AnimatedSection>

        <AboutStats />
      </div>
    </section>
  );
}
