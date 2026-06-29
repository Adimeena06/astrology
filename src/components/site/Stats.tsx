import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Signed Models" },
  { value: 120, suffix: "+", label: "Global Brands" },
  { value: 50, suffix: "+", label: "Fashion Shows" },
  { value: 25, suffix: "+", label: "Cities Worldwide" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-border bg-[oklch(0.03_0_0)] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center md:text-left"
            >
              <div className="font-display text-5xl font-light text-gradient-gold md:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[10px] font-light uppercase tracking-[0.35em] text-foreground/60">
                {s.label}
              </div>
              <div className="mt-5 h-px w-12 bg-gold/40 transition-all duration-500 group-hover:w-24 group-hover:bg-gold mx-auto md:mx-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}