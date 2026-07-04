import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "What details are required for a consultation?", a: "Your exact date of birth, time of birth (as accurate as possible), and place of birth. For palmistry or tarot, we can proceed with your question directly." },
  { q: "Is online consultation available?", a: "Yes. Sessions are offered over WhatsApp video, Zoom or a simple voice call — anywhere in the world." },
  { q: "How long is a typical consultation?", a: "Most consultations run between 30 and 60 minutes, depending on the type of reading and the depth of your questions." },
  { q: "How do I book a session?", a: "The fastest way is to message us on WhatsApp using the button on this page. We'll confirm timing, share the fee and send a confirmation." },
  { q: "Which payment methods are accepted?", a: "UPI, all major Indian bank transfers, and international transfers via Wise/PayPal for clients outside India." },
  { q: "Are the readings confidential?", a: "Absolutely. Everything shared with Acharya Mehak Vats is held in complete confidence — always." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <SectionHeading eyebrow="FAQ" title="Everything you might" italic="wonder." align="center" />
        <div className="mt-16 divide-y divide-gold/15 border-y border-gold/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold"
                  aria-expanded={isOpen}
                  data-cursor
                >
                  <span className="font-display text-base font-light text-foreground md:text-lg">
                    <span className="mr-4 text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold"
                  >
                    <Plus size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-sm font-light leading-relaxed text-foreground/65 md:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}