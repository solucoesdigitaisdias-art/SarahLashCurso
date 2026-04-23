import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camila S.",
    role: "Aluna — Curso Iniciante",
    text: "Entrei no curso sem saber absolutamente nada sobre cílios. Em 2 dias, saí com confiança para atender clientes reais. A Sarah é incrível — explica tudo com paciência e clareza. O kit veio completo e a apostila é riquíssima. Já marquei minha primeira cliente!",
    rating: 5,
    highlight: "Já marquei minha primeira cliente!",
  },
  {
    name: "Fernanda L.",
    role: "Aluna — Aperfeiçoamento",
    text: "Já trabalhava com cílios, mas sentia que estava estagnada. O curso de aperfeiçoamento me abriu um horizonte completamente novo. Aprendi o Wispy e o Fox de uma forma que nunca tinha visto antes. Minha clientela cresceu muito depois do curso!",
    rating: 5,
    highlight: "Minha clientela cresceu muito!",
  },
  {
    name: "Juliana M.",
    role: "Aluna — Curso Iniciante",
    text: "Tinha medo de investir num curso sem saber se valeria a pena. Hoje posso dizer: foi o melhor investimento que fiz na minha carreira. A Sarah não ensina só técnica — ela ensina a pensar como profissional. Recomendo para todas!",
    rating: 5,
    highlight: "Melhor investimento da minha carreira!",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="depoimentos"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Decorative bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#C9A84C",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            RESULTADOS REAIS
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#FFFFFF",
              marginTop: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Histórias de{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              transformação
            </span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative rounded-2xl p-8"
              style={{
                background: "#111111",
                border: "1px solid #2a2a2a",
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#C9A84C11" }}
              >
                <Quote size={16} style={{ color: "#C9A84C" }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="#C9A84C" style={{ color: "#C9A84C" }} />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9a8a7a",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Highlight */}
              <div
                className="mt-5 px-4 py-2 rounded-lg"
                style={{ background: "#C9A84C11", border: "1px solid #C9A84C33" }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#C9A84C",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                  }}
                >
                  ✦ {t.highlight}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #A8882A)" }}
                >
                  <span
                    style={{
                      fontFamily: "Playfair Display, serif",
                      color: "#0a0a0a",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#E8D5C4",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#5a5040",
                      fontSize: "0.75rem",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
