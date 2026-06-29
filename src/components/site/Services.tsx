import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Crown, Sparkles, Camera, Star, Megaphone, Users,
  Search, GraduationCap, Footprints, Gem,
} from "lucide-react";

const services = [
  { icon: Crown, title: "Model Management", desc: "End-to-end career representation for runway and editorial talent." },
  { icon: Sparkles, title: "Fashion Shows", desc: "Production of luxury runway events for the world's top houses." },
  { icon: Camera, title: "Portfolio Shoots", desc: "Editorial-grade portfolio creation with award-winning photographers." },
  { icon: Star, title: "Celebrity Management", desc: "Bespoke representation for film, music and public personalities." },
  { icon: Megaphone, title: "Brand Promotions", desc: "Strategic brand alignment with India's most coveted faces." },
  { icon: Users, title: "Influencer Marketing", desc: "Performance-driven campaigns with verified creator partners." },
  { icon: Search, title: "Casting", desc: "Curated casting for film, fashion and global advertising." },
  { icon: GraduationCap, title: "Grooming", desc: "Holistic grooming for camera, runway and brand-readiness." },
  { icon: Footprints, title: "Runway Training", desc: "International-standard runway technique by master coaches." },
  { icon: Gem, title: "Personal Branding", desc: "A complete identity system — photography, voice and presence." },
];

export function Services() {
  return (
    <section id="services" className="relative border-y border-border bg-[oklch(0.025_0_0)] py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-30"
        style={{ background: "var(--gradient-radial-gold)", filter: "blur(60px)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="The Atelier of"
          italic="Talent"
          description="A full-service modeling and talent house — from discovery and training to representation and global brand placement."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border/40 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 5) * 0.08 }}
              className="group relative bg-[oklch(0.04_0_0)] p-8 transition-colors duration-700 hover:bg-[oklch(0.07_0.01_80)]"
              data-cursor
            >
              <s.icon size={26} strokeWidth={1} className="text-gold transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="mt-6 font-display text-lg font-light text-foreground">{s.title}</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-foreground/55">{s.desc}</p>
              <div className="mt-6 h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-full" />
              <span className="absolute right-4 top-4 font-display text-[10px] tracking-[0.3em] text-foreground/20">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}