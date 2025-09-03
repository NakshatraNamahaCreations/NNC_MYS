"use client";

import Link from "next/link";
import styles from "./TopWeb.module.css"; // ✅ CSS Module import

export default function TopWeb() {
  return (
    <section className={styles["cta-section"]}>
      <div className={styles["cta-container"]}>
        <h2 className={styles["cta-heading"]}>
          Which custom development service are you looking for?
        </h2>
        <p className={styles["cta-subtext"]}>
          Share your requirements with our industry-leading team of experts,
          and leverage best-in-class software development teams to launch
          applications that represent your business.
        </p>
        <Link href="/contact-us">
          <button className={styles["cta-button13"]}>Contact Us!</button>
        </Link>
      </div>
    </section>
  );
}
