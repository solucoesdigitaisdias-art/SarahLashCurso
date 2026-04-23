import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, MessageCircle, Star } from "lucide-react";

const courses = [
  {
    tag: "MAIS VENDIDO",
    name: "Curso Iniciante",
    subtitle: "Do zero ao avançado",
    description:
      "O ponto de partida perfeito para quem quer entrar no mercado de cílios com confiança e sair preparada para atender.",
    features: [
      "Introdução completa ao Lash Design",
      "Técnicas fundamentais e avançadas",
      "Aulas 100% práticas com modelos reais",
      "Teoria: saúde ocular, higiene e segurança",
      "Gestão de clientes e agendamento",
      "Kit profissional completo incluso",
      "Apostila exclusiva do curso",
      "Certificado de conclusão",
      "Coffee break incluso",
      "Bônus: marketing e como atrair clientes",
    ],
    highlight: true,
  },
  {
    tag: "APERFEIÇOAMENTO",
    name: "Aperfeiçoamento",
    subtitle: "Técnicas avançadas",
    description:
      "Para quem já trabalha na área e quer elevar o nível do seu trabalho, se diferenciar e atender clientes mais exigentes.",
    features: [
      "Revisão e refinamento de técnicas",
      "Personalização: escolha até 4 técnicas",
      "Foco em diferenciação no mercado",
      "Wispy, Capping, Fox e Delineado",
      "Postura profissional e atendimento",
      "Certificado de conclusão",
      "Coffee break incluso",
      "Suporte pós-curso",
    ],
    highlight: false,
  },
];

interface CoursesProps {
  whatsappUrl: string;
}

export function Courses({ whatsappUrl }: CoursesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="cursos"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: "#C9A84C", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: "#C9A84C", filter: "blur(100px)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
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
            ESCOLHA SEU CAMINHO
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
            Cursos feitos para{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              transformar
            </span>{" "}
            sua carreira
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#7a6a5a",
              fontSize: "1rem",
              marginTop: "1rem",
            }}
          >
            Do básico ao avançado — sempre com prática real e acompanhamento dedicado
          </p>
        </motion.div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: course.highlight
                  ? "linear-gradient(160deg, #1a1510, #120f08)"
                  : "#111111",
                border: course.highlight ? "1px solid #C9A84C55" : "1px solid #2a2a2a",
              }}
            >
              {/* Top gold bar for highlighted */}
              {course.highlight && (
                <div
                  className="h-1 w-full"
                  style={{ background: "linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C)" }}
                />
              )}

              <div className="p-8 md:p-10">
                {/* Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                  style={{
                    background: course.highlight ? "#C9A84C22" : "#2a2a2a",
                    color: course.highlight ? "#C9A84C" : "#6a6a6a",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  {course.tag}
                </span>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.8rem",
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                  }}
                >
                  {course.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#C9A84C",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {course.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#7a6a5a",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    marginTop: "1rem",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid #2a2a2a",
                  }}
                >
                  {course.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-3">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "#C9A84C" }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#c0b0a0",
                          fontSize: "0.88rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-3 w-full py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: course.highlight
                      ? "linear-gradient(135deg, #C9A84C, #A8882A)"
                      : "transparent",
                    color: course.highlight ? "#0a0a0a" : "#C9A84C",
                    border: course.highlight ? "none" : "1px solid #C9A84C55",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "0.04em",
                    boxShadow: course.highlight ? "0 8px 30px #C9A84C33" : "none",
                  }}
                >
                  <MessageCircle size={17} />
                  {course.highlight ? "QUERO ESSE CURSO" : "SABER MAIS"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
