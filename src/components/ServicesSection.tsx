"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  img: string;
  bg: string;
};

const SERVICES: Service[] = [
  {
    title: "Mobile App Development",
    desc:
      "Extensively researched mobile app development company for Android, iOS and wearable technology.",
    img: "/images/mobile-phone.png",
    bg: "#C5E7FF",
  },
  {
    title: "Web Design",
    desc:
      "Engaging website and web app development using PHP, .Net, Java and other latest technologies.",
    img: "/images/online-store.png",
    bg: "#D3FEE8",
  },
  {
    title: "Cross Platform",
    desc: "Industry-based apps compatible with multiple mobile operating systems.",
    img: "/images/crossplat.png",
    bg: "#FFDAD8",
  },
  {
    title: "Framework Development",
    desc:
      "High-profile, affordable e-commerce services using CodeIgniter, Laravel, etc.",
    img: "/images/native.png",
    bg: "#E6D7FF",
  },
  {
    title: "Search Engine Optimization",
    desc:
      "SEO that moves from obscurity to impact, giving you a real advantage.",
    img: "/images/cms.png",
    bg: "#EFFFB9",
  },
  {
    title: "Front End Designing",
    desc:
      "Optimized responsive designs tailored to devices and performance.",
    img: "/images/app-development.png",
    bg: "#D3D5FE",
  },
];

export default function ServicesSection() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const node = e.target as HTMLElement;
            const delay = Number(node.dataset.delay || 0);
            setTimeout(() => node.classList.add(styles.show), delay);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.16 }
    );

    // Observe all reveal targets (using a global attribute selector from CSS)
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className={`${styles.section} py-5`}>
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left copy */}
          <div className="col-md-4" data-reveal="up" data-delay="0">
            <h3 className={`${styles.title} mb-3`}>Our Services</h3>
            <p className={`${styles.lead} mb-4`}>
              Mobile app development is a crucial aspect of your business, and
              we want to make sure that you get the best experience possible.
              Our team has experience in both mobile app development and web
              application, so we can offer you a wide range of services for all
              of your needs. We target your audience with mobile app development
              solutions and web solutions for increased engagement.
            </p>
          <Link href="/contact-us" className="btn btn-light fw-bold shadow-sm px-4 py-2 rounded-3">
  Request A Free Quote
</Link>
          </div>

          {/* Right grid */}
          <div className="col-md-8">
            <div className="row g-4">
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className="col-sm-6 col-lg-4"
                  data-reveal="up"
                  data-delay={i * 60}
                >
                  <div className={styles.card} style={{ background: s.bg }}>
                    <div className={styles.iconWrap} aria-hidden>
                      <Image
                        src={s.img}
                        alt=""
                        width={44}
                        height={44}
                        className="img-fluid"
                      />
                    </div>
                    <h4 className={styles.cardTitle}>{s.title}</h4>
                    <p className={styles.cardCopy}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
