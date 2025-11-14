import officialVideo from "@/assets/Official_CasElrancho_Video_French-1.mp4";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Video */}
        <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-elegant">
          <video
            src={officialVideo}
            autoPlay
            muted
            playsInline
            loop
            controls
            className="w-full h-auto"
          />
        </div>
        {/* Headline under video */}
        <div className="text-center mt-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">
            Where Luxury <span className="text-gold">Meets</span> Excitement
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
