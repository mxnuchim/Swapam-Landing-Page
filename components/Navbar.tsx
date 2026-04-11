"use client";
import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import GbpFlag from "./icons/GbpFlag";

interface NavbarProps {
  onOpenSidebar: () => void;
}

const Navbar = ({ onOpenSidebar }: NavbarProps) => {
  const router = useRouter();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div
        className="flex items-center justify-between px-6 py-3 rounded-2xl 
        backdrop-blur-xl bg-white/70 border border-white/40 shadow-sm"
      >
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image src="/icon.png" alt="" width={36} height={36} />
          <span className="font-medium text-ink tracking-tight">Swapam</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-subtext">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              <span className="transition-colors group-hover:text-ink">
                {link.text}
              </span>

              {/* subtle underline animation */}
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right spacer (replaces CTA for balance) */}
        <div className="hidden lg:block w-[72px]" />
        <button className="hidden lg:flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-ink transition hover:border-brand/30 hover:bg-brand-soft">
          <GbpFlag className="w-4 h-4" />
          <span>EN</span>
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-ink" onClick={() => onOpenSidebar()}>
          <HiOutlineBars3BottomRight size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
