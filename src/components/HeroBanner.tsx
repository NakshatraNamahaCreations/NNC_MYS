"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import s from "./HeroBanner.module.css";

const EASE: [number, number, number, number] = [0.45, 0, 0.55, 1];

// just the backgrounds you want to cycle through
const IMAGES = [
  "/images/banner16.jpg",
  "/images/banner13.jpg",
  "/images/banner12.jpg",
];

export default function HeroBanner() {
  const [i, setI] = useState(0);

  useEffect(() => {
    // Skip heavy motion if the user prefers reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    const id = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={s.hero} aria-label="Hero">
      {/* Sliding background (only this changes) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${i}`}
          className={s.bgImage}
          style={{ backgroundImage: `url(${IMAGES[i]})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.45, ease: EASE } }}
        />
      </AnimatePresence>

      {/* Overlays for contrast and subtle style */}
      <div className={s.bgFx} aria-hidden="true" />
      <div className={s.glow} aria-hidden="true" />

      {/* STATIC content — does not change between slides */}
      <div className={s.wrap}>
        <div className={s.left}>
          <p className={s.tagline}>DIGITAL SOLUTIONS</p>
          <h1 className={s.title}>Best Website Development Company in Mysore</h1>
          <p className={s.copy}>
            We craft fast, secure and SEO-ready products across web, mobile and enterprise —
            from concept to launch.
          </p>

          <div className={s.ctas}>
            <Link href="/services" className={`${s.btn} ${s.btnPrimary}`}>Our Services</Link>
            <Link href="/contact-us" className={`${s.btn} ${s.btnGhost}`}>Talk to Us</Link>
          </div>

          {/* Manual controls (switch background only) */}
          <div className={s.pills} role="tablist" aria-label="Hero background selector">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Background ${idx + 1}`}
                className={`${s.pill} ${i === idx ? s.pillActive : ""}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
