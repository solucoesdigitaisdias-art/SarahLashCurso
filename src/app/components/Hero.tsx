import { motion } from "motion/react";
import { MessageCircle, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const HERO_IMAGE = "/images/sarah01.jpeg";

interface HeroProps {
  whatsappUrl: string;
}

export function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 60%, #0a0a0a 100%)" }}
    >
      {/* Decorative gold lines */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />

      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
            style={{ borderColor: "#C9A84C33", background: "#C9A84C15" }}
          >
            <Star size={14} style={{ color: "#C9A84C" }} fill="#C9A84C" />
            <span style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
              CURSO PROFISSIONAL DE LASH DESIGN
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "#FFFFFF",
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Do zero ao{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              avançado
            </span>{" "}
            em cílios
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "#E8D5C4",
              marginTop: "1rem",
              fontStyle: "italic",
            }}
          >
            Aprenda com quem faz, ensina e vive a área
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#b0a090",
              marginTop: "1.2rem",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            Transforme sua carreira com um curso completo, prático e baseado em experiência real de mercado. Do iniciante ao avançado, você sai preparada para atender com confiança e se destacar.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #A8882A)",
                color: "#0a0a0a",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                boxShadow: "0 8px 30px #C9A84C44",
              }}
            >
              <MessageCircle size={18} />
              QUERO GARANTIR MINHA VAGA
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {[
              { label: "2 dias de imersão" },
              { label: "100% prática" },
              { label: "Kit incluso" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#C9A84C" }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#c0b0a0",
                    fontSize: "0.85rem",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 md:order-2 relative flex justify-center"
        >
          <div className="relative">
            {/* Gold frame decoration */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-60"
              style={{
                background: "linear-gradient(135deg, #C9A84C, transparent, #C9A84C)",
                padding: "2px",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ width: "min(380px, 100%)", aspectRatio: "3/4" }}
            >
              <ImageWithFallback
                src={HERO_IMAGE}
                alt="Sarah - Lash Designer"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, #0a0a0a88 100%)",
                }}
              />
            </div>

            {/* Kit badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #A8882A)",
                color: "#0a0a0a",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                }}
              >
                ✦ KIT COMPLETO INCLUSO
              </p>
            </motion.div>

            {/* Stars badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl shadow-2xl"
              style={{
                background: "#1a1a1a",
                border: "1px solid #C9A84C44",
              }}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} fill="#C9A84C" style={{ color: "#C9A84C" }} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#E8D5C4",
                  fontSize: "0.7rem",
                  marginTop: "2px",
                }}
              >
                +100 alunas satisfeitas
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(180deg, transparent, #C9A84C)" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "#C9A84C" }} />
      </motion.div>
    </section>
  );
}
