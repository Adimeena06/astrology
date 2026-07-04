import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { MessageCircle, CalendarClock, Sparkles, Star } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Contact on WhatsApp", desc: "Reach out any time — your first message is always answered personally." },
  { icon: CalendarClock, title: "Share Birth Details", desc: "Date, time and place of birth so your chart can be cast precisely." },
  { icon: Star, title: "Schedule Consultation", desc: "Pick a session over video or in person, at a time that suits you." },
  { icon: Sparkles, title: "Receive Guidance", desc: "A calm, clear reading with practical remedies and next steps." },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Consultation Process"
          title="Four gentle steps to"
          italic="clarity."
          align="center"
        />

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-18 w-18 place-items-center">
                  <div className="grid h-18 w-18 place-items-center rounded-full border border-gold/50 bg-black" style={{ width: 72, height: 72 }}>
                    <s.icon size={22} className="text-gold" strokeWidth={1.4} />
                  </div>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gold font-display text-[11px] text-black">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-foreground/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}