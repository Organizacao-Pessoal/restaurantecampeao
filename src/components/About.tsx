import prato3 from "@/assets/prato3.jpg";

const About = () => (
  <section id="sobre" className="py-24 gradient-section">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img
            src={prato3}
            alt="Prato completo do Restaurante Campeão"
            className="w-full h-[420px] object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-body text-xs font-bold px-4 py-1.5 rounded-full">
            Desde 1980
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tradição que alimenta gerações
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Há mais de 40 anos, o <strong className="text-foreground">Restaurante Campeão</strong> serve comida caseira de verdade para as famílias de São Caetano do Sul.
              Nossa história é construída com carinho, dedicação e o sabor que só a cozinha brasileira oferece.
            </p>
            <p>
              Com a nova gestão, mantivemos a essência que nossos clientes amam e trouxemos ainda mais atenção ao atendimento —
              conversando mesa a mesa, ouvindo sugestões e personalizando a experiência de cada visitante.
            </p>
            <p>
              Aqui, você é mais que um cliente. Você é parte da nossa família.
            </p>
          </div>
          <div className="mt-8 flex gap-10">
            <div>
              <span className="font-display text-3xl font-bold text-primary">40+</span>
              <p className="font-body text-sm text-muted-foreground mt-1">Anos de tradição</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-primary">1000+</span>
              <p className="font-body text-sm text-muted-foreground mt-1">Famílias atendidas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
