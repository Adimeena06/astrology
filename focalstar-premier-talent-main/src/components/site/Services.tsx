import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Sparkles,
  ScrollText,
  Hand,
  Layers,
  Hash,
  Home,
  Heart,
  Briefcase,
  TrendingUp,
  Coins,
  Gem,
  CalendarClock,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Vedic Astrology",
    desc: "Deep insight into your janam kundli and planetary influences.",
    price: "₹1200",
  },
  {
    icon: ScrollText,
    title: "Kundli Analysis",
    desc: "Comprehensive birth chart study for life-defining decisions.",
    price: "₹1100",
  },
  {
    icon: Hand,
    title: "Palmistry",
    desc: "Reading the lines of destiny etched in your palms.",
    price: "₹1,499",
  },
  {
    icon: Layers,
    title: "Tarot Reading",
    desc: "Focused card readings to illuminate present and near future.",
    price: "₹999",
  },
  {
    icon: Hash,
    title: "Numerology",
    desc: "Aligning name, date and vibration with your soul purpose.",
    price: "₹1,299",
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    desc: "Harmonize energies of your home, office and sacred spaces.",
    price: "₹3,999",
  },
  {
    icon: Heart,
    title: "Love & Marriage",
    desc: "Compatibility, timing and remedies for lasting union.",
    price: "₹2,499",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Discover your true calling and best professional path.",
    price: "₹1,999",
  },
  {
    icon: TrendingUp,
    title: "Business Astrology",
    desc: "Muhurat, partners and growth timing for your venture.",
    price: "₹4,999",
  },
  {
    icon: Coins,
    title: "Wealth Consultation",
    desc: "Attract abundance through aligned action and rituals.",
    price: "₹2,499",
  },
  {
    icon: Gem,
    title: "Gemstone Guidance",
    desc: "Personalized gemstones prescribed by planetary strength.",
    price: "₹799",
  },
  {
    icon: CalendarClock,
    title: "Muhurat Selection",
    desc: "Auspicious timings for milestones and ceremonies.",
    price: "₹1,199",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-border py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-25"
        style={{
          background: "var(--gradient-radial-gold)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Consultation Services"
          title="Timeless practices,"
          italic="personally guided."
          description="A complete spectrum of Vedic and spiritual practices — each session curated to your questions, chart and unique life moment."
        />

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-[oklch(0.06_0_0)] p-8 transition-colors duration-500 hover:border-gold/50"
              data-cursor
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "var(--gradient-radial-gold)" }}
              />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-black/40 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                  <s.icon
                    size={20}
                    strokeWidth={1.3}
                    className="text-gold"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-light text-foreground">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/60">
                  {s.desc}
                </p>

                {/* Price */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">
                    Starting From
                  </span>

                  <span className="font-display text-2xl text-gold font-semibold">
                    {s.price}
                  </span>
                </div>

                <span className="absolute right-0 top-0 font-display text-[10px] tracking-[0.3em] text-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}