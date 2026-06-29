import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Plus } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, h: "row-span-2", label: "Runway · SS25" },
  { src: g2, h: "row-span-1", label: "Backstage · Couture" },
  { src: g6, h: "row-span-2", label: "Beauty · Editorial" },
  { src: g4, h: "row-span-2", label: "Detail · Maison Noir" },
  { src: g3, h: "row-span-1", label: "Still Life · Heritage" },
  { src: g5, h: "row-span-1", label: "Show · Spotlight" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="The Archive"
          title="A House of"
          italic="Imagery"
          description="Moments from our editorials, runways and brand campaigns — captured by the world's leading photographers."
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${it.h}`}
              data-cursor
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/50" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, oklch(0.78 0.13 84 / 0.25), transparent 60%)" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-light uppercase tracking-[0.3em] text-gold">{it.label}</span>
                </div>
              </div>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-gold/0 bg-black/40 text-gold opacity-0 backdrop-blur transition-all duration-500 group-hover:border-gold group-hover:opacity-100">
                <Plus size={14} />
              </span>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}