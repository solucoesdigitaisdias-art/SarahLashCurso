import "../styles/fonts.css";
import { Hero } from "./components/Hero";
import { AboutSarah } from "./components/AboutSarah";
import { Numbers } from "./components/Numbers";
import { Problem } from "./components/Problem";
import { Courses } from "./components/Courses";
import { Techniques } from "./components/Techniques";
import { Testimonials } from "./components/Testimonials";
import { Included } from "./components/Included";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// ─────────────────────────────────────────────────────────────
// Substitua pelos links reais da Sarah
// ─────────────────────────────────────────────────────────────
const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá%20Sarah!%20Quero%20saber%20mais%20sobre%20o%20curso%20de%20Lash%20Design!";
const INSTAGRAM_URL = "https://instagram.com/sarah.lashdesigner";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      }}
    >
      {/* Fixed navigation */}
      <Navbar whatsappUrl={WHATSAPP_URL} />

      {/* Floating WhatsApp button */}
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />

      {/* Page sections */}
      <main>
        {/* 1. Hero */}
        <Hero whatsappUrl={WHATSAPP_URL} />

        {/* 2. About Sarah */}
        <AboutSarah whatsappUrl={WHATSAPP_URL} />

        {/* 3. Numbers */}
        <Numbers />

        {/* 4. Problem */}
        <Problem />

        {/* 5. Courses */}
        <Courses whatsappUrl={WHATSAPP_URL} />

        {/* 6. Techniques */}
        <Techniques />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Included */}
        <Included />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Final CTA */}
        <FinalCTA whatsappUrl={WHATSAPP_URL} instagramUrl={INSTAGRAM_URL} />
      </main>

      {/* Footer */}
      <Footer whatsappUrl={WHATSAPP_URL} instagramUrl={INSTAGRAM_URL} />
    </div>
  );
}
