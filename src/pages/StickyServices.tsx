"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./StickyServices.module.css"; // CSS Module

gsap.registerPlugin(ScrollTrigger);

type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  {
    title: "WordPress Website Development",
    desc:
      "As a best WordPress Website Development​ Company in Mysore, we design visually appealing, user-friendly websites with a focus on clean layouts and responsive visuals. Our designs ensure a seamless user experience, with attention to visual consistency and professional aesthetics. We prioritize fast load times, SEO optimization and scalable performance, ensuring your site is secure, mobile-responsive and delivers exceptional results across all devices.",
    img: "/images/may4.webp",
  },
  {
    title: "React JS Website Development",
    desc:
      "As a React JS Website Development Company in Mysore, we create visually appealing, custom web designs with a user-friendly interface and responsive layouts. Our focus on high performance ensures fast load times with lightweight code, minified CSS and JavaScript and PageSpeed optimization. Additionally, we optimize for both mobile and SEO, ensuring your website delivers a seamless experience and performs well across all devices.",
    img: "/images/react11.jpg",
  },
  {
    title: "Ecommerce Website Development",
    desc:
      "As an Ecommerce Website Development Company in Mysore, we build visually appealing, user-friendly platforms designed for seamless shopping experiences. Our responsive designs adapt to all devices, ensuring a consistent look and feel. We prioritize performance, optimizing for fast loading times and reliable functionality to enhance user satisfaction and boost conversions. Each project reflects modern aesthetics, intuitive navigation and smooth operation, driving results for your business.",
    img: "/images/ecom.jpg",
  },
  {
    title: "Node JS Website Development",
    desc:
      "As a Node JS Website Development Company in Mysore, we build websites with a user-friendly interface and custom web design focused on high performance and fast load times using lightweight code. Our development includes minified CSS and JavaScript for efficiency and an SEO-friendly structure to boost search visibility. With mobile optimization and PageSpeed optimization, we ensure a seamless experience across all devices.",
    img: "/images/nodejs1.jpg",
  },
];

type ScrollCardProps = { service: Service; index: number };

function ScrollCard({ service, index }: ScrollCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1, y: 0 },
        {
          scale: 0.8,
          y: -100,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card text-white ${styles["card"]}`}
      style={{ zIndex: index + 1 }}
    >
      <img src={service.img} className="card-img" alt={service.title} />
      <div className={`card-img-overlay bg-dark bg-opacity-50 rounded p-3 ${styles["card-img-overlay"]}`}>
        <h5 className="card-title" style={{fontSize:"1.7rem"}}>{service.title}</h5>
        <p className={styles["card-text11"]}>{service.desc}</p>
      </div>
    </div>
  );
}

const StickyServices: React.FC = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["sticky-services-inner"]}>
        {/* LEFT SIDE TEXT */}
        <div className={styles["left-content"]}>
          <h2 className={styles["digital-heading"]}>Our Website Development Services</h2>
          <p>
            Nakshatra Namaha Creations is a leading website development and design company in Mysore.
            We craft custom, SEO-friendly, and mobile-optimized websites that deliver fast performance and seamless user experience.
          </p>

          <div className={`row ${styles["custom-row"]}`}>
            {services.map((service, index) => (
              <div key={index} className={styles["col-md-61"]}>
                <h4 className={styles["underline1"]}>
                  {service.title} <i className="fa-solid fa-arrow-right"></i>
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE ANIMATED CARDS */}
        <div className={styles["right-images"]}>
          {services
            .slice(1)
            .reverse()
            .map((service, index) => (
              <ScrollCard key={index} service={service} index={index} />
            ))}
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default StickyServices;
