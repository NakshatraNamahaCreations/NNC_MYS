"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./TestimonialsCarousel1.module.css";

const ITEMS = [
  {
    quote:
      "The ad films created by this corporate ad film production company elevated our brand presence and connected with customers.",
    name: "Mr. Ranjaneesh",
    role: "",
    avatar: "/images/man.png",
  },
  {
    quote:
      "Nakshatra Namaha Creations delivered our product launch ad film on time with stunning quality and attention to detail.",
    name: "Mr. Kamal M",
    role: "Chief Accounts & Finance Officer at Astute Group",
    avatar: "/images/man.png",
  },
    {
    quote:
      "Their creativity and professionalism turned our campaign idea into an impactful video that resonated with our audience",
    name: "Sowmya Kumari",
    role: "Head of Operations",
    avatar: "/images/woman.png",
  },
  {
    quote:
      "Working with their team was seamless; the entire process from concept to delivery was highly efficient.",
    name: "Ramanna M",
    role: "VP — Information Technologies & Infrastructure, Rebel Foods",
    avatar: "/images/man.png",
  },
  {
    quote:
      "Our recruitment ad film was clear, engaging, and helped us attract top talent quickly.”",
    name: "Ramya M",
    role: "Head of Operations",
    avatar: "/images/woman.png",
  },
    {
    quote:
      "The brand awareness ad film brought our story to life and helped us engage better with clients and investors.",
    name: "Geetha Kumari",
    role: "Head of Operations",
    avatar: "/images/woman.png",
  },
  
];

// group into slides of 2 (desktop), 1 (mobile via CSS)
const perSlide = 2;
const SLIDES = [];
for (let i = 0; i < ITEMS.length; i += perSlide) SLIDES.push(ITEMS.slice(i, i + perSlide));

export default function TestimonialsCarousel2() {
  const [idx, setIdx] = useState(0);
  const hover = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    const start = () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        if (!hover.current) setIdx((i) => (i + 1) % SLIDES.length);
      }, 4500);
    };
    start();
    return () => timer.current && clearInterval(timer.current);
  }, []);

  const go = (n) => setIdx((n + SLIDES.length) % SLIDES.length);

  return (
    <section className={s.section} aria-label="Client Testimonials">
        <h2 className="text-center my-4">What Our Clients Say</h2>
      <div className={s.shell}>
        <div className={s.topbar} aria-hidden="true" />

        <div
          className={s.panel}
          onMouseEnter={() => (hover.current = true)}
          onMouseLeave={() => (hover.current = false)}
          aria-roledescription="carousel"
        >
          {/* chevrons inside panel */}
          <button className={`${s.chev} ${s.left}`} aria-label="Previous" onClick={() => go(idx - 1)} type="button">
            ‹
          </button>
          <button className={`${s.chev} ${s.right}`} aria-label="Next" onClick={() => go(idx + 1)} type="button">
            ›
          </button>

          <div className={s.viewport}>
            <div className={s.track} style={{ transform: `translateX(-${idx * 100}%)` }}>
              {SLIDES.map((group, gi) => (
                <div className={s.slide} key={gi}>
                  {group.map((t, i) => (
                    <article className={s.card} key={i}>
                      <div className={s.avatarWrap}>
                        <Image src={t.avatar || "/avatars/placeholder.jpg"} alt="" width={60} height={60} className={s.avatar} />
                      </div>

                      <div className={s.qrow}>
                        <span className={s.qopen} aria-hidden="true">❝</span>
                        <blockquote className={s.quote}>
                          <em>{t.quote}</em>
                        </blockquote>
                        <span className={s.qclose} aria-hidden="true">❞</span>
                      </div>

                      <footer className={s.footer}>
                        <strong className={s.name}>{t.name}</strong>
                        {/* <span className={s.role}>{t.role}</span> */}
                      </footer>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.dots} role="tablist" aria-label="Testimonials pagination">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${s.dot} ${idx === i ? s.active : ""}`}
              onClick={() => go(i)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
