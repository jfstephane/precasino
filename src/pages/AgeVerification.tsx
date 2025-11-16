import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AgeVerification = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Age Verification</h1>
        <p className="text-muted-foreground mb-10 max-w-3xl">Access to Casino El Rancho is limited to guests aged 18 years or older. We verify age to protect minors and comply with law.</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Required Identification</h2>
          <p className="text-muted-foreground">A valid government-issued photo ID is required upon entry. Digital copies may be requested for verification when booking or registering online.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Verification Process</h2>
          <p className="text-muted-foreground">Our team conducts checks at entry and at points of service. Failure to provide acceptable ID results in refusal of entry.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">Protecting Minors</h2>
          <p className="text-muted-foreground">We maintain policies to prevent underage gambling and marketing to minors. Please report suspected violations to our staff immediately.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgeVerification;