"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Pill from "./shared/ui/Pill";
import HeroPhone from "./shared/ui/HeroPhone";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-canvas overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#A29BFE22,transparent_40%)]" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 px-6 pt-32">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <Pill label="Instant Crypto Off-Ramp" delay={0.1} />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-ink leading-tight"
          >
            Convert Crypto to Naira in Seconds
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-subtext max-w-md"
          >
            No delays. No stress. Swap USDT & USDC instantly with the fastest
            off-ramp in Africa.
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-1 text-sm text-subtext max-w-md"
          >
            Trusted by 10,000+ users across Africa
          </motion.p>
        </div>

        <HeroPhone />
      </div>
    </section>
  );
}
