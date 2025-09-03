import React, { useState } from "react";
import styles from "./SeoRoleSection.module.css";

type SectionItem = {
  title: string;
  description: string;
};

export default function SeoRoleSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageNames: string[] = [
    "editing1seo.jpg",
    "goalseo1.jpg",
    "concept1.jpg",
    "scripting.jpg",
    "video11.jpg",
    "edit11.jpg",
  ];

  const sectionContent: SectionItem[] = [
    {
      title: "Final Review and Delivery",
      description:
        "Ensure the video aligns with your vision before delivering the final product.",
    },
    {
      title: "Understanding Your Goals",
      description:
        "We begin by discussing your ideas and objectives in detail.",
    },
    {
      title: "Concept Development",
      description:
        "Crafting a clear concept that aligns with your business vision.",
    },
    {
      title: "Scriptwriting",
      description:
        "Writing compelling scripts to convey your message effectively.",
    },
    {
      title: "High-Quality Filming",
      description:
        "Capturing stunning visuals using modern equipment and expert techniques.",
    },
    {
      title: "Professional Editing",
      description:
        "Refining footage to create seamless and engaging final videos.",
    },
  ];

  return (
    <div className={styles["seo-section"]}>
      <div className="container">
        <div className="col-12">
          <div className="row mb-5">
            <div className="col-md-13">
              <h2 className={styles["sec_title11"]}>
                Our Corporate Video Production Process: Your Story, Our Expertise
              </h2>
            </div>
            <div className="col-lg-13">
              <p className={styles.intro}>
                Creating impactful corporate videos involves a streamlined approach
                that focuses on quality and creativity. Here's how we ensure your
                vision comes to life:
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Image block */}
          <div className={`col-lg-4 ${styles["sticky-img-area"]}`}>
            <div className={styles["image-wrapper"]}>
              <div className={styles["why_us-img"]}>
                {imageNames.map((imgName, i) => (
                  <img
                    key={i}
                    src={`/images/${imgName}`}
                    alt={`Visual ${i + 1}`}
                    width={280}
                    height={200}
                    className={`${styles["why-img"]} ${
                      activeIndex === i ? styles.active : ""
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text list block */}
          <div className={`col-lg-8 ${styles["why-us_list"]}`}>
            <ul className={`${styles.point_list} ${styles["list-styled"]}`}>
              {sectionContent.map((item, i) => (
                <li
                  key={i}
                  className={styles["w-list-item"]}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
