"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./TestimonialsCarousel1.module.css";

const ITEMS = [
  {
    quote:
      "We needed a creative 2D animation studio for our product demo, and the results were fantastic. The visuals were engaging, and the message was clear.",
    name: "Mr. Jayantrh Gopal",
    role: "",
    avatar: "/images/man.png",
  },
  {
    quote:
      "As an education startup, we wanted to simplify complex lessons. This 2D animation studio created animations that our students absolutely love",
    name: "Mr. Prajwal R",
    role: "Chief Accounts & Finance Officer at Astute Group",
    avatar: "/images/man.png",
  },
    {
    quote:
      "Our marketing campaigns have performed so much better since partnering with this 2D animation studio. Their explainer videos helped us connect with our audience in a meaningful way",
    name: "Ramesh R",
    role: "Head of Operations",
    avatar: "/images/woman.png",
  },
  {
    quote:
      "We were searching for a reliable 2D animation studio to develop training content for our employees. The final product was interactive, professional, and easy to follow",
    name: "Mukhtar Ansari",
    role: "VP — Information Technologies & Infrastructure, Rebel Foods",
    avatar: "/images/man.png",
  },
  {
    quote:
      "The branding animation we received was top-notch. This 2D animation studio brought our story to life and helped us make a strong impression on social media.”",
    name: "Reshma Sharma",
    role: "Head of Operations",
    avatar: "/images/woman.png",
  },
    {
    quote:
      "Working with this 2D animation studio was seamless. From concept to delivery, the team was professional, creative, and committed to quality”",
    name: "Bharath Deshpande",
    role: "Head of Operations",
    avatar: "/images/woman.png",
  },
  
];

// group into slides of 2 (desktop), 1 (mobile via CSS)
const perSlide = 2;
const SLIDES = [];
for (let i = 0; i < ITEMS.length; i += perSlide) SLIDES.push(ITEMS.slice(i, i + perSlide));

export default function TestimonialsCarousel1() {
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
