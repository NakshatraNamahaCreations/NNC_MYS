"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./BlogsWhite.module.css";
import { motion } from "framer-motion";

type Blog = {
  title: string;
  href: string;
  img: string;
};

const BLOGS: Blog[] = [
  {
    title: "How a Well-Designed Website Can Help Businesses Stand Out",
    href: "/blogs/well-designed-website-benefits",
    img: "/images/blog.webp",
  },
  {
    title: "How 2D Animation Can Simplify Sales Communication",
    href: "/blogs/2d-animation-sales-communication",
    img: "/images/blog6.webp",
  },
  {
    title: "How Custom Website Development Can Drive Growth",
    href: "/blogs/custom-website-development-growth",
    img: "/images/blog1.webp",
  },
  {
    title: "How Website Speed Optimization Impacts Conversion",
    href: "/blogs/how-website-speed-optimization-impacts-conversion",
    img: "/images/blog3.webp",
  },
  {
    title: "The Role of Mobile Apps in Business Operations",
    href: "/blogs/role-of-mobile-apps-in-business",
    img: "/images/blog4.webp",
  },
];

export default function BlogsWhite() {
  const featureRef = useRef<Slider>(null);
  const listRef = useRef<Slider>(null);

  // External control helpers
  const prev = () => {
    featureRef.current?.slickPrev();
    listRef.current?.slickPrev();
  };
  const next = () => {
    featureRef.current?.slickNext();
    listRef.current?.slickNext();
  };

  // No built-in arrows; we'll use external ones
  const featuredSettings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    fade: true,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    asNavFor: listRef.current ?? undefined,
  };

  const listSettings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    asNavFor: featureRef.current ?? undefined,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.section}>
      <div className="container py-5">
        <motion.div
          className="row mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12">
            <h2 className="fw-bold text-dark">Blogs</h2>
          </div>
        </motion.div>

        <div className="row g-4 align-items-stretch">
          {/* Left featured slider */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Slider {...featuredSettings} ref={featureRef} asNavFor={listRef.current ?? undefined}>
              {BLOGS.map((b) => (
                <div key={b.href}>
                  <Link
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className={styles.featureCard}>
                      <motion.img
                        src={b.img}
                        alt={b.title}
                        className="img-fluid rounded"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />
                      <div className={styles.caption}>
                        <p className="fw-semibold text-white mb-0">{b.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Right list slider + external arrows bar */}
          <motion.div
            className="col-lg-7 position-relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Slider {...listSettings} ref={listRef} asNavFor={featureRef.current ?? undefined}>
              {BLOGS.map((b) => (
                <div key={`list-${b.href}`}>
                  <Link
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className={styles.listCard}>
                      <motion.img
                        src={b.img}
                        alt={b.title}
                        className="img-fluid rounded mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                      <p className="fw-medium text-dark mb-0">{b.title}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>

            {/* Arrow bar (bottom-right, like your screenshot) */}
            <div className={styles.controlsWrap}>
              <motion.button
                type="button"
                aria-label="Previous"
                className={`${styles.ctrlBtn} btn btn-outline-dark`}
                onClick={prev}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
              >
                {/* left chevron icon */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>

              <motion.button
                type="button"
                aria-label="Next"
                className={`${styles.ctrlBtn} btn btn-outline-dark`}
                onClick={next}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
              >
                {/* right chevron icon */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
