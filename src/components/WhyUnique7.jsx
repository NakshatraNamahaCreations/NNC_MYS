"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique7 = () => {
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
    title: "Massive Reach",
    text: "Extremely popular major platforms already have billions of active users, and hence your audience is there."
  },
  {
    image: "/images/icons/social-media (1).png",  //
    title: "Cost-Effective Advertising",
    text: "Put on air hyper-targeted ads that have high-ROI and measurable outcomes."
  },
  {
     image: "/images/icons/ux.png",
    title: "Real-Time Engagement",
    text: "Follow up quickly with your fans, customers, and prospects."
  },
  {
    image: "/images/icons/landing-page.png",
    title: "Brand Awareness & Trust",
    text: "Help the brand to gain exposure, credibility and become the first to come to customer's minds."
  },
  {
    image: "/images/icons/online-analysis.png",
    title: "Insightful Analytics",
    text: "Get access to detailed insights which helps you to change and improve your marketing plan."
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

export default WhyUnique7;
