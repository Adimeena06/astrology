import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

const chips = [
  { icon: Award, label: "15+ Years Experience" },
  { icon: Heart, label: "Compassionate Guidance" },
  { icon: ShieldCheck, label: "100% Confidential" },
  { icon: Sparkles, label: "Traditional Vedic Wisdom" },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] opacity-30"
        style={{ background: "var(--gradient-radial-gold)", filter: "blur(80px)" }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="About Acharya"
          title="Guiding souls with"
          italic="ancient wisdom."
          description="Acharya Mehak Vats is a trusted spiritual consultant devoted to helping people find clarity in career, relationships, marriage, business, finance, health and life. Her practice blends the disciplines of Vedic astrology, palmistry, tarot, numerology and vastu with a warm, modern approach — turning centuries-old wisdom into practical, personal guidance."
        />

        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {chips.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-6"
              >
                <c.icon size={22} className="text-gold" strokeWidth={1.4} />
                <p className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-foreground/90">
                  {c.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 glass-panel rounded-2xl p-8"
          >
            <p className="font-serif-lux text-xl italic leading-snug text-foreground/85 md:text-2xl">
              "Every soul carries a divine map. My work is simply to help you read it —
              with clarity, honesty and grace."
            </p>
            <footer className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gold">— Acharya Mehak Vats</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}