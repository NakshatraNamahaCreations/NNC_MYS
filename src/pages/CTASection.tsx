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
    email: "",
    phoneNo: "",
    service: "",
    message: "",
    referenceFrom: "contactus",
    city: "Mysore",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") Modal.setAppElement(document.body);
  }, []);

  // ✅ Properly typed change handler (fixes “e implicitly any”)
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  // ✅ Properly typed submit handler (fixes “e implicitly any”)
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phoneNo || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await axios.post("/api/enquiries", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
       router.push("/thankyou");

        setFormData({
          name: "",
          email: "",
          phoneNo: "",
          service: "",
          message: "",
          referenceFrom: "contactus",
          city: "Mysore",
        });
      } else {
        alert(`Failed to send. Server returned ${res.status}.`);
      }
    } catch (err: unknown) {
      // ✅ Safely narrow the error to AxiosError and surface a clear message
      let msg = "Unknown error";
      if (axios.isAxiosError(err)) {
        const ax = err as AxiosError<{ error?: string }>;
        msg = ax.response?.data?.error || ax.response?.statusText || ax.message || msg;
      } else if (err instanceof Error) {
        msg = err.message;
      }
      // Show a proper message
      alert(`An error occurred: ${msg}`);
      console.error("Contact submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.contactConsultHero} style={{ padding: "50px 0" }}>
      {/* Intro copy above card */}
      <div className={styles.contactConsultHeroIntro}>
        <h2 className={styles.contactConsultHeroTitle}>Consult with our professionals</h2>
        <p className={styles.contactConsultHeroSub}>
          Tell us about your project—our team will get back within 24 hours with the next steps.
        </p>
        <ul className={styles.contactConsultHeroBadges} aria-label="Highlights">
          <li>Free consultation</li>
          <li>NDA on request</li>
          <li>Response in 24 hrs</li>
        </ul>
      </div>

      {/* Glass card with form */}
      <motion.div
        className={styles.contactConsultHeroCard}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className={styles.contactConsultHeroFormTitle}>Start your project</h3>

        <form className={styles.contactConsultHeroForm} onSubmit={handleSubmit} noValidate>
          <div className={styles.contactConsultHeroRow}>
            <label className={styles.contactConsultHeroField}>
              <span>Name *</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </label>

            <label className={styles.contactConsultHeroField}>
              <span>Phone *</span>
              <input
                type="tel"
                name="phoneNo"
                required
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleChange}
                autoComplete="tel"
              />
            </label>
          </div>

          <label className={styles.contactConsultHeroField}>
            <span>Email *</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </label>

          <label className={styles.contactConsultHeroField}>
            <span>Service</span>
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="">Select a Service</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Corporate Video Production">Corporate Video Production</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="2D Animations">2D Animations</option>
              <option value="B2B Marketing Service">B2B Marketing Service</option>
            </select>
          </label>

          <label className={styles.contactConsultHeroField}>
            <span>Your Message *</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project…"
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <motion.button
            type="submit"
            className={styles.contactConsultHeroCta}
            whileHover={{
              x: submitting ? 0 : 2,
              boxShadow: submitting ? "none" : "0 10px 28px rgba(0,0,0,.25)",
            }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
            disabled={submitting}
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

      {/* Success modal */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Thank You"
        style={{
          content: {
            maxWidth: "400px",
            margin: "auto",
            height: "250px",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center",
          },
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        <h2>Thank you!</h2>
        <p>Your message has been sent. We’ll contact you soon.</p>
        <button onClick={() => setModalIsOpen(false)} className="btn btn-secondary mt-3">
          Close
        </button>
      </Modal> */}
    </section>
  );
}
