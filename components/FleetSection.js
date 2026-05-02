import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Disc3 } from "lucide-react";

const fleet = [
  { tyre: "6 Tyre",  trucks: 314, capacity: "8.5",  image: "/assets/6Tyres.png",  cardPos: "bottom" },
  { tyre: "10 Tyre", trucks: 15,  capacity: "18",   image: "/assets/10Tyres.png", cardPos: "top"    },
  { tyre: "12 Tyre", trucks: 5,   capacity: "22",   image: "/assets/12Tyres.png", cardPos: "bottom" },
  { tyre: "14 Tyre", trucks: 3,   capacity: "28",   image: "/assets/14Tyres.png", cardPos: "top"    },
];

function InfoCard({ tyre, trucks, capacity }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-52">
      <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full mb-3">
        <Disc3 size={13} />
        {tyre}
      </div>
      <div className="flex items-center gap-3">
        <div>
          <p className="text-xs text-foreground font-semibold">Trucks</p>
          <p className="text-2xl font-heading font-black text-primary">{trucks}</p>
        </div>
        <div className="w-px h-10 bg-border" />
        <div>
          <p className="text-xs text-foreground font-semibold">Capacity (Ton)</p>
          <p className="text-2xl font-heading font-black text-primary">{capacity}</p>
        </div>
      </div>
    </div>
  );
}

export default function FleetSection() {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-primary font-heading font-semibold text-xs uppercase tracking-widest mb-3">
              <Disc3 size={16} />
              Services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
              Powering Businesses With<br />Reliable Services
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs md:mt-2">
            Delivering skilled manpower and integrated services that help organizations operate smoothly and grow confidently.
          </p>
        </AnimatedSection>

        {/* ── MOBILE: vertical cards ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {fleet.map((f, i) => (
            <AnimatedSection key={f.tyre} delay={i * 0.1}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex items-center gap-4 p-4">
                <Image src={f.image} alt={f.tyre} width={120} height={70} className="object-contain shrink-0" />
                <div>
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-heading font-bold px-2 py-0.5 rounded-full mb-2">
                    <Disc3 size={11} />{f.tyre}
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-xs text-foreground font-semibold">Trucks</p>
                      <p className="text-xl font-heading font-black text-primary">{f.trucks}</p>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                      <p className="text-xs text-foreground font-semibold">Capacity (Ton)</p>
                      <p className="text-xl font-heading font-black text-primary">{f.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── DESKTOP: truck scene ── */}
        <AnimatedSection delay={0.15}>
          <div className="relative hidden md:block">

            {/* Top cards row */}
            <div className="flex justify-around items-end mb-0 px-4 h-44 pointer-events-none">
              {fleet.map((f) =>
                f.cardPos === "top" ? (
                  <div key={f.tyre} className="flex flex-col items-center gap-1">
                    <InfoCard {...f} />
                    {/* curved arrow down */}
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-foreground/40">
                      <path d="M12 0 C12 20, 4 24, 4 32" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
                      <defs>
                        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                ) : (
                  <div key={f.tyre} className="w-52" />
                )
              )}
            </div>

            {/* Trucks on road */}
            <div className="relative">
              {/* Road with built-in dashed center line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-10 rounded-full mx-[-2rem]"
                style={{
                  backgroundColor: "#374151",
                  backgroundImage: "repeating-linear-gradient(90deg, #facc15 0px, #facc15 32px, transparent 32px, transparent 48px)",
                  backgroundSize: "48px 4px",
                  backgroundPosition: "0 center",
                  backgroundRepeat: "repeat-x",
                  animation: "road-scroll 0.6s linear infinite",
                }}
              />

              {/* Trucks */}
              <div className="relative flex justify-around items-end pb-6 z-10">
                {fleet.map((f) => (
                  <div key={f.tyre} className="relative w-1/4 flex justify-center">
                    <Image
                      src={f.image}
                      alt={f.tyre}
                      width={280}
                      height={160}
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom cards row */}
            <div className="flex justify-around items-start mt-0 px-4 h-44 pointer-events-none">
              {fleet.map((f) =>
                f.cardPos === "bottom" ? (
                  <div key={f.tyre} className="flex flex-col items-center gap-1">
                    {/* curved arrow up */}
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-foreground/40">
                      <path d="M12 32 C12 12, 4 8, 4 0" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arrow2)" />
                      <defs>
                        <marker id="arrow2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                    <InfoCard {...f} />
                  </div>
                ) : (
                  <div key={f.tyre} className="w-52" />
                )
              )}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
