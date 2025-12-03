"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique6 = () => {
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
    title: "Custom iOS App Development",
    text: "We build fully customized iOS apps that are based on your one-of-a-kind business objectives. Our iOS App Development Company is responsible for providing a seamless experience from concept to deployment."
  },
  {
    image: "/images/icons/online-analysis.png",
    title: "iOS Web-Based App Development",
    text: "Should there be a need to simplily the internal operations or to enhance the flow of work, we will produce high-performing web-based apps for iOS that are tailored to your requirements."
  },
  {
     image: "/images/icons/ui.png",
    title: "iOS UI/UX Design",
    text: "Our design team centers their efforts on the creation of visually attractive, user-friendly and responsive interfaces. By the use of Apple's Human Interface Guidelines, we come up with design ideas that are the most suitable for the platform and that users will naturally gravitate towards."
  },
  {
    image: "/images/icons/landing-page.png",
    title: "iOS App Porting Services",
    text: "Plan to transform your Android app into iOS or the other way round? Our iOS App Development Company is the one that can port you over the bridge while ensuring that your app continues to function properly and performs well."
  },
  {
    image: "/images/icons/online-analysis.png",
    title: "iOS App Testing & QA",
    text: "We deliver complete testing services for the entire duration of the project, in order to bring about the right balance of performance, compatibility, security, and user experience in your app."
  },
  {
    image: "/images/icons/customer-service (2).png",
    title: "iOS App Consultation",
    text: "If you are not sure of the first step, our consultants can provide you with the necessary guidance regarding technologies, features, budgets, timelines, and development strategies - thus making it easier for you to translate your ideas into feasible plans."
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

export default WhyUnique6;
