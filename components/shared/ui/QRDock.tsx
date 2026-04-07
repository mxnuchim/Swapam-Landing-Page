"use client";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

type Store = "ios" | "android" | "unknown";

const IOS_URL = "https://apps.apple.com/app/swapam/id6736902828";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.mxnuchim.Swapam_App";
const QR_URL = IOS_URL;

const SCROLL_THRESHOLD = 80;

const COLLAPSED = { w: 64, h: 64 };
const EXPANDED = { w: 110, h: 172 };

function detectStore(): Store {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "unknown";
}

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.45;

const AppQRDock = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [store, setStore] = useState<Store>("unknown");
  const reduced = useReducedMotion();

  useEffect(() => {
    setStore(detectStore());
  }, []);

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (store === "ios") return window.open(IOS_URL, "_blank");
    if (store === "android") return window.open(ANDROID_URL, "_blank");
    window.open(IOS_URL, "_blank");
  };

  const { w, h } = collapsed ? COLLAPSED : EXPANDED;

  const storeLabel =
    store === "ios"
      ? "Download on the App Store"
      : store === "android"
      ? "Get it on Google Play"
      : "Download Swapam";

  return (
    <>
      {/* ── Mobile: full-width bottom button ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden">
        <motion.button
          onClick={handleClick}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="relative w-full overflow-hidden rounded-2xl bg-[#3D2BA8]
                     py-4 px-6 shadow-2xl shadow-[#3D2BA8]/40 select-none
                     flex items-center justify-center gap-3 cursor-pointer"
          whileHover="shimmer"
          initial="idle"
        >
          <span className="font-semibold text-white text-base leading-none">
            {storeLabel}
          </span>

          {/* Shimmer sweep overlay */}
          <motion.span
            aria-hidden
            variants={{
              idle: { x: "-120%", opacity: 0 },
              shimmer: { x: "120%", opacity: 1 },
            }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)",
              willChange: "transform",
            }}
          />
        </motion.button>
      </div>

      {/* ── Desktop: original QR dock (untouched) ── */}
      <motion.div
        onClick={handleClick}
        initial="idle"
        title={collapsed ? "Download Swapam" : undefined}
        animate={{ width: w, height: h, borderRadius: 16 }}
        transition={reduced ? { duration: 0 } : { duration: DURATION, ease }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer overflow-hidden
                   bg-[#3D2BA8] shadow-2xl shadow-brand/40 select-none hidden lg:block"
        style={{ originX: 1, originY: 1, willChange: "width, height" }}
        whileHover="shimmer"
      >
        <AnimatePresence mode="wait" initial={false}>
          {collapsed ? (
            <motion.div
              key="mini"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease }}
              className="flex h-[64px] w-[64px] items-center justify-center"
            >
              <QRCode
                value={QR_URL}
                size={44}
                fgColor="#A29BFE"
                bgColor="transparent"
                level="M"
              />
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.15, ease }}
              className="flex flex-col items-center gap-3 p-4"
            >
              <QRCode
                value={QR_URL}
                size={80}
                fgColor="#A29BFE"
                bgColor="transparent"
                level="M"
              />
              <p className="text-center font-semibold leading-snug text-white text-xs">
                Get the
                <br />
                Swapam app
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shimmer sweep overlay */}
        <motion.span
          aria-hidden
          variants={{
            idle: { x: "-120%", opacity: 0 },
            shimmer: { x: "120%", opacity: 1 },
          }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)",
            willChange: "transform",
          }}
        />
      </motion.div>
    </>
  );
};

export default AppQRDock;
