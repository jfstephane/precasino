import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ResponsibleGaming = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Responsible Gaming</h1>
        <p className="text-muted-foreground mb-10 max-w-3xl">Casino El Rancho promotes responsible entertainment. Gaming should be fun and within your means.</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Guidelines</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Set a budget before you play and stick to it.</li>
            <li>Never chase losses or borrow money to gamble.</li>
            <li>Take regular breaks and balance gaming with other activities.</li>
            <li>Keep gaming separate from personal or financial stress.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-serif font-bold">Support</h2>
          <p className="text-muted-foreground">If gaming stops being fun, seek help. Our staff can provide information on support options and self-exclusion.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold">Resources</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Local counseling services and hotlines</li>
            <li>Self-exclusion and cooling-off programs</li>
            <li>Budgeting and time-management tools</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResponsibleGaming;