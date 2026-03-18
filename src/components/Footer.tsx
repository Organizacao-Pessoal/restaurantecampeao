import { Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-display text-xl font-bold text-primary-foreground">
            Restaurante Campeão
          </span>
          <p className="font-body text-sm mt-1 text-primary-foreground/50">
            Comida caseira de verdade desde 1980.
          </p>
        </div>

        <nav className="flex gap-6 font-body text-sm text-primary-foreground/60">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#pratos" className="hover:text-primary transition-colors">Pratos</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/restaurantecampeao.scs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/p/Restaurante-Campeão-61557481052875/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
        <p className="font-body text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Restaurante Campeão. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
