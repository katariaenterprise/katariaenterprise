import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata = {
  title: "Kataria Enterprise",
  description: "Powering India's supply chain with reliable logistics, smart warehousing, and an expansive distribution network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
