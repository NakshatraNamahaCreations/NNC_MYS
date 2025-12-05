"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique8 = () => {
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
    image: "/images/icons/light-bulb.png",
    title: "Campaign Strategy & Planning",
    text: "We begin by understanding your business goals and target audience, then conduct thorough keyword research to identify the most effective search terms, and finally craft a custom Google Ads strategy that aligns with your overall marketing objectives."
  },
  {
    image: "/images/icons/social-media (1).png",  //s/light-bulb.png",
    title: "Ad Creation & Optimization",
    text: "We design compelling ad copy and creative assets that capture attention, implement A/B testing to identify the best-performing ads, and continuously optimize your campaigns to improve click-through rates and conversions."
  },
  {
     image: "/images/icons/growth-chart.png",
    title: "Budget Management",
    text: "We efficiently manage your ad spend to maximize ROI, adjust bids and budget allocation based on real-time performance data, and provide insights into where your budget is being used most effectively."
  },
  {
    image: "/images/icons/online-analysis.png",
    title: "Performance Tracking & Reporting",
    text: "We monitor key metrics such as CTR, conversion rates, and CPA, provide detailed reports with actionable insights, and regularly review campaign performance to make data-driven adjustments for continuous improvement."
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

export default WhyUnique8;
