"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique3 = () => {
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
    image: "/images/icons/growth-chart.png",
    title: "Business Website Design",
    text: "We build modern business websites that enhance your brand image, engage visitors, and support your core services with a clean, professional layout."
  },
  {
    image: "/images/icons/online-analysis.png",
    title: "Corporate Website Redesign",
    text: "We transform outdated corporate websites into modern, high-performing platforms with improved structure, refined visuals, and enhanced user experience."
  },
  {
    image: "/images/icons/landing-page.png",
    title: "Landing Page Creation",
    text: "We design focused, conversion-driven landing pages that highlight your offer, build trust, and capture quality leads efficiently."
  },
  {
    image: "/images/icons/ui.png",
    title: "Responsive Mobile Website Development",
    text: "Your website will adapt seamlessly to mobiles, tablets, and desktops—ensuring smooth performance, fast loading, and improved user experience across devices."
  },
  {
    image: "/images/icons/online-analysis.png",
    title: "Performance Optimization",
    text: "We fine-tune your website for speed, stability, and faster loading times, making sure it performs well even under high traffic."
  },
  {
    image: "/images/icons/ux.png",
    title: "Business-Focused UI/UX",
    text: "Our UI/UX approach focuses on clean visuals, easy navigation, and a structured experience that guides users toward your business goals."
  },
  {
    image: "/images/icons/search-engine-optimization.png",
    title: "SEO-Ready Website Structures",
    text: "We build websites with proper SEO foundations—clean URLs, schema structure, optimized headings, and search-friendly layouts."
  },
  {
    image: "/images/icons/frontend.png",
    title: "Fast-Loading Pages",
    text: "We optimize every part of your website to load quickly, reduce bounce rate, and improve both user satisfaction and search engine performance."
  },
  {
    image: "/images/icons/landing-page.png",
    title: "Conversion-Driven Layouts",
    text: "Our layouts guide users with smart visual hierarchy, clear CTAs, and persuasive design elements that increase conversions and customer actions."
  },
  {
    image: "/images/icons/web.png",
    title: "CMS Setup (WordPress / Shopify / Custom)",
    text: "We configure and develop CMS platforms that allow you to easily manage your content, products, and website growth with complete flexibility."
  }
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

export default WhyUnique3;
