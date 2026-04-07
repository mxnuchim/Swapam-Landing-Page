"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface Props {
  label: string;
  icon?: string;
  /** Delay before the entrance animation plays (seconds) */
  delay?: number;
  className?: string;
}

const Pill = ({ label, icon = "⚡", delay = 0, className = "" }: Props) => {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mb-4 w-fit ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Outer glow ring that blooms on hover ── */}
      <motion.span
        aria-hidden
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 rounded-full bg-brand/20 blur-md"
      />

      {/* ── Pill body ── */}
      <motion.span
        animate={
          reduced ? {} : { y: hovered ? -2 : 0, scale: hovered ? 1.03 : 1 }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-flex cursor-default items-center gap-1.5 overflow-hidden rounded-full border border-brand/25 bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand"
      >
        {/* ── Shimmer sweep ── */}
        <motion.span
          aria-hidden
          initial={{ x: "-110%" }}
          animate={{ x: hovered ? "110%" : "-110%" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />

        {/* ── Icon with subtle spin on hover ── */}
        <motion.span
          animate={reduced ? {} : { rotate: hovered ? [0, -15, 12, 0] : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="text-base leading-none"
        >
          {icon}
        </motion.span>

        <span className="text-xs">{label}</span>
      </motion.span>
    </motion.div>
  );
};

export default Pill;
