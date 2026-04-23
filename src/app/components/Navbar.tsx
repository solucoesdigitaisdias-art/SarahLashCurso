import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Técnicas", href: "#tecnicas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  whatsappUrl: string;
}

export function Navbar({ whatsappUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #C9A84C22" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#C9A84C",
            fontSize: "1.3rem",
            letterSpacing: "0.04em",
          }}
        >
          Sarah{" "}
          <span style={{ color: "#E8D5C4", fontSize: "0.75rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.12em" }}>
            LASH DESIGNER
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#9a8a7a",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9a8a7a")}
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #A8882A)",
              color: "#0a0a0a",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.05em",
            }}
          >
            GARANTIR VAGA
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#C9A84C", cursor: "pointer" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
          style={{ background: "#0a0a0a", borderTop: "1px solid #C9A84C22" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#9a8a7a",
                  fontSize: "0.9rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.25rem 0",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full mt-2"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #A8882A)",
                color: "#0a0a0a",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              GARANTIR VAGA
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
