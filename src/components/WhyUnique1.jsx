"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // flat arrow icons
import styles from "./WhyUnique.module.css";

const WhyUnique = () => {
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
      image: "/images/icons/multimedia (1).png",
      title: "Brand Awareness Ad Films",
      text: "Our corporate ad film production company facilitates the dissemination of the brand's journey, values, and purpose through the creation of appealing visual stories.",
    },
    {
      image: "/images/icons/quality.png",
      title: "Product Launch Ad Films",
      text: "Being a top corporate ad film production company, we produce attractive launch films that create a buzz and clearly show the new features.",
    },
    {
       image: "/images/icons/education (1).png",
      title: "Event Ad Films",
      text: "Our corporate ad film production company makes high-quality ad films that effectively advertise conferences, exhibitions, and product showcases.",
    },
    {
      image: "/images/icons/csr (1).png",
      title: "CSR Ad Films",
      text: "We are a corporate ad film production company that showcases your organization's community contributions and social initiatives.",
    },
    {
      image: "/images/icons/social-media (1).png",
      title: "Recruitment & Training Ad Films",
      text: "Our corporate ad film production company creates easy and interesting films that motivate employee engagement and simplify communication.",
    },
    {
      image: "/images/icons/banner.png",
      title: "Digital Campaign Ad Films",
      text: "Being a corporate ad film production company with a lot of experience, we produce short and powerful videos that are suitable for social media platforms to encourage the audience.",
    },
     {
      image: "/images/icons/advertising.png",
      title: "Explainer Ad Films",
      text: "Our corporate ad film production company breaks down the complex ideas with the help of the production of clear, visually engaging, and informative explainer ad films.",
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

export default WhyUnique;
