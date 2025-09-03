"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // SSR-safe in Next.js
import styles from "./ProcessTimeline.module.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discussion", desc: "We gather website requirements by detailed client interaction." },
  { title: "Sketch", desc: "Prototype layouts are created based on client needs." },
  { title: "Approval", desc: "Final layout is refined and sent for approval." },
  { title: "Web Design", desc: "Designs follow the approved direction and best practices." },
  { title: "Graphic Design", desc: "Infographics are added for better UI." },
  { title: "Optimization", desc: "Speed optimization for better UX." },
  { title: "Testing", desc: "Compatibility testing across devices." },
  { title: "Hosting", desc: "Secure hosting & SSL deployment." },
];

export default function ProcessTimelineGSAP() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const trackEl = trackRef.current;
    if (!sectionEl || !trackEl) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only run on desktop
    const mq = window.matchMedia("(min-width: 1025px)");
    let trigger: ScrollTrigger | null = null;
    let tween: gsap.core.Tween | null = null;

    const setup = () => {
      // Kill previous setup (e.g., after resize)
      trigger?.kill();
      tween?.kill();

      if (!mq.matches) {
        gsap.set(trackEl, { clearProps: "all" });
        ScrollTrigger.refresh();
        return;
      }

      // Total horizontal distance to scroll
      const total = Math.max(trackEl.scrollWidth - window.innerWidth, 0);

      gsap.set(trackEl, { x: 0 });

      tween = gsap.to(trackEl, {
        x: -total,
        ease: "none",
      });

      trigger = ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",                // when section top hits viewport top
        end: `+=${total}`,              // scroll distance equals the horizontal length
        pin: true,                      // pin the section while scrubbing
        scrub: 1,                       // smooth scrub
        animation: tween,
        invalidateOnRefresh: true,
      });

      ScrollTrigger.refresh();
    };

    setup();

    // Recompute on resize
    const ro = new ResizeObserver(() => setup());
    ro.observe(document.body);

    // Also listen for media query changes
    mq.addEventListener?.("change", setup);

    return () => {
      ro.disconnect();
      mq.removeEventListener?.("change", setup);
      trigger?.kill();
      tween?.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (trackEl) gsap.killTweensOf(trackEl);
    };
  }, []);

  return (
    <section ref={sectionRef as any} className={styles["process-section"]}>
      <h2 className="text-center mb-5">Our Development Process</h2>

      {/* ScrollTrigger will "pin" this whole section; no sticky needed */}
      <div className={styles["process-scroll-container"]} style={{ position: "relative" }}>
        <div className="container">
          <div className={styles["process-outer-container"]}>
            <div ref={trackRef} className={styles["process-wrap"]}>
              {steps.map((step, idx) => (
                <div className={styles["process-box"]} key={idx}>
                  <div
                    className={`${styles["process-circle"]} ${styles[`circle-style-${idx % 8}`]}`}
                  >
                    {step.title}
                  </div>
                  <p className={styles["process-desc"]}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
