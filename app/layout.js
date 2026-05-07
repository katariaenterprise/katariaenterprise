import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Kataria Enterprise",
  description: "Powering India's supply chain with reliable logistics, smart warehousing, and an expansive distribution network across 7+ states since 1989.",
  metadataBase: new URL("https://www.katariaenterprise.com"),
  openGraph: {
    title: "Kataria Enterprise",
    description: "Powering India's supply chain with reliable logistics, smart warehousing, and an expansive distribution network across 7+ states since 1989.",
    url: "https://www.katariaenterprise.com",
    siteName: "Kataria Enterprise",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Kataria Enterprise" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kataria Enterprise",
    description: "Powering India's supply chain with reliable logistics, smart warehousing, and an expansive distribution network across 7+ states since 1989.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
