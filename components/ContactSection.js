"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const branches = [
  {
    label: "Corporate Office",
    heading: "KATARIA ENTERPRISE (RAJKOT)",
    address: "Tower Building, Kalawad Road, Vad-Vajdi, Rajkot, Gujarat, 360021",
    directionsUrl: "https://maps.google.com/?q=Kataria+Enterprise,Kalawad+Road,Rajkot",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d70.7523!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2b9999999%3A0x1234567890abcdef!2sKataria%20Enterprise!5e1!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  {
    label: "Branch Office",
    heading: "KATARIA ENTERPRISE (VALSAD)",
    address: "Plot No. 12, GIDC Estate, Naroda, Ahmedabad, Gujarat, 382330",
    directionsUrl: "https://www.google.com/maps/search/20.677027451624987,+72.94980176652267?sa=X&ved=1t:242&ictx=111",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3460.6323212325533!2d72.9498018!3d20.677027499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQwJzM3LjMiTiA3MsKwNTYnNTkuMyJF!5e1!3m2!1sen!2sin!4v1776331228203!5m2!1sen!2sin",
  },
  {
    label: "Branch Office",
    heading: "KATARIA ENTERPRISE (INDORE)",
    address: "Survey No. 45, Sachin GIDC, Surat, Gujarat, 394230",
    directionsUrl: "https://www.google.com/maps/search/22.627419508443204,+75.74898416106927?sa=X&ved=1t:242&ictx=111",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3414.1761460534344!2d75.7489842!3d22.627419499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM3JzM4LjciTiA3NcKwNDQnNTYuMyJF!5e1!3m2!1sen!2sin!4v1776331364363!5m2!1sen!2sin",
  },
  {
    label: "Branch Office",
    heading: "KATARIA ENTERPRISE (LUCKNOW)",
    address: "Shed No. 7, Bhiwandi Warehouse Complex, Bhiwandi, Maharashtra, 421302",
    directionsUrl: "https://www.google.com/maps/search/27.10297193452125,+80.42802842909231?sa=X&ved=1t:242&ictx=111&cshid=1776331473214676",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3292.715456995017!2d80.4280284!3d27.1029719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDA2JzEwLjciTiA4MMKwMjUnNDAuOSJF!5e1!3m2!1sen!2sin!4v1776331518601!5m2!1sen!2sin",
  },
];

const EMAIL = "contact@katariaenterprise.com";
const PHONE = "9824283794 / 9824283795";

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center:       ({ x: 0, opacity: 1 }),
  exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function ContactSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const branch = branches[active];

  function go(next) {
    setDir(next > active || (active === branches.length - 1 && next === 0) ? 1 : -1);
    setActive(next);
  }

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">

        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex items-start justify-between gap-4 mb-2">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active + "-heading"}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-2">{branch.label}</p>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground">{branch.heading}</h3>
              </motion.div>
            </AnimatePresence>
            {/* Prev / Next */}
            <div className="flex gap-2 shrink-0 mt-1">
              <button
                onClick={() => go((active - 1 + branches.length) % branches.length)}
                className="w-10 h-10 rounded-full gradient-red flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => go((active + 1) % branches.length)}
                className="w-10 h-10 rounded-full gradient-red flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p className="text-muted-foreground text-sm mb-5 max-w-md">{branch.address}</p>

              <div className="flex flex-col gap-3 mb-5">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                  <Mail size={16} className="text-muted-foreground" />
                  {EMAIL}
                </a>
                <a href={`tel:9824283794`} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                  <Phone size={16} className="text-muted-foreground" />
                  {PHONE}
                </a>
              </div>

              <a
                href={branch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline mb-8"
              >
                Directions <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-2xl overflow-hidden shadow-lg w-full h-[300px] md:h-[460px]"
            >
              <iframe
                src={branch.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={branch.heading}
              />
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        {/* Branch dots indicator */}
        <div className="flex justify-center gap-2 mt-5">
          {branches.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
