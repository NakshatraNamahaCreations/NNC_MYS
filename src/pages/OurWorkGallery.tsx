import Image from "next/image";
import styles from "./OurWorkGallery.module.css";

type Project = {
  image: string;
  name: string;
  category?: string;
  link: string;
};

const projects: Project[] = [
  { image: "/images/portfoilo3.webp", name: "RAJATHADRI ROYALINN", category: "Hotel Management", link: "https://rajathadriroyalinn.com/" },
  { image: "/images/portfolio4.webp", name: "SK DEVELOPERS", category: "Real Estate", link: "https://skdevelopers.in/" },
  { image: "/images/portfolio2.webp", name: "PURAN INTERIORS", category: "Interior Design", link: "https://puraninteriors.com/" },
  { image: "/images/portfolio1.webp", name: "NESARA AYURVEDA", category: "Health Care", link: "https://nesaraayurveda.com/" },
  { image: "/images/scrr1.png", name: "Avitri Spices", category: "Spices & Condiments", link: "https://www.avitrispices.in/" },
  { image: "/images/scrr2.png", name: "Brindavan Constructions", category: "Constructions", link: "https://brindavanconstruction.com/" },
  { image: "/images/scrr3.png", name: "Sarang Creations", category: "Handmade Jewelry & Home Decor", link: "https://sarangcreations.com/" },
];

export default function OurWorkGallery() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Recent Works</h2>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            <article className={styles.card} style={{ animationDelay: `${i * 80}ms` }}>
              {/* gradient border wrapper */}
              <div className={styles.border}>
                <div className={styles.inner}>
                  <div className={styles.media}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={640}
                      height={420}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                      className={styles.img}
                      priority={i < 2}
                    />
                    {/* hover shine */}
                    <span className={styles.shine} aria-hidden />
                    {/* glass overlay with text */}
                    <div className={styles.overlay}>
                      <h4 className={styles.name}>{project.name}</h4>
                      {project.category && (
                        <span className={styles.tag}>{project.category}</span>
                      )}
                    </div>
                  </div>

                  {/* footer row */}
                  <div className={styles.footer}>
                    <span className={styles.cta}>
                      Visit site
                      <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden>
                        <path d="M4 10h10M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
