export const metadata = {
  title: "Media | Kataria Enterprise",
  description: "Photos, videos and media coverage of Kataria Enterprise — India's leading FMCG logistics and distribution company.",
  keywords: ["Kataria Enterprise media", "logistics company photos India", "FMCG distribution media"],
  alternates: { canonical: "https://www.katariaenterprise.duckdns.org/media" },
  openGraph: {
    title: "Media | Kataria Enterprise",
    description: "Photos, videos and media coverage of Kataria Enterprise — India's leading FMCG logistics and distribution company.",
    url: "https://www.katariaenterprise.duckdns.org/media",
    images: [{ url: "/assets/truck-collage.jpg", width: 1200, height: 630, alt: "Kataria Enterprise Media" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media | Kataria Enterprise",
    description: "Photos, videos and media coverage of Kataria Enterprise — India's leading FMCG logistics and distribution company.",
    images: ["/assets/truck-collage.jpg"],
  },
};

export default function MediaLayout({ children }) {
  return children;
}
