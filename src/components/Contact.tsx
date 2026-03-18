import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

const Contact = () => {
  const whatsappUrl =
    "https://wa.me/5511917029510?text=Olá!%20Gostaria%20de%20saber%20o%20que%20está%20sendo%20servido%20hoje%20no%20Restaurante%20Campeão.";
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=R.+Casemiro+de+Abreu,+15+-+Cerâmica,+São+Caetano+do+Sul";

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          Venha nos visitar
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-16">
          Estamos esperando você e sua família!
        </p>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card border border-border/50 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    R. Casemiro de Abreu, 15 — Cerâmica
                    <br />
                    São Caetano do Sul, SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-1">Funcionamento</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Segunda a sábado
                    <br />
                    06:00 às 19:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3.5 rounded-full hover:brightness-110 transition-all shadow-sm text-sm"
              >
                <Navigation size={18} />
                Traçar Rota
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-foreground/15 text-foreground font-body font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors text-sm"
              >
                <MessageCircle size={18} />
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
