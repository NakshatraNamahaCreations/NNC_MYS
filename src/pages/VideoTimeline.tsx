// src/pages/VideoTimeline.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import styles from './VideoTimeline.module.css';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { LuBrainCircuit, LuPuzzle, LuPencilLine, LuCamera, LuScissorsLineDashed } from 'react-icons/lu';

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const originalSteps: Step[] = [
  {
    icon: <HiOutlineCheckCircle size={30} color="#4f46e5" />,
    title: 'Final Review and Delivery',
    description: 'Ensure the video aligns with your vision before delivering the final product.',
  },
  {
    icon: <LuBrainCircuit size={30} color="#4f46e5" />,
    title: 'Understanding Your Goals',
    description: 'We begin by discussing your ideas and objectives in detail.',
  },
  {
    icon: <LuPuzzle size={30} color="#4f46e5" />,
    title: 'Concept Development',
    description: 'Crafting a clear concept that aligns with your business vision.',
  },
  {
    icon: <LuPencilLine size={30} color="#4f46e5" />,
    title: 'Scriptwriting',
    description: 'Writing compelling scripts to convey your message effectively.',
  },
  {
    icon: <LuCamera size={30} color="#4f46e5" />,
    title: 'High-Quality Filming',
    description: 'Capturing stunning visuals using modern equipment and expert techniques.',
  },
  {
    icon: <LuScissorsLineDashed size={30} color="#4f46e5" />,
    title: 'Professional Editing',
    description: 'Refining footage to create seamless and engaging final videos.',
  },
];

export default function VideoTimeline() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ITEM_WIDTH = 300;

  const steps = [...originalSteps, ...originalSteps, ...originalSteps];

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollLeft = originalSteps.length * ITEM_WIDTH;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = ITEM_WIDTH * steps.length;
    const middle = originalSteps.length * ITEM_WIDTH;

    container.scrollBy({
      left: direction === 'left' ? -ITEM_WIDTH : ITEM_WIDTH,
      behavior: 'smooth',
    });

    window.setTimeout(() => {
      if (container.scrollLeft <= ITEM_WIDTH) {
        container.scrollLeft = middle;
      } else if (container.scrollLeft >= maxScroll - ITEM_WIDTH * 2) {
        container.scrollLeft = middle;
      }
    }, 600);
  };

  return (
    <section className={styles['videoTimeWrapper']}>
      <h2>Our Corporate Video Production Process: Your Story, Our Expertise</h2>
      <p className={styles['videoTime-subtitle']}>
        Creating impactful corporate videos involves a streamlined approach that focuses on quality and creativity. Here's how we ensure your vision comes to life:
      </p>

      <div className={styles['videoTime-wrapper']}>
        <button onClick={() => scroll('left')} className={styles['videoTime-scroll-btn']}>&#8592;</button>

        <div className={styles['videoTime-container']} ref={scrollRef}>
          {steps.map((step, index) => (
            <div className={styles['videoTime-card']} key={index}>
              <div className={styles['videoTime-icon']}>{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} className={styles['videoTime-scroll-btn']}>&#8594;</button>
      </div>
    </section>
  );
}
