"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique4 = () => {
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
    title: "Requirement Analysis",
    text: "The initial step for us is analyzing and comprehending your brand, content layout, publishing requirements, and future plans. Such a basis allows us to come up with the most suitable CMS Development Service for you."
  },
  {
    image: "/images/icons/online-analysis.png",
  title: "Technology Selection",
    text: "We decide on the best instruments and technologies for your CMS Development Service with regard to performance, scalability, and security. These might be headless CMS platforms or even custom-built frameworks"
    },
  {
    image: "/images/icons/landing-page.png",
   title: "Custom Development",
    text: "Our crew puts together a secure back-end, well-planned APIs, and adaptable modules that allow multi-channel experiences to be at the core of our CMS Development Service."
    },
  {
    image: "/images/icons/ui.png",
    title: "Front-End Integration",
    text: "By matching your CMS with the present-day UI frameworks, we create spotless user-experiences. This means that the CMS Development Service is capable of consistent and quick content delivery on all devices."
    },
  {
    image: "/images/icons/online-analysis.png",
    title: "Testing and Optimization",
    text: "Testing, optimization, and security checks are some of the rigorous measures taken by every CMS Development Service before their deployment."
    },
  {
    image: "/images/icons/ux.png",
   title: "Deployment and Support",
    text: "The place may be secure but it does not mean that one can stop monitoring. As a part of our prolonged CMS Development Service and maintenance package, we install your CMS in safe hosting environments and offer ongoing surveillance."
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

export default WhyUnique4;
