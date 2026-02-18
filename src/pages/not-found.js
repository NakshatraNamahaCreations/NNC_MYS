import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>
          Oops! Page Not Found
        </h2>

        <p className={styles.text}>
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
