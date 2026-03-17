import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const url =
    "https://wa.me/5511917029510?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Restaurante%20Campeão.";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
