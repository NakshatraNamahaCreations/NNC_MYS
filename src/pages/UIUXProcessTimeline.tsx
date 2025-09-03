'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './UIUXProcessTimeline.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { GiCompass } from 'react-icons/gi';
import { MdRocketLaunch, MdDesignServices } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

type Step = { title: string; icon: React.ReactNode; text: string };

const originalSteps: Step[] = [
  { title: 'User Research', icon: <HiUserGroup size={28} color="#26abe1" />,
    text: 'Research is crucial in creating any design. Whether it’s user interface or user experience, understanding what users think about your product is essential. Thorough research provides a strong foundation for developing a clean and effective design.' },
  { title: 'Crafting Strategy', icon: <GiCompass size={28} color="#26abe1" />,
    text: 'Once the foundation for the design is set, the next step is strategy. This involves determining the best course of action, assessing risks, objectives, and the quality of content that will engage users effectively.' },
  { title: 'Designing', icon: <MdDesignServices size={28} color="#26abe1" />,
    text: 'We prioritize our client’s needs, which is why we go through multiple redesigning phases to deliver the desired results.' },
  { title: 'Development', icon: <FaCode size={28} color="#26abe1" />,
    text: 'We have a dedicated team that brings ideas to life through effective implementation. Our development team ensures that all code written for the design adheres to industry standards.' },
  { title: 'Launch & Support', icon: <MdRocketLaunch size={28} color="#26abe1" />,
    text: 'We launch your project and continue to support it, ensuring optimal performance, usability, and long-term success.' },
];

export default function UIUXProcessTimeline() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ITEM_WIDTH = 300; // keep in sync with CSS card width + gap
  const steps = originalSteps;

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons, { passive: true });
    return () => el.removeEventListener('scroll', updateButtons);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -ITEM_WIDTH : ITEM_WIDTH, behavior: 'smooth' });
  };

  return (
    <section className={styles['uiux-timeline-section']}>
      <h2>Our UI/UX Design Process: From Concept to Experience</h2>
      <p className={styles['uiux-subtitle']}>
        Building a remarkable website starts with understanding your vision and crafting a solution
        tailored to your needs. As the leading website development company in Mysore, our process
        ensures a smooth journey through every phase, resulting in a strong online presence.
      </p>

      <div className={styles['uiux-timeline-wrapper']}>
        <button
          onClick={() => scroll('left')}
          className={styles['uiux-scroll-btn']}
          aria-label="Scroll left"
          disabled={!canLeft}
        >
          &laquo;
        </button>

        <div className={styles['uiux-timeline-container']} ref={scrollRef}>
          {steps.map((step, index) => (
            <div className={styles['uiux-timeline-card']} key={index}>
              <div className={styles['uiux-icon-box']}>{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className={styles['uiux-scroll-btn']}
          aria-label="Scroll right"
          disabled={!canRight}
        >
          &raquo;
        </button>
      </div>
    </section>
  );
}
