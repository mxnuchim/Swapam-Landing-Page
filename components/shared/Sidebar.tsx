"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CircleX, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; text: string }[];
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panel = {
  hidden: { x: "100%" },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Sidebar({ isOpen, onClose, links }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ─── Backdrop ─── */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/20 backdrop-blur-sm"
          />

          {/* ─── Panel ─── */}
          <motion.div
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-[9999] h-full w-[85%] max-w-sm"
          >
            {/* Glass container */}
            <div className="h-full bg-white/90 backdrop-blur-xl border-l border-white/40 shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Image src="/icon.png" alt="" width={32} height={32} />
                  <span className="font-semibold text-ink">Swapam</span>
                </div>

                <X
                  onClick={onClose}
                  className="hover:cursor-pointer hover:bg-gray-100 transition text-ink"
                  size={16}
                />
              </div>

              {/* Links */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col px-6 py-6 gap-6"
              >
                {links.map((link) => (
                  <motion.div key={link.href} variants={item}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-lg font-medium text-ink transition hover:text-brand"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
