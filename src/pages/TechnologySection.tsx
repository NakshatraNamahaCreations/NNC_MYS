"use client";

import Image from "next/image";
import styles from "./TechnologySection.module.css"; // make sure the classes (technology, space, title, desc, techimg, phpimg, marquee, marqueeContent) exist here

type TechItem = {
  src: string;
  alt: string;
  extraClass?: string;
};

const techStack: TechItem[] = [
  { src: "/images/tech/nodejs.png", alt: "Node Js"  },
  { src: "/images/tech/python.png", alt: "Python" },
  { src: "/images/tech/android.png", alt: "Android" },
  { src: "/images/tech/wordpress.png", alt: "WordPress", extraClass: styles.phpimg },
  { src: "/images/tech/javascript.svg", alt: "Javascript" },
   { src: "/images/tech/linux.svg", alt: "Linux" },
     { src: "/images/tech/mysql.svg", alt: "Mysql" },
  { src: "/images/tech/java.svg", alt: "Java" },
   { src: "/images/tech/flutter.png", alt: "Flutter" },
    { src: "/images/tech/strapi.png", alt: "Strapi" },
];

const marqueeItems: string[] = [
  "React.Js",
  "React Native",
  "Tailwind",
  "Laravel",
  "Ci3",
  "NodeJs",
  "Fast API",
  "Figma",
  "Photoshop",
  "MsSQL",
];

export default function TechnologySection() {
  return (
    <>
      <section className={`${styles.technology} space`}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left copy */}
            <div className="col-md-5">
              <div>
                <h3 className={styles.title}>Technology Stack</h3>
                <p className={styles.desc}>
                  At Nakshatra Namaha Creations, we build powerful, scalable, and secure applications using
                  industry-leading technologies. Our tech stack includes modern frontend frameworks,
                  robust backend languages, and creative design tools that ensure high performance
                  and long-term reliability.
                </p>
              </div>
            </div>

            {/* Right grid */}
         <div className="col-md-7">
  <div className="row align-items-center justify-content-center">
    {techStack.map((tech, idx) => (
      <div key={idx} className="col-md-3 col-6 mb-3 text-center">
        <div className={styles.techCard}>
          <Image
            src={tech.src}
            alt={tech.alt}
            width={50}
            height={50}
            className={`img-fluid ${styles.techimg}`}
          />
          <p className={styles.techName}>{tech.alt}</p>
        </div>
      </div>
    ))}
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Marquee */}
      <section style={{ background: "#0C0A25", padding: "16px 0", overflow: "hidden" }}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {marqueeItems.map((item, i) => (
              <span key={`m1-${i}`}>
                {item} <span style={{ color: "#00FF94", marginLeft: "18px" }}>●</span>
              </span>
            ))}
            {/* duplicate for seamless loop */}
            {marqueeItems.map((item, i) => (
              <span key={`m2-${i}`}>
                {item} <span style={{ color: "#00FF94", marginLeft: "18px" }}>●</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
