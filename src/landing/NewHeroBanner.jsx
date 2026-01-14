"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HiArrowRight } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import styles from "./AppHero.module.css";
import Link from "next/link";

export default function NewHeroBanner() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNo: "",
    city: "",
    message: "",
    service: "Website Development",
    referenceFrom: "hero-form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.companyName ||
      !formData.phoneNo ||
      !formData.city ||
      !formData.message
    ) {
      return;
    }

    try {
      setSubmitting(true);

      const res = await axios.post("/api/enquiries", {
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        message: formData.message,
        service: formData.service,
        city: formData.city,
        referenceFrom: formData.referenceFrom,
        sourceDomain: "nakshatra.in", // ✅ added
      });

      if (res.status === 200 || res.status === 201) {
        router.push("/thankyou");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.mainTitle}>
            <span className={styles.outlineTitle}>Website</span> <br />
            <span className={styles.solidTitle}>Development Company</span>
          </h1>

          <p className={styles.description}>
            Strategic Website Development Services Designed for Growth, Speed &
            Conversions
          </p>

          <Link href="/contact-us" className={styles.callBtn}>
            <div>
              <span>Contact Us</span>
            </div>
            <FiArrowRight className={styles.callIcon} />
          </Link>
        </div>

        {/* RIGHT */}
        <div className={styles.formWrapper}>
          <h3>Get a Free Website Consultation</h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Name *"
              onChange={handleChange}
              required
            />


            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              name="phoneNo"
              placeholder="Phone *"
              onChange={handleChange}
              required
            />

            <input
              name="city"
              placeholder="City *"
              onChange={handleChange}
              required
            />

            
            <input
              name="companyName"
              placeholder="Company Name *"
              onChange={handleChange}
              required
            />

            <textarea
              rows="3"
              name="message"
              placeholder="Message *"
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request Website Consultation"}
              <HiArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
