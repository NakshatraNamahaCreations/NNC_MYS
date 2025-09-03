// src/components/Buissness.tsx
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Buissness.module.css"; // CSS Module

export default function Buissness() {
  return (
    <section className={`${styles.twoColumnSection} py-8`}>{/* py-5 is valid in Bootstrap */} 
      <div className={`container ${styles.businessContainer}`}>
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className={styles.leftsideColumn}>
              <img
                src="/images/group.jpg"
                alt="Our Process"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Right side */}
          <div className={`col-md-6 ${styles.rightsideContent}`}>
            <h2 className="mb-4">Meet Our Team</h2>
            <p>
              Check out our diverse collection of websites professionally designed and developed by our expert team. We are committed to completing projects within
              the stipulated timeline, ensuring full satisfaction for our clients. Browse through our portfolio and see firsthand how quality defines our Website Development
              Services. At Nakshatra Namaha Creations, we take pride in being the best website development company in Mysore, offering tailored services to help businesses
              establish a strong online presence. As the best website design company in Mysore, we specialize in creating visually appealing and user-friendly websites that
              resonate with your brand identity. Additionally, as the best mobile app development company in Mysore, we extend our expertise to crafting innovative,
              responsive mobile applications. Let us help you bring your vision to life with cutting-edge web and mobile development solutions in Mysore!
            </p>

            <Link href="/about-us" className={styles.teamBtn}>
              Meet the Team <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
