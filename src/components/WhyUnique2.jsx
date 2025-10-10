"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique2 = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 320; // card width + gap

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const features = [
 {
  image: "/images/icons/ui.png",
  title: "UI/UX Website Design",
  text: "We create visually stunning and user-friendly website layouts focused on improving the customer experience and interaction across all devices.",
},
{
  image: "/images/icons/shopping.png",
  title: "E-Commerce Website Design",
  text: "Our e-commerce web designs help businesses build intuitive, conversion-driven stores with secure checkout, smart navigation, and engaging visuals.",
},
{
  image: "/images/icons/landing-page.png",
  title: "Responsive Web Design",
  text: "We design fully responsive websites that adapt perfectly to desktops, tablets, and mobiles—ensuring smooth performance and accessibility everywhere.",
},
{
  image: "/images/icons/growth-chart.png",
  title: "Corporate Website Design",
  text: "We craft professional corporate websites that reflect your brand identity, core values, and services while maintaining modern aesthetics and structure.",
},
{
  image: "/images/icons/frontend.png",
  title: "Landing Page Design",
  text: "Our landing pages are built to convert—using clean visuals, persuasive copy, and optimized calls-to-action for campaigns and lead generation.",
},
{
  image: "/images/icons/online-analysis.png",
  title: "Website Redesign Services",
  text: "We revamp outdated websites with modern layouts, improved navigation, and optimized visuals to deliver a fresh and high-performing web presence.",
},
{
  image: "/images/icons/web.png",
  title: "CMS & WordPress Design",
  text: "Our team builds powerful, easy-to-manage CMS and WordPress sites that give you full control over your content and scalability for future growth.",
},

  ];

  return (
    <section className={styles.whySection}>
      <div className="container text-center">
        {/* <h2 className={styles.heading}>Our 2D Animation Services</h2>
        <br /> */}
        <div className={styles.sliderWrapper}>
          <div className={styles.slider} ref={sliderRef}>
            {features.map((f, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={70}
                    height={70}
                    className={styles.cardImage}
                  />
                  
                </div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav Buttons */}
        <div className={styles.navBtns}>
          <button
            className={styles.navBtn}
            onClick={() => handleScroll("prev")}
            aria-label="Previous"
          >
            <FaArrowCircleLeft size={32} color="#fff"/>
          </button>
          <button
            className={styles.navBtn}
            onClick={() => handleScroll("next")}
            aria-label="Next"
          >
            <FaArrowCircleRight size={32} color="#fff"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUnique2;
