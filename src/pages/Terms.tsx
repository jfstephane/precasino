import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-10 max-w-3xl">These terms govern the use of Casino El Rancho facilities, services, and this website. By visiting or participating, you agree to the terms below.</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Eligibility</h2>
          <p className="text-muted-foreground">Entry is restricted to persons aged 18 years or older with valid identification. Management reserves the right to refuse entry or service.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Responsible Conduct</h2>
          <p className="text-muted-foreground">Guests must follow all house rules, instructions from staff, and applicable laws. Disorderly conduct, abuse, or fraud may result in removal and bans.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Gaming Rules</h2>
          <p className="text-muted-foreground">All games follow posted rules. The house’s determination of outcomes is final. Cheating or advantage play methods are strictly prohibited.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Payments & Promotions</h2>
          <p className="text-muted-foreground">Promotions are subject to change without notice. Payouts require proper verification. Errors may be corrected and offers withdrawn where necessary.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">Liability</h2>
          <p className="text-muted-foreground">To the maximum extent permitted by law, Casino El Rancho is not liable for indirect losses or damages. Guests are responsible for personal belongings.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;