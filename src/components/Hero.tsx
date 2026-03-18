import heroImg from "@/assets/hero-food.jpg";
import logoImg from "@/assets/logo-campeao.jpg";
import { Navigation, MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappUrl =
    "https://wa.me/5511917029510?text=Olá!%20Gostaria%20de%20saber%20o%20que%20está%20sendo%20servido%20hoje%20no%20Restaurante%20Campeão.";
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=R.+Casemiro+de+Abreu,+15+-+Cerâmica,+São+Caetano+do+Sul";

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Mesa de almoço com comida caseira brasileira"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <img
          src={logoImg}
          alt="Logo Restaurante Campeão"
          className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8 rounded-full object-cover shadow-lg border-4 border-primary-foreground/20"
        />
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mb-5 text-primary-foreground">
          Comida caseira de verdade, com sabor de tradição
        </h1>
        <p className="font-body text-base md:text-lg max-w-xl mx-auto mb-10 text-primary-foreground/85 leading-relaxed">
          Almoço completo, atendimento acolhedor e preço justo em São Caetano do Sul
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all shadow-lg text-sm"
          >
            <Navigation size={18} />
            Venha nos conhecer
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/60 text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors text-sm"
          >
            <MessageCircle size={18} />
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
