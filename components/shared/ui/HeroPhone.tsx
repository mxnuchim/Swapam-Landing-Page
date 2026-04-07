"use client";
import USDT from "@/components/icons/USDT";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

// ─── tiny floating card ────────────────────────────────────────────────────────
interface FloatCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatY?: number;
  floatDuration?: number;
}

const FloatCard = ({
  children,
  className = "",
  delay = 0,
  floatY = 10,
  floatDuration = 4,
}: FloatCardProps) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -floatY, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// ─── pulsing live dot ──────────────────────────────────────────────────────────
const LiveDot = () => (
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
  </span>
);

// ─── main component ────────────────────────────────────────────────────────────
const HeroPhone = () => {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center">
      {/* ── ambient glow behind the phone ── */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute h-[420px] w-[280px] rounded-full bg-brand/20 blur-3xl"
      />

      {/* ── secondary offset glow ── */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={
          reduced ? {} : { opacity: [0, 0.18, 0.08, 0.18], scale: [1, 1.08, 1] }
        }
        transition={{
          delay: 1,
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-8 top-16 h-48 w-48 rounded-full bg-violet-400/20 blur-2xl"
      />

      {/* ── phone — entrance + continuous float ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <motion.div
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="lg:mt-9 mt-0"
        >
          <Image
            src="/hero.svg"
            alt="Swapam app — crypto to naira in under 2 minutes"
            width={500}
            height={500}
            priority
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* ── floating card: swap complete notification ── */}
      <FloatCard
        delay={0.7}
        floatY={7}
        floatDuration={3.8}
        className="absolute -left-6 top-[18%] z-20 sm:-left-10"
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/90 px-3.5 py-2.5 shadow-xl shadow-violet-100/60 backdrop-blur-md">
          <USDT className="h-6 w-6" />
          <div>
            <p className="text-[11px] font-semibold text-gray-800">
              Swap Complete
            </p>
            <p className="text-[10px] text-gray-400">500 USDT → ₦770,000</p>
          </div>
        </div>
      </FloatCard>

      {/* ── floating card: live rate ── */}
      <FloatCard
        delay={0.9}
        floatY={9}
        floatDuration={4.5}
        className="absolute -right-4 top-[38%] z-20 sm:-right-8"
      >
        <div className="rounded-xl border border-violet-100 bg-white/90 px-3 py-2 shadow-lg shadow-violet-100/50 backdrop-blur-md">
          <p className="mb-0.5 text-[9px] font-medium text-gray-400 uppercase tracking-wide">
            Live Rate
          </p>
          <p className="text-sm font-bold text-brand">$1 = ₦1,540</p>
        </div>
      </FloatCard>

      {/* ── floating card: processing status ── */}
      <FloatCard
        delay={1.1}
        floatY={6}
        floatDuration={5}
        className="absolute -left-4 bottom-[22%] z-20 sm:-left-8"
      >
        <div className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-lg shadow-violet-100/50 backdrop-blur-md">
          <LiveDot />
          <p className="text-[11px] font-semibold text-gray-700">
            Processing...
          </p>
          {/* animated progress bar */}
          <div className="h-1 w-16 overflow-hidden rounded-full bg-gray-100">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 rounded-full bg-brand/70"
            />
          </div>
        </div>
      </FloatCard>

      {/* ── floating card: user count ── */}
      <FloatCard
        delay={1.3}
        floatY={8}
        floatDuration={4.2}
        className="absolute -right-3 bottom-[28%] z-20 sm:-right-6"
      >
        <div className="flex items-center gap-2 rounded-xl border border-violet-100 bg-white/90 px-3 py-2 shadow-lg shadow-violet-100/40 backdrop-blur-md">
          {/* stacked avatars */}
          <div className="flex -space-x-2">
            {["#7B5CF0", "#A78BFA", "#34D399"].map((c, i) => (
              <div
                key={i}
                style={{ background: c }}
                className="h-5 w-5 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <p className="text-[11px] font-semibold text-gray-700">10K+ users</p>
        </div>
      </FloatCard>
    </div>
  );
};

export default HeroPhone;
