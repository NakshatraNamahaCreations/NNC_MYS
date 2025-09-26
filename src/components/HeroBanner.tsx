"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import s from "./HeroBanner.module.css";

const VIDEO_SRC = "/images/tech/HomeBanner.mp4";  // your mp4 in /public/videos/

export default function HeroBanner() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Respect reduced motion: pause autoplaying background
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("autoplay");
    }
  }, []);

  return (
    <section className={s.hero} aria-label="Hero">
      {/* Full-bleed background video */}
      <video
        ref={videoRef}
        className={s.bgVideo}
        src={VIDEO_SRC}
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        aria-hidden="true"
      />

      {/* Dark overlay for contrast */}
      <div className={s.bgFx} aria-hidden="true" />
      <div className={s.glow} aria-hidden="true" />

      {/* Foreground content */}
      <div className={s.wrap}>
        <div className={s.left}>
          <p className={s.tagline}>DIGITAL SOLUTIONS</p>
          <h1 className={s.title}>Best Website Development Company in Mysore</h1>
          <p className={s.copy}>
            We craft fast, secure and SEO-ready products across web, mobile and enterprise 
            from concept to launch.
          </p>

          <div className={s.ctas}>
            <Link href="/service" className={`${s.btn} ${s.btnPrimary}`}>Our Services</Link>
            <Link href="/contact-us" className={`${s.btn} ${s.btnGhost}`}>Talk to Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
