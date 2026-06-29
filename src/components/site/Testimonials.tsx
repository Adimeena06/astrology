import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote: "FOCUL STAR doesn't just sign models — they build legacies. The level of polish is unmatched in India.",
    name: "Aarav Khanna",
    role: "Creative Director · Maison Noir",
  },
  {
    quote: "From my first portfolio shoot to Paris Fashion Week — every step was curated. This is a real maison.",
    name: "Aanya Mehra",
    role: "Signed Talent",
  },
  {
    quote: "Their casting standard is the highest we've worked with. Every face on set was on-brand, on-time, on-point.",
    name: "Sienna Kapoor",
    role: "Brand Lead · Vélour Beauty",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const cur = items[i];

  return (
    <section className="relative border-y border-border bg-[oklch(0.025_0_0)] py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <SectionHeading eyebrow="Voices" title="In their" italic="own words." align="center" />

        <div className="relative mt-16">
          <Quote size={80} strokeWidth={0.5} className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold/15" />

          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <blockquote className="mx-auto max-w-3xl font-serif-lux text-2xl font-light italic leading-snug text-foreground/90 md:text-4xl">
                "{cur.quote}"
              </blockquote>
              <figcaption className="mt-10">
                <div className="font-display text-base text-gold">{cur.name}</div>
                <div className="mt-2 text-[10px] font-light uppercase tracking-[0.3em] text-foreground/55">{cur.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:border-gold hover:bg-gold/10">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-px transition-all duration-500 ${k === i ? "w-10 bg-gold" : "w-5 bg-foreground/25"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:border-gold hover:bg-gold/10">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}