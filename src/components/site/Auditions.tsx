import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const auditions = [
  { date: "Aug 12", year: "2026", title: "Lakmé Couture Week — Open Call", city: "Mumbai · Jio Convention", seats: 42, tag: "Runway" },
  { date: "Aug 28", year: "2026", title: "Maison Noir Editorial Shoot", city: "New Delhi · Studio One", seats: 18, tag: "Editorial" },
  { date: "Sep 09", year: "2026", title: "Pan-India Casting · Brand Campaign", city: "Bangalore · The Leela", seats: 60, tag: "Commercial" },
];

export function Auditions() {
  return (
    <section id="auditions" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Open Castings"
          title="Upcoming"
          italic="Auditions"
          description="Apply directly to the season's most coveted opportunities. Limited seats, curated cohorts."
        />

        <div className="mt-16 space-y-4">
          {auditions.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group glass-panel relative grid grid-cols-1 items-center gap-6 p-6 transition-all duration-500 hover:border-gold md:grid-cols-[auto_1fr_auto] md:p-8"
              data-cursor
            >
              <div className="flex items-baseline gap-3 border-r-0 border-border pr-6 md:border-r">
                <div className="font-display text-5xl font-light text-gradient-gold">{a.date}</div>
                <div className="text-[10px] font-light uppercase tracking-[0.3em] text-foreground/50">{a.year}</div>
              </div>

              <div>
                <span className="inline-block border border-gold/40 px-2 py-0.5 text-[9px] font-light uppercase tracking-[0.3em] text-gold">{a.tag}</span>
                <h3 className="mt-3 font-display text-xl font-light text-foreground md:text-2xl">{a.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-5 text-[11px] font-light text-foreground/60">
                  <span className="inline-flex items-center gap-2"><MapPin size={12} className="text-gold" />{a.city}</span>
                  <span className="inline-flex items-center gap-2"><Users size={12} className="text-gold" />{a.seats} seats available</span>
                  <span className="inline-flex items-center gap-2"><Calendar size={12} className="text-gold" />Apply by 7 days prior</span>
                </div>
              </div>

              <a href="#apply" className="group/btn inline-flex items-center gap-3 self-start border border-gold/60 px-6 py-3 text-[11px] font-light uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-black md:self-center">
                Apply Now
                <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}