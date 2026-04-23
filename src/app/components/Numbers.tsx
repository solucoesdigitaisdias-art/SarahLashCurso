import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "2", suffix: " dias", label: "de imersão intensa" },
  { value: "+6", suffix: "", label: "técnicas ensinadas" },
  { value: "100%", suffix: "", label: "aulas práticas" },
  { value: "1", suffix: " kit", label: "completo incluso" },
];

export function Numbers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#C9A84C",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            fontWeight: 600,
          }}
        >
          O CURSO EM NÚMEROS
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Divider */}
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px"
                  style={{ background: "#C9A84C33" }}
                />
              )}

              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: "#C9A84C",
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                {stat.value}
                <span style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>{stat.suffix}</span>
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#8a7a6a",
                  fontSize: "0.85rem",
                  marginTop: "0.5rem",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
