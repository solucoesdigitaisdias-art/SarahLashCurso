import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Iniciante precisa de experiência anterior?",
    a: "Não! O curso iniciante foi criado especialmente para quem está começando do zero. Você não precisa ter nenhum conhecimento prévio sobre cílios. Começamos do básico e evoluímos gradualmente, garantindo que você saia preparada para atender.",
  },
  {
    q: "O curso é presencial?",
    a: "Sim! O curso é 100% presencial, com aulas práticas em modelos reais. Acreditamos que a aprendizagem prática é fundamental para quem quer trabalhar com Lash Design. Não existe substituição para a experiência hands-on.",
  },
  {
    q: "Tem suporte após o curso?",
    a: "Com certeza! Você não fica sozinha após a formação. Oferecemos suporte pelo WhatsApp para tirar dúvidas que surgirem durante os seus primeiros atendimentos. Queremos garantir que você se sinta segura na sua prática.",
  },
  {
    q: "Posso fazer o aperfeiçoamento direto, sem ter feito o iniciante?",
    a: "Sim, é possível! O curso de aperfeiçoamento é indicado para quem já tem conhecimento básico em cílios, seja por formação anterior ou por já trabalhar na área. Se você tiver dúvidas sobre qual curso é o mais indicado para você, entre em contato conosco pelo WhatsApp.",
  },
  {
    q: "O kit profissional está realmente incluso?",
    a: "Sim! Todos os materiais necessários para a prática durante o curso e para os seus primeiros atendimentos estão inclusos. Você não precisa se preocupar em comprar nada separadamente — só precisa trazer a vontade de aprender!",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#F5EDE6" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
      <div
        className="absolute -right-24 bottom-0 w-80 h-80 rounded-full opacity-15"
        style={{ background: "#C9A84C", filter: "blur(80px)" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            PERGUNTAS FREQUENTES
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
            Suas dúvidas,{" "}
            <span style={{ fontStyle: "italic", color: "#C9A84C" }}>respondidas</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#ffffff",
                border: openIndex === i ? "1px solid #C9A84C55" : "1px solid transparent",
                boxShadow: openIndex === i ? "0 4px 20px #C9A84C11" : "none",
                transition: "border 0.3s, box-shadow 0.3s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                style={{ cursor: "pointer" }}
              >
                <span
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#0a0a0a",
                    fontSize: "1.05rem",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i ? "#C9A84C" : "#F0E6DC",
                  }}
                >
                  {openIndex === i ? (
                    <Minus size={14} style={{ color: "#0a0a0a" }} />
                  ) : (
                    <Plus size={14} style={{ color: "#C9A84C" }} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 pb-6"
                      style={{
                        borderTop: "1px solid #F0E6DC",
                        paddingTop: "1rem",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#5a4f48",
                          fontSize: "0.92rem",
                          lineHeight: 1.75,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
