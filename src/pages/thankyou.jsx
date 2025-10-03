"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import styles from "./thankyou.module.css";

const ThankyouPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Success checkmark */}
        <div className={styles.checkCircle}>✔</div>

        {/* Title + Subtitle */}
        <h2 className={styles.heading}>Thank You!</h2>
        <p className={styles.subtitle}>
          We’ve received your enquiry. Our team will contact you shortly.  
          In the meantime, stay connected with us:
        </p>

        {/* Social Media Icons */}
        <div className={styles.socialRow}>
          <a href="https://www.facebook.com/Nakshatranamahacreations/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/nnc.digitalbengaluru/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/nakshatra-namaha-creation/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/c/NakshatraNamahaCreations" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://x.com/nncbengaluru" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>

        {/* Button */}
        <Link href="/" className={styles.btn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankyouPage;
