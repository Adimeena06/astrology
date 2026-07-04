import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  italic,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mb-5 flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.4em] text-gold ${centered ? "justify-center" : ""}`}
        >
          <span className="h-px w-10 bg-gold" />
          {eyebrow}
          {centered && <span className="h-px w-10 bg-gold" />}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl"
      >
        {title}
        {italic && (
          <>
            {" "}
            <span className="text-gradient-gold italic">{italic}</span>
          </>
        )}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 text-base font-light leading-relaxed text-foreground/65 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}