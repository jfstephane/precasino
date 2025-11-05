import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GamesPreview from "@/components/GamesPreview";
import EventsSection from "@/components/EventsSection";
import DiningSection from "@/components/DiningSection";
import VipSection from "@/components/VipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <GamesPreview />
        <EventsSection />
        <DiningSection />
        <VipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
