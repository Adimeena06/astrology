import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote: "Acharya ji's kundli reading changed the way I saw my career. Within months of following her guidance I found the role I had been praying for.",
    name: "Ananya Sharma",
    role: "Bengaluru · Career Consultation",
  },
  {
    quote: "Her marriage compatibility session was so warm and honest. We felt truly seen — and the remedies were beautifully practical.",
    name: "Rohan & Kritika Malhotra",
    role: "Delhi · Marriage Guidance",
  },
  {
    quote: "I've consulted many astrologers. Mehak ji is the rare one who blends deep Vedic knowledge with real compassion.",
    name: "Meera Iyer",
    role: "London · Vedic Astrology",
  },
  {
    quote: "The Vastu suggestions for our new office were subtle but powerful. Our team energy has shifted completely.",
    name: "Vikram Rao",
    role: "Mumbai · Vastu Consultation",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const cur = items[i];

  return (
    <section id="testimonials" className="relative border-t border-border bg-[oklch(0.055_0_0)] py-28 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <SectionHeading eyebrow="Testimonials" title="Voices of" italic="gratitude." align="center" />

        <div className="relative mt-16">
          <Quote size={80} strokeWidth={0.5} className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold/15" />

          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="text-gold" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mx-auto max-w-3xl font-serif-lux text-xl font-light italic leading-snug text-foreground/90 md:text-3xl">
                "{cur.quote}"
              </blockquote>
              <figcaption className="mt-10">
                <div className="font-display text-base text-gold">{cur.name}</div>
                <div className="mt-2 text-[10px] font-light uppercase tracking-[0.3em] text-foreground/55">{cur.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button onClick={prev} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:border-gold hover:bg-gold/10">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-px transition-all duration-500 ${k === i ? "w-10 bg-gold" : "w-5 bg-foreground/25"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-all hover:border-gold hover:bg-gold/10">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}