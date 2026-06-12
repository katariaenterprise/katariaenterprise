import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";

const BASE_URL = "https://www.katariaenterprise.duckdns.org";
const TITLE = "Kataria Enterprise | FMCG Logistics & Distribution India";
const DESC = "Kataria Enterprise — India's trusted FMCG logistics, supply chain & distribution company since 1989. Serving 7+ states, 280+ districts, 1100+ dealers with 330+ containerised trucks.";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | Kataria Enterprise",
  },
  description: DESC,
  keywords: [
    "Kataria Enterprise",
    "kataria enterprise rajkot",
    "FMCG distribution India",
    "logistics company Gujarat",
    "supply chain management India",
    "warehouse management Gujarat",
    "distribution network India",
    "Balaji Wafers distributor",
    "Coca-Cola distributor India",
    "Vadilal distributor",
    "FMCG logistics company",
    "pan India distribution",
    "containerised truck logistics",
  ],
  authors: [{ name: "Kataria Enterprise", url: BASE_URL }],
  creator: "Kataria Enterprise",
  publisher: "Kataria Enterprise",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: BASE_URL,
    siteName: "Kataria Enterprise",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Kataria Enterprise" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/assets/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kataria Enterprise",
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logo.png`,
  description: DESC,
  foundingDate: "1989",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower Building, Kalawad Road, Vad-Vajdi",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360021",
    addressCountry: "IN",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-9824283794", contactType: "customer service" },
    { "@type": "ContactPoint", telephone: "+91-9824283795", contactType: "customer service" },
  ],
  email: "contact@katariaenterprise.com",
  sameAs: [BASE_URL],
  areaServed: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Haryana", "Delhi", "Bihar"],
  numberOfEmployees: { "@type": "QuantitativeValue", value: 250 },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/assets/logo.png"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
