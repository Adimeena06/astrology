import { Instagram, MessageCircle, Mail, Sparkles } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL, TAGLINE } from "@/lib/constants";

const quick = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Vedic Astrology", "Kundli Analysis", "Palmistry", "Tarot Reading",
  "Numerology", "Vastu Consultation", "Love & Marriage", "Gemstone Guidance",
];

export function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-black">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50">
                <Sparkles size={16} className="text-gold" />
              </span>
              <div>
                <p className="font-display text-sm tracking-[0.3em] text-foreground">ACHARYA</p>
                <p className="text-gradient-gold font-display text-xs tracking-[0.4em]">MEHAK VATS</p>
              </div>
            </div>
            <p className="mt-6 font-serif-lux text-base italic text-foreground/60">{TAGLINE}</p>
            <div className="mt-6 flex gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold/10">
                <MessageCircle size={15} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold/10">
                <Instagram size={15} />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold/10">
                <Mail size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">Quick Links</h4>
            <ul className="mt-6 space-y-3">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm font-light text-foreground/65 transition-colors hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">Services</h4>
            <ul className="mt-6 grid grid-cols-1 gap-3">
              {services.map((s) => (
                <li key={s} className="text-sm font-light text-foreground/65">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[10px] uppercase tracking-[0.4em] text-gold">Contact</h4>
            <ul className="mt-6 space-y-3 text-sm font-light text-foreground/65">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
                  WhatsApp: +91 76689 52567
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold">@acharyamehakvats</a>
              </li>
              <li>India · Consulting Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
            © {new Date().getFullYear()} Acharya Mehak Vats · All Rights Reserved
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em] text-foreground/45">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}