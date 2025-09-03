// src/pages/services/MobileProcessTimeline.tsx
import React from "react";
import styles from "./MobileProcessTimeline.module.css";

type Step = { title: string; description: string };

const steps: Step[] = [
  {
    title: "Custom Mobile App Development",
    description:
      "As the top mobile Apps development company in Mysore & Bengaluru, we will address all your requirements and provide you a custom build service to fulfill all your requirements. Using the latest Android SDKs, we develop a high-end user interface for your Android app for your business.",
  },
  {
    title: "Custom Web Based Mobile Apps",
    description:
      "Do you want to develop a web-based app to enhance the day-to-day operational efficiency of your business and its daily practice? Share your requirements with us and we will be suggesting the best mobile web design-based app for your business.",
  },
  {
    title: "Mobile UI/UX Designing",
    description:
      "Our experienced UI/UX mobile app designers are well-known for executing the best UI/UX design techniques to deliver the most engaging and interactive UI designs to give user-friendly experience.",
  },
  {
    title: "App Porting",
    description:
      "If you want to port your mobile app from one platform to another like iOS to Android, Android to iOS or any other platform, connect with us today as we are capable of converting your app to any platform as you need.",
  },
  {
    title: "App Testing",
    description:
      "We do have a dedicated quality assurance team that checks all the apps and makes sure that we deliver bug free high-performance apps to clients worldwide.",
  },
  {
    title: "App Consultation",
    description:
      "Want to talk to our consultant and discuss your project requirements? Let’s get connected now and we will help you with an experienced mobile app consultant who will suggest you the best possible solution or your business requirements.",
  },
];

export default function MobileProcessTimeline() {
  return (
    <section className={styles["mobile-process-timeline"]}>
      <h2>Our Mobile App Development Process</h2>
      <p className={styles["subtitle"]}>
        When getting an app for your dream business, it has to be a unique one. At Nakshatra Namaha Creations, we provide unparalleled app development services in Mysore, steering your product towards success. As the top mobile application development company in Mysore, we use agile methodology in all our projects and offer mobile-centric mobile app solutions by synergizing UX, smart consultation, bots, AIs, IoT and other latest technologies in the market. With being top app developers in Mysore, our team consists of highly experienced professionals with years of industry exposure, helping clients generate desired results within the stipulated time and budget.
      </p>

      <div className={styles["ecom-step-grid-container"]}>
        {steps.map((step, index) => (
          <div className={styles["ecom-step-card"]} key={index}>
            <div className={styles["ecom-step-number"]}>{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
