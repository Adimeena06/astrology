import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Book consultation on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.45)] animate-glow-pulse md:h-16 md:w-16"
      data-cursor
    >
      <MessageCircle size={26} strokeWidth={1.8} />
      <span className="pointer-events-none absolute inset-0 rounded-full border border-white/30" />
    </motion.a>
  );
}