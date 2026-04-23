import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const LASH_IMG = "https://images.unsplash.com/photo-1648999291185-0ac34a6dc3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwY2xvc2UlMjB1cCUyMG1hY3JvJTIwYmVhdXR5fGVufDF8fHx8MTc3NjkwMTM1NHww&ixlib=rb-4.1.0&q=80&w=1080";
const BEAUTY_IMG = "https://images.unsplash.com/photo-1653130029149-9109b115ab9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwZXh0ZW5zaW9uJTIwYmVhdXR5JTIwc2Fsb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2OTAxMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const TRAINING_IMG = "https://images.unsplash.com/flagged/photo-1573470097927-f2cb636fc682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBiZWF1dHklMjBjb3Vyc2UlMjB0cmFpbmluZyUyMHdvbWVufGVufDF8fHx8MTc3NjkwMTM1OHww&ixlib=rb-4.1.0&q=80&w=1080";
const LUXURY_IMG = "https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzcGElMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NzY5MDEzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const techniques = [
  {
    name: "Wispy",
    description:
      "Efeito natural com pontas abertas e leve. Dá volume sem pesar — ideal para quem ama um olhar delicado e sofisticado.",
    image: LASH_IMG,
    tag: "Leveza e volume",
  },
  {
    name: "Capping",
    description:
      "Técnica de acabamento que sela as extensões com fios especiais, garantindo durabilidade e uniformidade ao olhar.",
    image: BEAUTY_IMG,
    tag: "Durabilidade",
  },
  {
    name: "Fox",
    description:
      "Inspirado nos olhos de raposa, alonga e levanta o canto externo dos olhos. Resultado dramático e sedutor.",
    image: TRAINING_IMG,
    tag: "Sensual e marcante",
  },
  {
    name: "Delineado",
    description:
      "Extensões aplicadas na base dos cílios para simular um delineado natural e permanente, com efeito clean e sofisticado.",
    image: LUXURY_IMG,
    tag: "Clean e sofisticado",
  },
];

export function Techniques() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="tecnicas"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#F5EDE6" }}
    >
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-15"
        style={{ background: "#C9A84C", filter: "blur(100px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
            O QUE VOCÊ VAI APRENDER
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
            Técnicas que o mercado{" "}
            <span style={{ fontStyle: "italic", color: "#C9A84C" }}>
              mais valoriza
            </span>
          </h2>
        </motion.div>

        {/* Technique cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ aspectRatio: "3/4" }}
            >
              <ImageWithFallback
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 30%, #0a0a0acc 70%, #0a0a0aee 100%)",
                }}
              />

              {/* Gold hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: "#C9A84C" }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "#C9A84C22",
                    border: "1px solid #C9A84C55",
                    color: "#C9A84C",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {tech.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: "#FFFFFF",
                    fontSize: "1.5rem",
                  }}
                >
                  {tech.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#c0b0a0",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    marginTop: "0.5rem",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                  className="group-hover:opacity-100 group-hover:-translate-y-0"
                >
                  {tech.description}
                </p>
              </div>

              {/* Top gold corner */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "#C9A84C22", border: "1px solid #C9A84C55" }}
              >
                <span style={{ color: "#C9A84C", fontSize: "0.7rem" }}>✦</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
