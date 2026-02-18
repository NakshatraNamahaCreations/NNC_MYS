import Link from "next/link";
import styles from "./not-found.module.css";

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glow}></div>

      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>
          Page Not Found
        </h2>

        <p className={styles.text}>
          The page you are trying to access does not exist or the
          link may be incorrect. Let’s get you back on track.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            Go to Homepage
          </Link>

          <Link href="/contact-us" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
