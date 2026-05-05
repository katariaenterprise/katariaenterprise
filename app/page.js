import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import NetworkSection from "@/components/NetworkSection";
import ClientsSection from "@/components/ClientsSection";
import AwardsSection from "@/components/AwardsSection";
import FleetSection from "@/components/FleetSection";
// import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection /> 
        <ServicesSection />
        <AboutSection />
        <StorySection />
        <NetworkSection />
        <ClientsSection />
        <AwardsSection />
        <FleetSection />
        {/* <MediaSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
