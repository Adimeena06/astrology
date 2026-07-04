import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { UserCheck, Lock, Wrench, Globe, Users, Award } from "lucide-react";

const items = [
  { icon: UserCheck, title: "Personalized Guidance", desc: "Every consultation is tailored to your unique chart and question." },
  { icon: Lock, title: "Confidential Consultation", desc: "Your story stays sacred. Complete discretion, always." },
  { icon: Wrench, title: "Practical Remedies", desc: "Simple, actionable rituals that fit modern lives." },
  { icon: Globe, title: "Online & Offline Sessions", desc: "Available worldwide over WhatsApp, video or in person." },
  { icon: Users, title: "Trusted by Clients", desc: "Thousands of families guided across career, love and business." },
  { icon: Award, title: "Professional Experience", desc: "A lifetime of study rooted in authentic Vedic tradition." },
];

export function WhyChoose() {
  return (
    <section className="relative border-t border-border bg-[oklch(0.055_0_0)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted guidance,"
          italic="rooted in tradition."
          align="center"
        />
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="glass-panel rounded-2xl p-8"
              data-cursor
            >
              <it.icon size={24} strokeWidth={1.3} className="text-gold" />
              <h3 className="mt-5 font-display text-lg text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-foreground/60">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}