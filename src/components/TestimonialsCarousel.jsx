"use client";

import Image from "next/image";
import Slider from "react-slick";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Director, EPCM",
    rating: 5,
    text:
      "Shree Green took us from concept to commissioning with zero scope drift. Their detailed engineering and day-wise micro-monitoring kept our timeline intact and risks under control.",
    avatar: "/images/man.png",
  },
  {
    name: "Ananya Iyer",
    role: "Plant Head",
    rating: 5,
    text:
      "Commissioning was flawless—interlock testing, simulations, and operator training were thorough. The handover package and SOPs made steady-state operations smooth from day one.",
    avatar: "/images/woman.png",
  },
  {
    name: "Michael Chen",
    role: "Procurement Lead",
    rating: 5,
    text:
      "Their vendor evaluation and expediting shortened our lead times without compromising quality. Transparent QA plans and after-sales coordination saved us real money.",
    avatar: "/images/man.png",
  },
  {
    name: "Priya Nair",
    role: "Construction Manager",
    rating: 5,
    text:
      "On-site supervision was rigorous—safety protocols, quality checks, and quick issue resolution. Resource allocation and reporting minimized rework and kept us on schedule.",
    avatar: "/images/woman.png",
  },
  {
    name: "Ahmed Khan",
    role: "Operations Manager",
    rating: 5,
    text:
      "Their piping layouts and E&I integration are maintenance-friendly and reliable. We’ve seen measurable efficiency gains with lower downtime after start-up.",
    avatar: "/images/man.png",
  },
  {
    name: "Julia Martins",
    role: "QA/QC Lead",
    rating: 5,
    text:
      "Comprehensive inspection and test plans at every stage. Documentation, traceability, and defect prevention practices were best-in-class.",
    avatar: "/images/man.png",
  },
  {
    name: "Suresh Reddy",
    role: "CFO",
    rating: 4,
    text:
      "Strong cost control—from TEFR assumptions to CAPEX/OPEX tracking. Their sensitivity analysis and progress reports supported faster, confident decisions.",
    avatar: "/images/man.png",
  },
  {
    name: "Meera Gupta",
    role: "Project Controls Lead",
    rating: 5,
    text:
      "Stakeholder bridging and weekly reviews kept everyone aligned. Data-driven dashboards made schedule risks visible early and helped us recover float.",
    avatar: "/images/woman.png",
  },
];

export default function TestimonialsCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const eyebrow = "OUR TESTIMONIALS";
  const title = "What they’re talking about\nour compan";
  const lines = title.split("\n");

  return (
    <section className={`${styles.testimonialsCarousel}`}>
      <div className="container">
        {/* Heading */}
        <div className={styles.testimonialsCarouselHead}>
          <span className={styles.testimonialsCarouselEyebrow}>{eyebrow}</span>
          <h2 className={styles.testimonialsCarouselTitle}>
            {lines.map((l, i) => (
              <span key={i}>
                {l}
                {i === 0 ? <br /> : null}
              </span>
            ))}
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialsCarouselSlide}>
              <article className={styles.testimonialsCarouselCard}>
                <header className={styles.testimonialsCarouselHeader}>
                  <div className={styles.testimonialsCarouselAvatarWrap}>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={96}
                      height={96}
                      className={styles.testimonialsCarouselAvatar}
                    />
                  </div>
                  <div className={styles.testimonialsCarouselMeta}>
                    <div className={styles.testimonialsCarouselStars}>
                      {"★".repeat(t.rating)}
                      <span className={styles.testimonialsCarouselMuted}>
                        {"★".repeat(5 - t.rating)}
                      </span>
                    </div>
                    <h4 className={styles.testimonialsCarouselName}>{t.name}</h4>
                    {/* <div className={styles.testimonialsCarouselRole}>{t.role}</div> */}
                  </div>
                </header>

                <div className={styles.testimonialsCarouselDivider}>
                  <span className={styles.testimonialsCarouselTick} />
                </div>

                <p className={styles.testimonialsCarouselText}>{t.text}</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
