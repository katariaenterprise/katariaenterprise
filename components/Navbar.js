"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home",       href: "/" },
  { label: "About",       href: "/about" },
  { label: "Management",     href: "/management" },
  { label: "Network",     href: "/network" },
  { label: "Services",        href: "/services" },
  { label: "Media",          href: "/media" },
  { label: "Awards",          href: "/awards" },
  { label: "Contact",        href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= window.innerHeight * 2.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHero = isHomePage && !scrolled;

  function handleNavClick(e, href) {
    if (href.startsWith("/#") && isHomePage) {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHero
        ? "bg-white/5 backdrop-blur-md border-b border-white/10"
        : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <NextImage src="/assets/logo.png" alt="Kataria Enterprise" width={160} height={48} className="object-contain h-10 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/dealer-login">
            <Button size="sm" className="gradient-red text-primary-foreground font-semibold">Dealer Login</Button>
          </Link>
        </div>

        <button className={`lg:hidden transition-colors ${isHero ? "text-white" : "text-foreground"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className={`lg:hidden border-t ${
          isHero ? "bg-black/40 backdrop-blur-md border-white/10" : "bg-background border-border"
        }`}>
          <ul className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-2 text-sm font-medium ${
                    isHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/dealer-login">
                <Button size="sm" className="w-full gradient-red text-primary-foreground">Login</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
