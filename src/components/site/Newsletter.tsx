import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.13 84 / 0.18) 0%, transparent 60%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-3xl px-6 text-center md:px-10"
      >
        <p className="mb-5 flex items-center justify-center gap-4 text-[10px] font-light uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-10 bg-gold" />
          The Inner Circle
          <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="font-display text-4xl font-light leading-tight text-foreground md:text-6xl">
          Receive the <span className="font-serif-lux italic text-gradient-gold">FOCUL Dispatch</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm font-light text-foreground/60">
          Editorial drops, open castings and house news — delivered to a curated few.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
          className="mx-auto mt-10 flex max-w-xl items-center gap-2 border-b border-gold/40 pb-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent px-2 py-3 text-sm font-light text-foreground placeholder:text-foreground/30 focus:outline-none"
          />
          <button
            type="submit"
            data-cursor
            className="group inline-flex items-center gap-2 px-4 py-3 text-[11px] font-light uppercase tracking-[0.3em] text-gold transition-all hover:gap-3"
          >
            {done ? <>Subscribed <Check size={14} /></> : <>Subscribe <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></>}
          </button>
        </form>
      </motion.div>
    </section>
  );
}