import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 260, damping: 26 });
  const sy = useSpring(y, { stiffness: 260, damping: 26 });
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.2 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.13_84)]"
          style={{ boxShadow: "0 0 12px oklch(0.78 0.13 84 / 0.9)" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="h-40 w-40 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.13 84 / 0.16), transparent 70%)" }}
        />
      </motion.div>
    </>
  );
}