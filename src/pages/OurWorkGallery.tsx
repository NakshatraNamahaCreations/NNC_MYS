import Image from "next/image";
import styles from "./OurWorkGallery.module.css";

type Project = {
  image: string;
  name: string;
  category?: string;
  link: string; // external URLs
};

const projects: Project[] = [
  { image: "/images/portfoilo3.webp", name: "RAJATHADRI ROYALINN", category: "Hotel Management", link: "https://rajathadriroyalinn.com/" },
  { image: "/images/portfolio4.webp", name: "SK DEVELOPERS", category: "Real Estate", link: "https://skdevelopers.in/" },
  { image: "/images/portfolio2.webp", name: "PURAN INTERIORS", category: "Interior Design", link: "https://puraninteriors.com/" },
  { image: "/images/portfolio1.webp", name: "NESARA AYURVEDA", category: "Health Care", link: "https://nesaraayurveda.com/" },
  { image: "/images/scrr1.png", name: "Avitri Spices",category: "Spices & Condiments", link: "https://www.avitrispices.in/" },
  { image: "/images/scrr2.png", name: "Brindavan Constructions", category: "Constructions", link: "https://brindavanconstruction.com/" },
  { image: "/images/scrr3.png", name: "Sarang Creations",category: "Handmade Jewelry & Home Decor", link: "https://sarangcreations.com/" },
];

export default function OurWorkGallery() {
  return (
    <section className={styles["our-work-section"]}>
      <h2 className={styles["section-title"]}>Recent Works</h2>

      <div className={styles["portfolio-grid"]}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["portfolio-card-link"]}
          >
            <div className={styles["portfolio-card"]}>
              <Image
                src={project.image}
                alt={project.name}
                width={480}
                height={320}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                className={styles["portfolio-image"]}
              />
              <br />
              <h4 className={styles["portfolio-client-name py-2"]}>{project.name}</h4>
              {project.category && (
                <p className={styles["portfolio-client-category"]}>{project.category}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
