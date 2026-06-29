import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 250, damping: 28 });
  const sy = useSpring(y, { stiffness: 250, damping: 28 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.6 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="h-3 w-3 rounded-full bg-[oklch(0.78_0.13_84)]"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-32 w-32 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 84 / 0.18), transparent 70%)" }} />
      </motion.div>
    </>
  );
}