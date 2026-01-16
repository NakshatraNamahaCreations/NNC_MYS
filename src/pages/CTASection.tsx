"use client";
import { useRouter } from "next/navigation";
import React from "react";
import axios, { AxiosError } from "axios";
import Modal from "react-modal";
import { motion } from "framer-motion";
import styles from "./CTASection.module.css";

export default function CTASection() {
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    name: "",
    companyName: "",
    email: "",
    phoneNo: "",
    service: "",
    message: "",
    referenceFrom: "contactus",
    city: "",
    sourceDomain: "nakshatra.in",
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") Modal.setAppElement(document.body);
  }, []);

  /* 🔹 Typed change handler */
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* 🔹 Submit */
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.companyName ||
      !formData.email ||
      !formData.phoneNo ||
      !formData.city ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await axios.post(
        "/api/enquiries",
        {
          name: formData.name,
          companyName: formData.companyName,
          email: formData.email,
          phoneNo: formData.phoneNo,
          service: formData.service,
          message: formData.message,
          city: formData.city,
          referenceFrom: "contactus",
          sourceDomain: "nakshatra.in",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200 || res.status === 201) {
        router.push("/thankyou");

        setFormData({
          name: "",
          companyName: "",
          email: "",
          phoneNo: "",
          service: "",
          message: "",
          referenceFrom: "contactus",
          city: "Mysore",
          sourceDomain: "nakshatra.in",
        });
      } else {
        alert(`Failed to send. Server returned ${res.status}.`);
      }
    } catch (err: unknown) {
      let msg = "Unknown error";
      if (axios.isAxiosError(err)) {
        const ax = err as AxiosError<{ error?: string }>;
        msg =
          ax.response?.data?.error ||
          ax.response?.statusText ||
          ax.message ||
          msg;
      } else if (err instanceof Error) {
        msg = err.message;
      }

      alert(`An error occurred: ${msg}`);
      console.error("Contact submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.contactConsultHero} style={{ padding: "50px 0" }}>
      {/* Intro */}
      <div className={styles.contactConsultHeroIntro}>
        <h2 className={styles.contactConsultHeroTitle}>
          Consult with our professionals
        </h2>
        <p className={styles.contactConsultHeroSub}>
          Tell us about your project—our team will get back within 24 hours.
        </p>
        <ul className={styles.contactConsultHeroBadges}>
          <li>Free consultation</li>
          <li>NDA on request</li>
          <li>Response in 24 hrs</li>
        </ul>
      </div>

      {/* Form Card */}
      <motion.div
        className={styles.contactConsultHeroCard}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
          <h3 className={styles.contactConsultHeroFormTitle}>
            Start your project
          </h3>
        

        <form
          className={styles.contactConsultHeroForm}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.contactConsultHeroRow}>
            <label className={styles.contactConsultHeroField}>
              {/* <span>Name *</span> */}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

                <label className={styles.contactConsultHeroField}>
              {/* <span>Company *</span> */}
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </label>

           
          </div>

          <div className={styles.contactConsultHeroRow}>
            <label className={styles.contactConsultHeroField}>
              {/* <span>Phone *</span> */}
              <input
                type="tel"
                name="phoneNo"
                placeholder="Phone number"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.contactConsultHeroField}>
              {/* <span>Email *</span> */}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label className={styles.contactConsultHeroField}>
            {/* <span>Service</span> */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              {/* <option value="">Select a Service</option> */}
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Corporate Video Production">
                Corporate Video Production
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="2D Animations">2D Animations</option>
              <option value="B2B Marketing Service">
                B2B Marketing Service
              </option>
            </select>
          </label>

          <label className={styles.contactConsultHeroField}>
         
            {/* <span>City *</span> */}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.contactConsultHeroField}>
            {/* <span>Your Message *</span> */}
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your project…"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <motion.button
            type="submit"
            className={styles.contactConsultHeroCta}
            disabled={submitting}
            whileHover={{ x: submitting ? 0 : 2 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
          >
            {submitting ? "Sending…" : "Get free consultation"}
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path
                d="M4 10h10M10 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
