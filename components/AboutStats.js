"use client";
import AnimatedSection from "./AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { MapPin, Truck, Handshake, Map } from "lucide-react";

const stats = [
  { icon: MapPin,      value: "7+",    label: "States" },
  { icon: Map,         value: "280+",  label: "Districts" },
  { icon: Handshake,   value: "1100+", label: "Dealers" },
  { icon: Truck,       value: "330+",  label: "Containerised Trucks" },
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((s, i) => (
        <AnimatedSection key={s.label} delay={i * 0.1}>
          <div className="flex flex-col items-center text-center gap-3 p-5 md:p-8 rounded-2xl bg-secondary hover-lift">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-red flex items-center justify-center">
              <s.icon className="text-primary-foreground" size={22} />
            </div>
            <p className="font-heading font-black text-3xl md:text-4xl text-foreground">
              <CountUp value={s.value} />
            </p>
            <p className="text-muted-foreground text-xs md:text-sm font-body">{s.label}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
