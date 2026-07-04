import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import portrait from "@/assets/mehak-portrait.jpeg";
import { WHATSAPP_URL, TAGLINE } from "@/lib/constants";
import { StarsBackground } from "./StarsBackground";

const zodiacs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"]; 

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
      {/* Celestial background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-royal)" }} />
      <StarsBackground density={160} />

      {/* Rotating zodiac wheel */}
      <div className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[720px] w-[720px] animate-orbit-slow">
          <div className="absolute inset-0 rounded-full border border-gold/15" />
          <div className="absolute inset-10 rounded-full border border-gold/10" />
          <div className="absolute inset-24 rounded-full border border-gold/10" />
          {zodiacs.map((z, i) => {
            const angle = (i / zodiacs.length) * 360;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-3xl text-gold/40"
                style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-340px) rotate(-${angle}deg)` }}
              >
                {z}
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 pb-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.4em] text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            <Sparkles size={12} />
            Vedic Astrologer · Spiritual Consultant
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[10.5vw] font-light leading-[1] tracking-tight text-foreground md:text-6xl lg:text-[5.2rem]"
          >
            Discover What
            <br />
            <span className="text-foreground/85">the </span>
            <span className="text-gradient-gold italic">Stars</span>
            <br />
            Reveal.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/70 md:text-lg"
          >
            Personalized guidance through Vedic Astrology, Palmistry, Tarot, Numerology,
            Vastu and Spiritual Consultation by <span className="text-gold">Acharya Mehak Vats</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-all duration-500 hover:glow-gold"
            >
              <MessageCircle size={16} />
              Book on WhatsApp
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              data-cursor
              className="inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold/10"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-8 text-[10px] font-light uppercase tracking-[0.3em] text-foreground/55"
          >
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" /> 10,000+ Consultations</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" /> Online & Offline</div>
            <div className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" /> 100% Confidential</div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem]" style={{ background: "var(--gradient-radial-gold)", filter: "blur(40px)" }} />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 glass-panel">
            <img
              src={portrait}
              alt="Acharya Mehak Vats — Vedic Astrologer & Spiritual Consultant"
              className="h-[560px] w-full object-cover md:h-[640px]"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">Acharya</p>
              <p className="font-display text-2xl text-foreground md:text-3xl">Mehak Vats</p>
              <p className="mt-1 font-serif-lux text-sm italic text-foreground/70">{TAGLINE}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-light uppercase tracking-[0.4em] text-foreground/50">Scroll</span>
          <div className="relative h-10 w-5 rounded-full border border-gold/40">
            <div className="absolute left-1/2 top-2 h-1.5 w-px -translate-x-1/2 bg-gold animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}