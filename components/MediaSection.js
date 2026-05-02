import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Play } from "lucide-react";

const videos = [
  { title: "Kataria Enterprise Fleet Overview", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
  { title: "Warehouse Operations Tour", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
  { title: "Safety & Training Programs", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
];

export default function MediaSection() {
  return (
    <section id="media" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="section-title">Delivering Trust Nationwide</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {videos.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer hover-lift aspect-video bg-foreground/10">
                <Image src={v.thumbnail} alt={v.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-primary-foreground ml-1" size={22} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-primary-foreground font-heading font-semibold text-xs md:text-sm">{v.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
