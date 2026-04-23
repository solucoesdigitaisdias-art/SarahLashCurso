import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MessageCircle, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const BG_IMAGE = "https://images.unsplash.com/photo-1718720410616-8a03416f9f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNoJTIwYXJ0aXN0JTIwYXBwbHlpbmclMjBleHRlbnNpb25zJTIwc3R1ZGlvfGVufDF8fHx8MTc3NjkwMTM1NHww&ixlib=rb-4.1.0&q=80&w=1080";

interface FinalCTAProps {
  whatsappUrl: string;
  instagramUrl: string;
}

export function FinalCTA({ whatsappUrl, instagramUrl }: FinalCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contato"
      className="relative py-32 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src={BG_IMAGE}
          alt="Lash designer background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0a0a0aee, #1a1510cc, #0a0a0aee)" }}
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px flex-1 max-w-16" style={{ background: "#C9A84C55" }} />
          <span style={{ color: "#C9A84C", fontSize: "1.2rem" }}>✦</span>
          <div className="h-px flex-1 max-w-16" style={{ background: "#C9A84C55" }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#FFFFFF",
            lineHeight: 1.15,
          }}
        >
          Pronta para começar{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            de verdade?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#9a8a7a",
            fontSize: "1rem",
            lineHeight: 1.7,
            marginTop: "1.25rem",
            maxWidth: "560px",
            margin: "1.25rem auto 0",
          }}
        >
          Vagas limitadas por turma para garantir atendimento personalizado e qualidade no aprendizado. Não deixe para depois — entre em contato agora mesmo.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #A8882A)",
              color: "#0a0a0a",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
              boxShadow: "0 8px 40px #C9A84C55",
            }}
          >
            <MessageCircle size={20} />
            FALAR NO WHATSAPP
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            style={{
              background: "transparent",
              color: "#E8D5C4",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.04em",
              border: "1px solid #C9A84C44",
            }}
          >
            <Instagram size={20} />
            VER NO INSTAGRAM
          </a>
        </motion.div>

        {/* Urgency note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#5a4f48",
            fontSize: "0.82rem",
            marginTop: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          ⚡ Vagas limitadas por turma — não perca sua oportunidade
        </motion.p>
      </div>
    </section>
  );
}
