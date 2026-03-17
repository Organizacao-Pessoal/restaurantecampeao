import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos M.",
    text: "Excelente! Comida muito boa. Super bem atendido! Preços ótimos! Sempre que posso estou com minha família lá.",
  },
  {
    name: "Fernanda R.",
    text: "A nova gerência vem fazendo um trabalho incrível, conversando com os clientes mesa a mesa e personalizando o atendimento.",
  },
  {
    name: "Roberto S.",
    text: "Fui com minha esposa e filha na hora do almoço, bem movimentado. Atendimento excelente do começo ao fim. Espaço amplo, limpo e ótima variedade de refeições.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-secondary text-secondary" />
    ))}
  </div>
);

const Reviews = () => (
  <section id="avaliacoes" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        O que nossos clientes dizem
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-14">
        Avaliações reais de quem frequenta o Restaurante Campeão.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
          >
            <div className="flex items-center gap-2 mb-1">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-4 h-4"
              />
              <span className="font-body text-xs text-muted-foreground">Google Reviews</span>
            </div>
            <Stars />
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
              "{r.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-body text-sm font-bold text-primary">
                  {r.name.charAt(0)}
                </span>
              </div>
              <span className="font-body text-sm font-semibold text-foreground">{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
