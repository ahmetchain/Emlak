import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoSvg from "../assets/logo/prima.svg";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const total = 2200;
    const tick  = 16;
    const steps = total / tick;
    let step = 0;

    const id = setInterval(() => {
      step++;
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 2.5);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (step >= steps) {
        clearInterval(id);
        setTimeout(onDone, 320);
      }
    }, tick);

    return () => clearInterval(id);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      {/* Logo — brightness-0 invert turns the dark SVG fully white */}
      <motion.img
        src={logoSvg}
        alt="Selim Safak"
        className="w-56 sm:w-72 h-auto mb-14 brightness-0 invert"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      />

      {/* Progress track */}
      <div className="relative w-40 sm:w-56">
        <div className="h-px w-full bg-white/10" />
        <motion.div
          className="absolute top-0 left-0 h-px bg-white/70"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.08, ease: "linear" }}
        />
      </div>

      {/* Counter */}
      <motion.span
        className="mt-4 text-white/25 text-[10px] font-mono tracking-[0.25em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {String(progress).padStart(3, "0")}
      </motion.span>
    </motion.div>
  );
}
