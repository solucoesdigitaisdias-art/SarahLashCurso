import { useRef } from "react";
import { motion, useInView } from "motion/react";

const included = [
  {
    icon: "🧰",
    title: "Kit Profissional",
    description:
      "Todos os materiais necessários para você começar a trabalhar imediatamente após o curso. Cílios, cola, pinças e mais.",
  },
  {
    icon: "📜",
    title: "Certificado",
    description:
      "Certificado de conclusão para validar sua formação profissional e agregar valor ao seu trabalho.",
  },
  {
    icon: "📖",
    title: "Apostila Exclusiva",
    description:
      "Material didático completo com técnicas, protocolos, dicas de higiene e gestão de clientes para consultar sempre.",
  },
  {
    icon: "💬",
    title: "Suporte Pós-Curso",
    description:
      "Não fica sozinha depois do curso. Tire dúvidas e receba orientações mesmo após o término das aulas.",
  },
  {
    icon: "☕",
    title: "Coffee Break",
    description:
      "Um intervalo especial para descansar, trocar experiências com outras alunas e repor as energias durante o curso.",
  },
  {
    icon: "📱",
    title: "Bônus: Marketing",
    description:
      "Estratégias práticas de como divulgar seu trabalho nas redes sociais e atrair suas primeiras clientes.",
  },
];

export function Included() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="incluso"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* Decorations */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C44, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: "#C9A84C", filter: "blur(80px)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            TUDO QUE ESTÁ INCLUSO
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
            Você recebe muito mais do que{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              um curso
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#5a5040",
              fontSize: "0.95rem",
              marginTop: "0.75rem",
            }}
          >
            Um investimento completo na sua formação profissional
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {included.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "#151515",
                border: "1px solid #2a2a2a",
              }}
            >
              {/* Hover border effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid #C9A84C44" }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
                style={{ background: "#C9A84C11" }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "#FFFFFF",
                  fontSize: "1.15rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#6a5a4a",
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                  marginTop: "0.5rem",
                }}
              >
                {item.description}
              </p>

              {/* Corner gold */}
              <div
                className="absolute top-0 right-0 w-8 h-8 rounded-bl-2xl rounded-tr-2xl"
                style={{ background: "linear-gradient(135deg, #C9A84C22, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
