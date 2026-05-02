import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">
              KATARIA <span className="text-primary">ENTERPRISE</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Powering India's supply chain with reliable logistics and smart warehousing solutions since 1993.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3">Reach Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} <span className="font-heading">KATARIA ENTERPRISE </span> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
