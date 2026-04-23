import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  whatsappUrl: string;
}

export function WhatsAppButton({ whatsappUrl }: WhatsAppButtonProps) {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #C9A84C, #A8882A)",
        color: "#0a0a0a",
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: "0.82rem",
        letterSpacing: "0.05em",
        boxShadow: "0 8px 30px #C9A84C55, 0 0 0 0 #C9A84C",
      }}
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ border: "2px solid #C9A84C88" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <MessageCircle size={18} />
      <span className="hidden sm:inline">FALAR NO WHATSAPP</span>
    </motion.a>
  );
}
