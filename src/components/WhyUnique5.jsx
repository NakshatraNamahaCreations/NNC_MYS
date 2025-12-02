"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique5 = () => {
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
    title: "Requirement Gathering & Analysis",
    text: "Our first step is to grasp the aims of your business, comprehend the target market and understand the featured and the workflow of the technical part of the project. This obtains us a definite blueprint and solid strategy for the project."
  },
  {
    image: "/images/icons/online-analysis.png",
   title: "UI/UX Design",
    text: "The designers from our team come up with detailed wireframes alongside interactive prototypes for experiencing the journey of the user and the layout of the screen. The ultimate design is intended for the ease of use, brand consistency, and impeccable user experience."
  },
  {
    image: "/images/icons/landing-page.png",
     title: "Development",
    text: "Our Flutter developers build applications using clean code, a modular architecture, and reusable components, ensuring high velocity, strong performance, robust security, and seamless cross-platform compatibility throughout the development process."
  },
  {
    image: "/images/icons/ui.png",
     title: "Testing & Quality Assurance",
    text: "We perform various testing rounds for the utmost functioning of the app. Our QA specialists are the ones who verify each and every feature, locate the bugs, and upgrade the performance before the final handover."
  },
  {
    image: "/images/icons/online-analysis.png",
     title: "Deployment & Launch",
    text: "After getting the green light, we are responsible for the entire deployment work, thus, facilitating the launch which is in accordance with the rules of Play Store and App Store."
  },
  {
    image: "/images/icons/customer-service (2).png",
   title: "Ongoing Support & Maintenance",
    text: "After the release of the product, we continue to help and support your app by giving it regular updates, version changes, and new features so that it is always functioning at its best."
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

export default WhyUnique5;
