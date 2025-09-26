"use client";

import Image from "next/image";
import styles from "./WebDesignServices.module.css";

type Feature = {
  icon: string;
  title: string;
  desc: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    icon: "/images/idea (1).png",
    title: "Innovative Designers",
    desc: "At Nakshatra Namaha Creations, our talented design team merges strategy, creativity, and technology to deliver visually compelling and effective designs. As the best website development company in Mysore, we craft industry-specific web designs that not only enhance user engagement but also drive business growth. Additionally, recognized as the best mobile app development company in Mysore, we bring expertise and innovation to create mobile applications that perfectly complement your digital presence.",
    accent: "#09c2a3",
  },
  {
    icon: "/images/responsive-design.png",
    title: "UI/UX Experts",
    desc: "Our UI/UX designers are dedicated to creating seamless and intuitive experiences for users. As the best website design company in Mysore, we focus on crafting layouts, color schemes, typography, and icons that enhance user interaction and satisfaction. Recognized as the best website development company in Mysore, we ensure every visual and functional element works harmoniously to deliver an exceptional experience across digital platforms.",
    accent: "#c99a14",
  },
  {
    icon: "/images/web.png",
    title: "Development Specialists",
    desc: "Our skilled developers collaborate closely with clients to analyze needs, code efficiently, and deliver outstanding results. Recognized as the best mobile app development company in Mysore, we leverage deep technical knowledge to build innovative applications that meet the highest industry standards. Additionally, as the best website development company in Mysore, we ensure every solution is designed to align with client goals while maintaining superior quality and performance.",
    accent: "#4a8ec4",
  },
  {
    icon: "/images/mobile (1).png",
    title: "Web Development Team",
    desc: "Our experienced web development team focuses on turning your business vision into reality. As the best website design company in Mysore, we pay meticulous attention to every detail, ensuring visually appealing and user-friendly designs. Recognized as the best website development company in Mysore, we work through every phase of development to deliver solutions that align with your goals and exceed expectations in today’s competitive market.",
    accent: "#d64a8a",
  },
  {
    icon: "/images/search-engine-optimization.png",
    title: "App Creators",
    desc: "Bringing app ideas to life is our specialty. At Nakshatra Namaha Creations, we design and develop mobile applications that are engaging, functional, and precise, providing users with an unforgettable experience. As the best mobile app development company in Mysore, we ensure that every app we create is tailored to meet your specific needs and goals.",
    accent: "#6d8fa2",
  },
  {
    icon: "/images/web-browser.png",
    title: "Animation Experts",
    desc: "Our animation team excels in crafting visually captivating content that enhances brand storytelling. Whether it's explainer videos, 2D animations, or puppet animation, we bring creativity and technical precision to create animations that leave a lasting impression on your audience. As the best 2D animation company in Mysore, we are committed to delivering exceptional quality and creativity in every project.",
    accent: "#55b047",
  },
 
];

export default function WebDesignService() {
  return (
    <section className={styles.featuresGrid_wrap} aria-label="Product features">
      <h2 className="text-center fw-bold mb-5">
        Key Features of Our Website Development Company
      </h2>

      <div className={styles.featuresGrid_grid}>
        {FEATURES.map((feature, i) => (
          <article
            key={i}
            className={styles.featuresGrid_card}
            style={{ ["--accent" as any]: feature.accent }}
          >
            <div className={styles.featuresGrid_iconWrap} aria-hidden="true">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={72}
                height={72}
                className={styles.featuresGrid_icon}
              />
            </div>

            <h3 className={styles.featuresGrid_title}>
              {feature.title.split("\n").map((line, idx) => (
                <span
                  key={idx}
                  className={idx === 0 ? styles.featuresGrid_strong : ""}
                >
                  {line}
                  {idx < feature.title.split("\n").length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <p className={styles.featuresGrid_desc}>{feature.desc}</p>
            <span className={styles.featuresGrid_bar} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
