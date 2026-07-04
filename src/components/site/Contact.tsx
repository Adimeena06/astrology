import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL, PHONE_DISPLAY } from "@/lib/constants";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Instagram, label: "Instagram", value: "@acharyamehakvats", href: INSTAGRAM_URL },
  { icon: MapPin, label: "Consulting From", value: "India · Worldwide Online", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-[oklch(0.055_0_0)] py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-royal)" }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Begin your"
          italic="conversation."
          description="A single message on WhatsApp is all it takes. Share your name and the guidance you seek — we'll take it from there."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-panel group rounded-2xl p-6 text-center transition-colors hover:border-gold/50"
              data-cursor
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition-all group-hover:bg-gold/10">
                <c.icon size={18} strokeWidth={1.4} />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gold/80">{c.label}</p>
              <p className="mt-2 font-display text-sm text-foreground">{c.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="inline-flex items-center gap-3 rounded-full bg-gold px-9 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-all hover:glow-gold"
          >
            <MessageCircle size={16} />
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}