import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { title: "Professional Training", desc: "Master classes with international runway coaches and stylists." },
  { title: "Verified Opportunities", desc: "Every audition, brand and contract vetted by our legal team." },
  { title: "Luxury Branding", desc: "Identity systems crafted to elevate every signed talent." },
  { title: "Industry Experts", desc: "A leadership team built across Mumbai, Paris and New York." },
  { title: "International Standards", desc: "Aligned with the rituals and rigor of global mother agencies." },
  { title: "Dedicated Mentors", desc: "A personal mentor with every contract — for life." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative border-y border-border bg-[oklch(0.025_0_0)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Why FOCUL STAR"
          title="An agency built like a"
          italic="maison."
        />

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2 md:block" />
          <div className="space-y-12 md:space-y-20">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16`}
                >
                  {/* Node */}
                  <span className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rotate-45 border border-gold bg-black md:left-1/2" />
                  <span className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rotate-45 bg-gold/30 blur-sm md:left-1/2" />

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}>
                    <span className="font-display text-[10px] tracking-[0.4em] text-gold">
                      {String(i + 1).padStart(2, "0")} ·
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-light text-foreground md:text-3xl">{it.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-foreground/60">{it.desc}</p>
                  </div>
                  <div className={left ? "" : "md:order-1"} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}