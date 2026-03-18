import prato1 from "@/assets/prato1.jpg";
import prato2 from "@/assets/prato2.jpg";
import prato3 from "@/assets/prato3.jpg";
import prato4 from "@/assets/prato4.jpg";

const dishes = [
  { img: prato1, label: "Mais Pedido", name: "Prato Feito Completo" },
  { img: prato2, label: "Favorito da Casa", name: "Frango Grelhado com Salada" },
  { img: prato3, label: "Especial", name: "Prato do Dia com Suco" },
  { img: prato4, label: "Buffet", name: "Buffet Variado" },
];

const Gallery = () => (
  <section id="pratos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
        Nossos Pratos
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-lg mx-auto mb-16">
        Feitos com ingredientes frescos e muito carinho, todos os dias.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {dishes.map((d) => (
          <div
            key={d.name}
            className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-body font-bold px-3 py-1 rounded-full">
              {d.label}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-display text-lg font-bold text-primary-foreground">{d.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
