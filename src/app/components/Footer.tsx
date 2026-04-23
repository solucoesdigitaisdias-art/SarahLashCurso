import { Instagram, MessageCircle } from "lucide-react";

interface FooterProps {
  whatsappUrl: string;
  instagramUrl: string;
}

export function Footer({ whatsappUrl, instagramUrl }: FooterProps) {
  return (
    <footer
      className="py-10 relative"
      style={{ background: "#060606", borderTop: "1px solid #C9A84C22" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#C9A84C",
              fontSize: "1.2rem",
            }}
          >
            Sarah{" "}
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#5a5040",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
              }}
            >
              LASH DESIGNER
            </span>
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#3a302a",
              fontSize: "0.78rem",
              marginTop: "0.25rem",
            }}
          >
            Formando profissionais com excelência e dedicação.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "#C9A84C11",
              border: "1px solid #C9A84C33",
              color: "#C9A84C",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
            }}
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "#C9A84C11",
              border: "1px solid #C9A84C33",
              color: "#C9A84C",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
            }}
          >
            <Instagram size={15} />
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#2a2020",
            fontSize: "0.75rem",
          }}
        >
          © 2026 Sarah Lash Designer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
