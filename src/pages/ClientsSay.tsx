import Link from "next/link";
import styles from "./ClientsSay.module.css"; // ✅ Import CSS Module

export default function ClientsSays() {
  return (
    <div className={styles["rock1"]}>
      <div className={`${styles["container8"]} my-4`}>
        <div className={styles["blog-row"]}>
          <div className={styles["blog-heading"]}>
            <h5>Our Blog</h5>
            <h2>Recent Blog & Articles</h2>
          </div>

          <div className={styles["blog-text"]}>
            <p>
              Stay updated with the latest advancements in technology! Our blogs and articles keep you informed about the newest trends and innovations shaping your daily work life.
              At Nakshatra Namaha Creations, we help businesses establish a strong online presence. From responsive websites to mobile apps, our team brings your vision to life with
              cutting-edge digital solutions tailored to your needs.
            </p>
          </div>

          <div className={styles["cta-button13"]}>
            <Link href="/blogs" className="btn btn-primary">
              VIEW BLOG
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`row justify-content-center ${styles["card12"]}`}>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
            <div className={styles["blog-card-wrapper"]}>
              <img src="/images/app-mobile.jpeg" alt="Blog Cover" className={styles["blog-image"]} />
              <div className={styles["blog-overlay-box"]}>
                <p className={styles["meta-info"]}>October 08, 2024</p>
                <h5>The Role of Mobile Apps in Business Operations</h5>
                <Link href="/blogs/role-of-mobile-apps-in-business" className={styles["text-link"]}>
                  Read Blog
                  <svg viewBox="0 0 12 10" fill="#000" xmlns="http://www.w3.org/2000/svg" className={styles["icon-arrow"]}>
                    <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
            <div className={styles["blog-card-wrapper"]}>
              <img src="/images/mobile.png" alt="Blog Cover" className={styles["blog-image"]} />
              <div className={styles["blog-overlay-box"]}>
                <p className={styles["meta-info"]}>August 03, 2024</p>
                <h5>How a Well-Designed Website Can Help Businesses Stand Out in 2025</h5>
                <Link href="/blogs/well-designed-website-benefits" className={styles["text-link"]}>
                  Read Blog
                  <svg viewBox="0 0 12 10" fill="#000" xmlns="http://www.w3.org/2000/svg" className={styles["icon-arrow"]}>
                    <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
