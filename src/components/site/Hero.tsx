import { motion } from "framer-motion";
import hero from "@/assets/hero-model.jpg";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="FOCUL STAR — luxury editorial fashion"
          className="h-full w-full object-cover object-center"
          width={1280}
          height={1600}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Floating gold accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full opacity-40"
        style={{ background: "var(--gradient-radial-gold)", filter: "blur(40px)" }}
      />

      {/* Vertical label */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-px bg-gradient-to-b from-transparent to-gold" />
          <span className="rotate-180 text-[10px] font-light uppercase tracking-[0.5em] text-gold/80" style={{ writingMode: "vertical-rl" }}>
            Est · MMXXIV · Mumbai
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-6 flex items-center gap-4 text-[10px] font-light uppercase tracking-[0.4em] text-gold"
        >
          <span className="h-px w-12 bg-gold" />
          India's Premium Modeling Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[14vw] font-light leading-[0.9] tracking-[-0.02em] text-foreground md:text-[9rem] lg:text-[11rem]"
        >
          FOCUL
          <br />
          <span className="text-gradient-gold italic font-serif-lux font-normal">STAR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="mt-8 max-w-xl font-serif-lux text-2xl font-light italic text-foreground/85 md:text-3xl"
        >
          Where stars are created.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-3 max-w-md text-sm font-light leading-relaxed text-foreground/65"
        >
          A curated house of talent — representing the next generation of models,
          influencers and performers across runway, editorial and brand campaigns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#become"
            data-cursor
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-gold px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-all duration-500 hover:glow-gold"
          >
            <span className="relative z-10">Become a Model</span>
            <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#hire"
            data-cursor
            className="group inline-flex items-center gap-3 border border-gold/60 bg-transparent px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold/10"
          >
            Hire Models
          </a>
          <a
            href="#reel"
            data-cursor
            className="group inline-flex items-center gap-3 px-2 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/80 transition-colors hover:text-gold"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 transition-all group-hover:border-gold group-hover:bg-gold/10">
              <Play size={12} className="text-gold" fill="currentColor" />
            </span>
            Watch Showreel
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] font-light uppercase tracking-[0.4em] text-foreground/50">Scroll</span>
          <div className="relative h-10 w-5 rounded-full border border-gold/50">
            <div className="absolute left-1/2 top-2 h-1.5 w-px -translate-x-1/2 bg-gold animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}