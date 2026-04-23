import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AlertCircle } from "lucide-react";

const pains = [
  {
    icon: "🔍",
    title: "Não sabe por onde começar",
    description:
      "Você quer entrar no mercado de cílios, mas se sente perdida diante de tantas informações, cursos e materiais diferentes. Não sabe qual caminho seguir.",
  },
  {
    icon: "😰",
    title: "Insegurança na técnica",
    description:
      "Já trabalha na área, mas ainda sente aquela insegurança na hora de atender clientes mais exigentes. Sente que falta algo para chegar no nível profissional.",
  },
  {
    icon: "📉",
    title: "Não consegue se destacar",
    description:
      "A concorrência é grande e você não sabe como diferenciar o seu trabalho. Sente que as suas clientes não veem o valor que você entrega.",
  },
];

export function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="problema"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#F5EDE6" }}
    >
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
        style={{ background: "#C9A84C", filter: "blur(80px)" }}
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
            VOCÊ SE IDENTIFICA?
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#0a0a0a",
              marginTop: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Você se identifica com alguma{" "}
            <span style={{ fontStyle: "italic", color: "#C9A84C" }}>
              dessas situações?
            </span>
          </h2>
        </motion.div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="relative rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #E8D5C420",
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-2xl"
                style={{ background: "#C9A84C11" }}
              />

              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.2rem",
                  color: "#0a0a0a",
                  lineHeight: 1.3,
                }}
              >
                {pain.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#5a4f48",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginTop: "0.75rem",
                }}
              >
                {pain.description}
              </p>

              {/* Bottom gold line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bridge message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 text-center px-4"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #0a0a0a, #1a1510)",
              border: "1px solid #C9A84C44",
            }}
          >
            <AlertCircle size={18} style={{ color: "#C9A84C" }} />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#E8D5C4",
                fontSize: "0.95rem",
              }}
            >
              Se você se identificou com alguma situação acima,{" "}
              <span style={{ color: "#C9A84C", fontWeight: 600 }}>
                o curso certo para você está aqui.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
