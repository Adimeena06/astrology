import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

const models = [
  { name: "Aanya Mehra", age: 23, height: "5'10\"", category: "Editorial", city: "Mumbai", img: m1 },
  { name: "Kabir Rao", age: 26, height: "6'2\"", category: "Runway", city: "Delhi", img: m2 },
  { name: "Isha Verma", age: 24, height: "5'9\"", category: "Couture", city: "Bangalore", img: m3 },
  { name: "Rohan Singh", age: 27, height: "6'1\"", category: "Commercial", city: "Goa", img: m4 },
];

export function FeaturedModels() {
  return (
    <section id="models" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="The Roster"
            title="Featured"
            italic="Faces"
            description="A handpicked selection from our roster — talent shaping the next chapter of global fashion."
          />
          <a href="#all-models" data-cursor className="group inline-flex items-center gap-3 text-[11px] font-light uppercase tracking-[0.28em] text-gold">
            View all roster
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {models.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative cursor-pointer"
              data-cursor
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[oklch(0.08_0_0)]">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, oklch(0.78 0.13 84 / 0.18) 0%, transparent 50%)" }} />
                <span className="absolute left-4 top-4 border border-gold/60 bg-black/40 px-3 py-1 text-[9px] font-light uppercase tracking-[0.3em] text-gold backdrop-blur">
                  {m.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-light text-foreground">{m.name}</h3>
                  <div className="mt-2 flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.25em] text-foreground/60">
                    <span>{m.age} yrs</span>
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    <span>{m.height}</span>
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    <span>{m.city}</span>
                  </div>
                  <div className="mt-4 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                  <div className="mt-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-light uppercase tracking-[0.3em] text-gold">View Portfolio</span>
                    <ArrowUpRight size={14} className="text-gold" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}