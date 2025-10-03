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
      title: "Explainer Videos",
      text: "As a 2D animation company that can be firmly relied upon, it is our goal to simplify complicated ideas by visualizing them in short, easily understandable, and engaging stories.",
    },
    {
      image: "/images/icons/quality.png",
      title: "Product Demos",
      text: "Our 2D animation company comes up with product demo videos of a professional standard which focus on your product's main characteristics and advantages in the most attractive way. Such demos make the buying process easy for customers and motivate them to act.",
    },
    {
       image: "/images/icons/education (1).png",
      title: "Educational Animations",
      text: "We are a 2D animation company with experience, knowledgeable in the field of education, and, thus, able to create educational content that encourages interaction and is user-friendly. Our videos are a perfect fit for e-learning platforms, schools, and corporate training, as they simplify the topics and engage learners of all ages.",
    },
    {
      image: "/images/icons/reputation (1).png",
      title: "Brand Storytelling",
      text: "Our 2D animation company aids brands in cultivating the emotional bond that matters with the audience via effective animated storytelling. By changing your brand's trip into an intriguing story, we allow customers to find it easier to identify with your vision and ideals.",
    },
    {
      image: "/images/icons/social-media (1).png",
      title: "Advertising & Marketing Animations",
      text: "It's important to differentiate yourself in the world of advertising. Our 2D animation company formulates attention-grabbing advertising and marketing animations that fuel the campaign, elevate audience engagement and generate conversions on various platforms.",
    },
    {
      image: "/images/icons/turtle.png",
      title: "Character Animation",
      text: "Characters are, most of the time, the driving force behind masterful storytelling. Our 2D animation company imagines and creates lovable and relatable animated characters that eventually become the face of your brand, the gateway through which your content is consumed, and the link that connects you to your audience on a deeper level.",
    },
  ];

  return (
    <section className={styles.whySection}>
      <div className="container text-center">
        <h2 className={styles.heading}>Our 2D Animation Services</h2>
        <br />
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
