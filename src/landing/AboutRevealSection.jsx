"use client";

import { useEffect, useRef, useState } from "react";
import { FiPlay, FiTrendingUp } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

import styles from "./AboutRevealSection.module.css";
import Link from "next/link";

export default function AboutRevealSection() {
  const sectionRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowLeft(true);
        }
      },
      { threshold: 0.2 } // safer value
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        {/* LEFT VISUAL (animated) */}
        <div className={`${styles.left} ${showLeft ? styles.show : ""}`}>
          <div className={styles.imageFrame} />

          <img
            src="/images/tech/webdev2.jpg"
            alt="Web Development"
            className={styles.mainImage}
          />

          {/* <div className={styles.playIcon}>
            <FiPlay />
          </div> */}

          <div className={styles.floatingLabel}>
            <FiTrendingUp />
            <span>
              LIFT Your Business <br /> to the Next Level
            </span>
          </div>

          <div className={styles.experience}>
            <h3>10+</h3>
            <p>Years of Working Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT (ALWAYS VISIBLE) */}
        <div className={styles.right}>
          <span className={styles.kicker}>ABOUT US</span>

          <h2 className={styles.title}>
          Website Development Services Built for Business Growth

          </h2>

          <p className={styles.desc}>
          
          Nakshatra Namaha Creations is a professional website development company helping businesses build strong, high-performing websites that support real business growth. With 8+ years of experience in website development, we work with startups, service providers, and established companies to create digital platforms that are reliable, secure, and built to convert visitors into leads. Our focus is on delivering websites that load fast, function smoothly, and present brands with clarity and confidence.
             </p>
     <p className={styles.desc}>
        Every website development project follows a structured process that prioritizes user experience, clean code, and mobile-first performance. We develop websites that are easy to navigate, search-engine friendly, and designed to support marketing and lead generation efforts. From layout planning to final deployment, our website development approach ensures consistency, stability, and long-term scalability across devices and browsers.
        
          </p>

          {/* <button className={styles.btn}>Explore Now</button> */}
        </div>
      </div>
    </section>

    <section className={styles.section1}>
      <div className={styles.container1}>
        <h2 className={styles.mainTitle}>Website Development Solutions for Modern Businesses</h2>

        <div className={styles.grid}>
          {/* FOR LMS */}
          <div className={`${styles.card} ${styles.lms}`}>
            <h3 className={styles.cardTitle}>Business Website Development</h3>

            <p className={styles.desc}>
              We develop professional business websites that present your services clearly and build instant credibility. Our focus is on performance, usability, and lead-driven design that supports business growth.
            </p>

            <ul className={styles.list}>
              <li>
                <span className={styles.green}>SEO-friendly website structure</span> 
              </li>
              <li>
                <span className={styles.green}>Mobile-first and fast-loading pages</span> 
              </li>
             <li>
                <span className={styles.green}>Designed to generate enquiries and leads</span> 
              </li>
            </ul>

            <Link href="/contact-us" className={styles.cta}>
              Book Your Website Consultation <span><FiArrowRight /></span>
            </Link>
          </div>

          {/* FOR STARTUP */}
          <div className={`${styles.card} ${styles.startup}`}>
            <h3 className={styles.cardTitle}>Scalable Website Development Solutions</h3>

            <p className={styles.desc}>
              Our website development solutions are built to grow with your business. We create flexible platforms that allow easy expansion, feature upgrades, and performance improvements over time.
            </p>

            <ul className={styles.list}>
              <li>
                <span className={styles.blue}>Scalable architecture for long-term use</span> 
              </li>
              <li>
                <span className={styles.blue}>Clean and maintainable codebase</span> 
              </li>
              <li>
                <span className={styles.blue}>Easy integration with marketing tools</span> 
              </li>
            </ul>

            <Link href="/contact-us" className={styles.cta}>
              Get Your Free Consulting <span><FiArrowRight /></span>
            </Link>
          </div>

          {/* DEDICATED TEAM */}
          <div className={`${styles.card} ${styles.team}`}>
            <h3 className={styles.cardTitle}>Dedicated Website Development Support</h3>

            <p className={styles.desc}>
              We provide ongoing website development support to ensure stability, security, and consistent performance. Our team works as a reliable technical partner for continuous improvements.
            </p>

            <ul className={styles.list}>
              <li>
                <span className={styles.orange}>Regular updates and performance optimization</span> 
              </li>
              <li>
                <span className={styles.orange}>Secure and reliable website management</span> 
              </li>
              <li>
                <span className={styles.orange}>Long-term technical support and maintenance</span> 
              </li>
            </ul>

            <Link href="/contact-us" className={styles.cta}>
              Request a Free Project Discussion <span><FiArrowRight /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
      

    </>
  );
}
