"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import React, {  useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // SSR-safe in Next.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faLaptop,
  faMagnifyingGlass,
  faClock,
  faCircleInfo,
  faMobileAlt,
  faEnvelope,
  faPaintBrush,
  faLayerGroup,
  faLightbulb,
  faWrench,
  faShieldAlt,
  faUsers,
  faUserCog,
  faTools,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./OurProcessScroll.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcessScroll() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;

    // If either element isn't mounted yet, bail safely
    if (!wrapper || !container) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Helper: safe distance to scroll (guards against null and negatives)
    const getDistance = () => {
      const el = containerRef.current;
      if (!el) return 0;
      const vw = window.innerWidth || 0;
      return Math.max(0, el.scrollWidth - vw);
    };

    // Scope GSAP to this component
    const ctx = gsap.context(() => {
      const tween = gsap.to(container, {
        x: () => -getDistance(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: true,
        animation: tween,
        invalidateOnRefresh: true,
      });
    }, wrapperRef); // ensures cleanup on unmount

    // Refresh when the container size changes (images/fonts load, resize, etc.)
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(container);

    return () => {
      ro.disconnect();
      ctx.revert(); // kills tween + ScrollTriggers created in this context
    };
  }, []);

  return (
    <>
      <div className={styles["space-70vh"]} />
      <div className={styles["scroll-wrapper"]} ref={wrapperRef}>
        <div className={styles["scroll-container11"]} ref={containerRef}>
          {/* Standout panel */}
          <div className={`${styles["scroll-panel"]} ${styles["standout-panel"]}`}>
            <h2 className={styles["standout-title"]}>WHAT MAKES US STAND OUT</h2>
          </div>

          {/* Why choose us */}
          <div className={`${styles["scroll-panel"]} ${styles["panel-whyChoose"]}`}>
            <div className={styles["panel-content-split"]}>
              {/* Left */}
              <div className={styles["panel-left"]}>
                <h2 className={styles["digital-heading"]}>Why Choose Us</h2>
                <p className={styles["intro-text"]}>
                  Experience unparalleled Mobile App and Website Development Services that combine
                  both Creativity and Technical expertise or making your vision a reality.
                </p>
                <div className={styles["mission-vision-wrapper"]}>
                  <div className={styles["mission"]}>
                    <h3>Our Mission</h3>
                    <p>
                      Our Mission is to help businesses succeed by providing exceptional website
                      design and mobile app development services tailored to your business needs,
                      ensuring high-quality results.
                    </p>
                  </div>
                  <div className={styles["vision"]}>
                    <h3>Our Vision</h3>
                    <p>
                      Our Vision is to become the top choice for businesses seeking success in the
                      digital world. Known for our creativity, innovation, and high-quality work, we
                      aim to be recognized as the best website and mobile app developers in
                      Bangalore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right stats */}
              <div className={styles["panel-right"]}>
                <div className={styles["stat-box"]}>
                  <div className={styles["circle12"]}>8+</div>
                  <div>
                    <h4>Years of experience</h4>
                    <p>We've spent 8+ years mastering the art of web development and design.</p>
                  </div>
                </div>
                <div className={styles["stat-box"]}>
                  <div className={styles["circle12"]}>800 +</div>
                  <div>
                    <h4>Project Completed</h4>
                    <p>With over 800+ successful projects for different clients.</p>
                  </div>
                </div>
                <div className={styles["stat-box"]}>
                  <div className={styles["circle12"]}>895+</div>
                  <div>
                    <h4>Activated Clients</h4>
                    <p>895+ clients have already partnered with us, who rely on us for digital success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company highlight */}
          <div className={`${styles["scroll-panel"]} ${styles["company-highlight-panel"]}`}>
            <div className={styles["panel-inner-layout"]} style={{marginTop:"50px"}}>
              <div className={styles["panel-text-content"]}>
                <h1>Best Website Development Company in Mysore</h1>
                <p>
                  Nakshatra Namaha Creations is a leader in delivering innovative and dynamic web
                  solutions, offering services such as Website Development, Mobile App Development,
                  Graphic Design, Animation, Corporate Video Production, Digital Marketing, and B2B
                  Marketing Services.
              <br />
                  As the best website design company in Mysore, we create visually stunning and
                  functional websites tailored to engage your target audience effectively.
               <br />
                  Known for being the best website development company in Mysore, we provide
                  high-performance corporate websites, e-commerce platforms, and custom web
                  solutions designed to deliver a seamless user experience.
                <br />
                  Moreover, as the best mobile app development company in Mysore, we craft
                  cutting-edge mobile applications that are scalable, user-friendly, and aligned
                  with your business goals.
                </p>
              </div>

              <div className={styles["panel-image-wrapper"]}>
                <img
                  src="/images/best1.jpg"
                  alt="Web Development Mysore"
                  className={styles["responsive-panel-image"]}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Why your business needs a website */}
          <div className={`${styles["scroll-panel"]} ${styles["why-choose-wrapper"]}`}>
            <h2 className={styles["why-choose-heading"]}>
              Why Your Business Needs a Website in 2025
            </h2>
            <div className={styles["why-choose-grid"]}>
              <div className={styles["why-choose-item"]}>
                <FontAwesomeIcon icon={faLaptop} className={styles["icon"]} />
                <h4>92%</h4>
                <p>Consider easy navigation as crucial for a good website experience.</p>
              </div>

              <div className={styles["why-choose-item"]}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["icon"]} />
                <h4>72%</h4>
                <p>Prefer researching businesses online before making contact.</p>
              </div>

              <div className={styles["why-choose-item"]}>
                <FontAwesomeIcon icon={faClock} className={styles["icon"]} />
                <h4>66%</h4>
                <p>Will leave a website if it takes more than 3 seconds to load.</p>
              </div>

              <div className={styles["why-choose-item"]}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles["icon"]} />
                <h4>80%</h4>
                <p>Expect businesses to have an updated and informative website.</p>
              </div>

              <div className={styles["why-choose-item"]}>
                <FontAwesomeIcon icon={faMobileAlt} className={styles["icon"]} />
                <h4>69%</h4>
                <p>Are more likely to engage with mobile-optimized websites.</p>
              </div>

              <div className={styles["why-choose-item"]}>
                <FontAwesomeIcon icon={faEnvelope} className={styles["icon"]} />
                <h4>55%</h4>
                <p>Prefer contacting businesses through their websites.</p>
              </div>
            </div>
          </div>

          {/* Our process */}
          <div className={`${styles["scroll-panel"]} ${styles["panel-ourProcess"]}`}>
            <div className={styles["panel-content"]}>
              <h2 className={styles["section-title1"]}>Our Process</h2>

              <div className={styles["process-grid11"]}>
                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faPaintBrush} className={styles["icon"]} />
                  <h4>Custom Designs</h4>
                  <p>Unique visuals to engage audiences</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faLayerGroup} className={styles["icon"]} />
                  <h4>Scalable Framework</h4>
                  <p>Structured for future growth</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faLightbulb} className={styles["icon"]} />
                  <h4>Innovative Solutions</h4>
                  <p>Creative approaches to every project</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faWrench} className={styles["icon"]} />
                  <h4>Latest Technology</h4>
                  <p>Modern tools and platforms used</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faShieldAlt} className={styles["icon"]} />
                  <h4>Advanced Protection</h4>
                  <p>Comprehensive cybersecurity measures</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faUsers} className={styles["icon"]} />
                  <h4>User-Centric Design</h4>
                  <p>Prioritizing ease for end-users</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faUserCog} className={styles["icon"]} />
                  <h4>Dedicated Team</h4>
                  <p>Skilled experts for your success</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faTools} className={styles["icon"]} />
                  <h4>Maintenance Support</h4>
                  <p>Ongoing reliability for performance</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faClock} className={styles["icon"]} />
                  <h4>Timely Delivery</h4>
                  <p>Meeting deadlines with precision</p>
                </div>

                <div className={styles["process-card11"]}>
                  <FontAwesomeIcon icon={faSmile} className={styles["icon"]} />
                  <h4>Client Satisfaction</h4>
                  <p>Going beyond expectations</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`${styles["scroll-panel"]} ${styles["panel-cta"]}`}>
            <div className={styles["cta-content11"]}>
              <p className={styles["cta-subtitle11"]}>Ready to elevate your digital presence?</p>
              <h2 className={styles["cta-heading11"]}>
                LET’S BUILD YOUR NEXT
                <br />
                BIG IDEA TOGETHER
              </h2>
              <Link href="/contact-us" className={styles["get-in-touch-link"]}>
                <div className={styles["cta-button11"]}>
                  <span>
                    Get in Touch <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className={styles["space-100vh"]} />
      <br /><br />
    </>
  );
}
