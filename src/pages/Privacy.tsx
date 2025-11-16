import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10 max-w-3xl">This policy explains how Casino El Rancho collects, uses, and protects personal information provided by guests and site visitors.</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Information We Collect</h2>
          <p className="text-muted-foreground">Contact details, identification for age verification, preferences, and interaction data. We may use cookies and analytics on this site.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">How We Use Information</h2>
          <p className="text-muted-foreground">To provide services, verify eligibility, improve experiences, communicate offers, and meet legal obligations.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Sharing</h2>
          <p className="text-muted-foreground">We do not sell personal data. We share information only with trusted providers and authorities where required by law.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Security</h2>
          <p className="text-muted-foreground">We use administrative, technical, and physical safeguards to protect information. No method is entirely risk free.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">Your Choices</h2>
          <p className="text-muted-foreground">You may request access, correction, or deletion where applicable. Contact our support team for privacy requests.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;