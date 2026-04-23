import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const SARAH_IMAGE = "/images/sarah02.jpeg";

const highlights = [
  "Experiência prática real",
  "Técnicas atualizadas",
  "Ensino direto ao ponto",
  "Foco em resultado",
];

interface AboutSarahProps {
  whatsappUrl: string;
}

export function AboutSarah({ whatsappUrl }: AboutSarahProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#F5EDE6" }}
    >
      {/* Decorative gold accent */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
        style={{ background: "#C9A84C", filter: "blur(80px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Background shape */}
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{ background: "linear-gradient(135deg, #C9A84C22, #E8D5C4)" }}
              />

              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ width: "min(400px, 100%)", aspectRatio: "4/5" }}
              >
                <ImageWithFallback
                  src={SARAH_IMAGE}
                  alt="Sarah - Lash Designer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl"
                style={{ background: "#0a0a0a", minWidth: 180 }}
              >
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#C9A84C",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                  }}
                >
                  Sarah
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#E8D5C4",
                    fontSize: "0.75rem",
                    marginTop: 2,
                    letterSpacing: "0.06em",
                  }}
                >
                  LASH DESIGNER
                </p>
                <div
                  className="mt-2 h-px"
                  style={{ background: "#C9A84C55" }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#C9A84C",
                    fontSize: "0.7rem",
                    marginTop: 6,
                  }}
                >
                  ✦ Experiência real de mercado
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Label */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#C9A84C",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                fontWeight: 600,
              }}
            >
              QUEM VAI TE ENSINAR
            </p>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#0a0a0a",
                lineHeight: 1.2,
                marginTop: "0.75rem",
              }}
            >
              Mais do que técnica —{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#C9A84C",
                }}
              >
                experiência real
              </span>{" "}
              de mercado
            </h2>

            {/* Paragraphs */}
            <div
              className="mt-6 space-y-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#4a3f38",
                lineHeight: 1.8,
                fontSize: "0.97rem",
              }}
            >
              <p>
                "Eu sei como é querer entrar nessa área sem saber por onde começar — e também sei o quanto é frustrante já trabalhar e sentir que ainda não está no nível que poderia."
              </p>
              <p>
                "Minha trajetória foi construída com prática real, cursos especializados e atendimento direto com clientes. Tudo que ensino aqui foi testado no dia a dia."
              </p>
              <p>
                "Meu objetivo é simples: fazer você sair preparada, segura e pronta para trabalhar — não só com técnica, mas com mentalidade profissional."
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #C9A84C33",
                  }}
                >
                  <CheckCircle size={16} style={{ color: "#C9A84C", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#2a2020",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                    }}
                  >
                    {h}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
                color: "#C9A84C",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                border: "1px solid #C9A84C55",
              }}
            >
              <MessageCircle size={17} />
              Quero aprender com a Sarah
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
