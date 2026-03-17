import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

const Contact = () => {
  const whatsappUrl =
    "https://wa.me/5511917029510?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Restaurante%20Campeão.";
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=R.+Casemiro+de+Abreu,+15+-+Cerâmica,+São+Caetano+do+Sul";

  return (
    <section id="contato" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Venha nos visitar
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-14">
          Estamos esperando você e sua família!
        </p>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="font-body text-sm text-muted-foreground">
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
                  <p className="font-body text-sm text-muted-foreground">
                    Segunda a sábado
                    <br />
                    06:00 às 19:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-primary-foreground font-body font-semibold px-6 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle size={20} />
                Fale pelo WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                <Navigation size={20} />
                Traçar Rota
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
