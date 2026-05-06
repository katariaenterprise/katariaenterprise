import Link from "next/link";
import NextImage from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Management", href: "/management" },
  { label: "Services",   href: "/services" },
  { label: "Network",    href: "/network" },
  { label: "Awards",     href: "/awards" },
  { label: "Media",      href: "/media" },
  { label: "Contact",    href: "/#contact" },
];

const services = [
  { label: "Supply Chain Management", href: "/services" },
  { label: "Warehouse Management",    href: "/services" },
  { label: "Distribution Network",    href: "/services" },
  { label: "Fleet Operations",        href: "/services" },
  { label: "Dealer Portal",           href: "/dealer-login" },
];

const socials = [
  { Icon: Facebook,  href: "https://www.facebook.com/katariaenterprise",  label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/katariaenterprise", label: "Instagram" },
  { Icon: Linkedin,  href: "https://www.linkedin.com/company/katariaenterprise", label: "LinkedIn" },
  { Icon: Twitter,   href: "https://twitter.com/katariaenterprise",       label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/70">

      {/* ── Main grid ── */}
      <div className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <NextImage
              src="/assets/logo.png"
              alt="Kataria Enterprise"
              width={150}
              height={45}
              className="object-contain h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-5">
              Powering India's supply chain with reliable logistics, smart warehousing and an expansive distribution network across 7+ states since 1989.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-widest mb-4">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=Kataria+Enterprise,Kalawad+Road,Rajkot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Tower Building, Kalawad Road,<br />Vad-Vajdi, Rajkot, Gujarat 360021
                </a>
              </li>
              <li>
                <a
                  href="tel:9824283794"
                  className="flex gap-3 text-sm hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                  +91 98242 83794
                </a>
              </li>
              <li>
                <a
                  href="tel:9824283795"
                  className="flex gap-3 text-sm hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                  +91 98242 83795
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@katariaenterprise.com"
                  className="flex gap-3 text-sm hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                  contact@katariaenterprise.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Tagline strip ── */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="text-primary-foreground/50 italic">
            "Connecting manufacturers to markets."
          </p>
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()}{" "}
            <span className="font-heading text-primary-foreground/70">KATARIA ENTERPRISE</span>
            {" "}· All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
