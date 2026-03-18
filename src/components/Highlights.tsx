import { UtensilsCrossed, Salad, Users, BadgeDollarSign } from "lucide-react";

const items = [
  { icon: UtensilsCrossed, title: "Almoço Completo", desc: "Todos os dias, com opções variadas de pratos feitos e buffet quente." },
  { icon: Salad, title: "Buffet Variado", desc: "Buffet quente e frio com saladas frescas, carnes e acompanhamentos." },
  { icon: Users, title: "Ambiente Familiar", desc: "Espaço amplo e acolhedor para reunir toda a família." },
  { icon: BadgeDollarSign, title: "Preço Acessível", desc: "Refeições completas com o melhor custo-benefício da região." },
];

const Highlights = () => (
  <section id="diferenciais" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
        Por que escolher o Campeão?
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-16">
        Mais do que um restaurante, somos parte da rotina das famílias de São Caetano.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center border border-border/50"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
              <item.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
