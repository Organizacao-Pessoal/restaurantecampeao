import heroImg from "@/assets/hero-food.jpg";

const Hero = () => {
  const whatsappUrl =
    "https://wa.me/5511917029510?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Restaurante%20Campeão.";
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=R.+Casemiro+de+Abreu,+15+-+Cerâmica,+São+Caetano+do+Sul";

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Mesa de almoço com comida caseira brasileira"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground py-32">
        <span className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          🍽️ Tradição desde 1980
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl mx-auto mb-6">
          Comida caseira de verdade, com sabor de tradição
        </h1>
        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90">
          Almoço completo, atendimento acolhedor e preço justo em São Caetano do Sul
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pratos"
            className="bg-primary-foreground text-primary font-body font-semibold px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Ver Cardápio
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
