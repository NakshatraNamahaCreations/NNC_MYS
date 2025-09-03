// src/pages/SoftwareProcessTimeline.tsx
import React, { useRef, useEffect, useMemo, useCallback } from "react";
import styles from "./SoftwareProcessTimeline.module.css";
import { HiLightBulb } from "react-icons/hi";
import { BiAnalyse } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdDesignServices, MdSupportAgent } from "react-icons/md";
import { VscDebugAlt } from "react-icons/vsc";

type Step = { title: string; icon: React.ReactNode; text: string };

const originalSteps: Step[] = [
  { title: "Requirement", icon: <HiLightBulb size={28} color="#26abe1" />, text: "Before starting any project, we first understand the client’s vision to ensure their business success." },
  { title: "Analysis", icon: <BiAnalyse size={28} color="#26abe1" />, text: "We collect all requirements and assess the existing software to determine what needs maintenance and what needs to be newly developed." },
  { title: "Coding", icon: <FaCode size={28} color="#26abe1" />, text: "Our developers evaluate the required programming languages and start coding based on the specified requirements." },
  { title: "Designing & implementation", icon: <MdDesignServices size={28} color="#26abe1" />, text: "During this phase, each module and database design is completed, and your custom-developed software is deployed." },
  { title: "Testing", icon: <VscDebugAlt size={28} color="#26abe1" />, text: "Each module is thoroughly checked for errors or bugs and fixed accordingly." },
  { title: "Maintenance & support", icon: <MdSupportAgent size={28} color="#26abe1" />, text: "We provide ongoing support for the customized software throughout its tenure." },
];
export default function SoftwareProcessTimeline() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const ITEM_WIDTH = 300;
  const steps = originalSteps;

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -ITEM_WIDTH : ITEM_WIDTH,
      behavior: "smooth",
    });
  };

  // Disable buttons if at start or end
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 5 // margin of error
    );
  };

  useEffect(() => {
    checkButtons(); // initial state
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkButtons);
      return () => el.removeEventListener("scroll", checkButtons);
    }
  }, []);

  return (
    <section className={styles["software-process-timeline"]}>
      <h2>Our Software Development Process: Cutting-Edge Software Solutions</h2>
      <p className={styles["software-subtitle"]}>
        At Nakshatra Namaha Creations, our software development process is
        designed for efficiency, quality, and user satisfaction. We follow a
        structured approach to transform your ideas into fully functional
        software solutions.
      </p>

      <div className={styles["software-timeline-wrapper"]}>
        <button
          type="button"
          onClick={() => scroll("left")}
          className={styles["software-scroll-btn"]}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
        >
          &laquo;
        </button>

        <div
          className={styles["software-timeline-container"]}
          ref={scrollRef}
        >
          {steps.map((step, index) => (
            <div className={styles["software-timeline-card"]} key={index}>
              <div className={styles["software-icon-box"]}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          className={styles["software-scroll-btn"]}
          aria-label="Scroll right"
          disabled={!canScrollRight}
        >
          &raquo;
        </button>
      </div>
    </section>
  );
}
