// src/components/ContactUs.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { motion } from "framer-motion";

import styles from "./ContactUs.module.css";

type FormData = {
  name: string;
  email: string;
  phoneNo: string;
  service: string;
  message: string;
  referenceFrom: string; // static default
  city: string; // static default
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNo: "",
    service: "",
    message: "",
    referenceFrom: "contactus",
    city: "Mysore",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Next.js: set react-modal app element to the Next root
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#__next");
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasData = Object.values(formData).some(
      (v) => (v ?? "").toString().trim() !== ""
    );
    if (!hasData) {
      alert("Please provide at least one field.");
      return;
    }

    try {
      const response = await axios.post("/api/enquiries", formData, {
        headers: { "Content-Type": "application/json" },
        });

      if (response.status === 201 || response.status === 200) {
        setModalIsOpen(true);
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
        alert("Failed to send. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Check console for details.");
    }
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className={`container ${styles["contact-section"]}`}>
      <div className={`row align-items-center ${styles["re12"]}`}>
        <div className={`col-lg-7 ${styles["text-section"]}`}>
          <motion.h2
            className={styles["let-grow"]}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let’s grow
          </motion.h2>
          <motion.h2
            className={`${styles["let-grow-sub"]} ${styles["text-move"]}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            — together.
          </motion.h2>
        </div>

        <div className="col-lg-5">
          <motion.img
            src="/images/contactus111.png"
            alt="Contact Us"
            className={`img-fluid ${styles["contact-img"]}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <div className="row g-4">
          <div className="col-md-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name *"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email *"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Phone</label>
            <input
              type="text"
              name="phoneNo"
              className="form-control"
              placeholder="Enter Phone *"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label>Service</label>
            <select
              name="service"
              className="form-control"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a Service</option>
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
          </div>

          <div className="col-12">
            <label>Message</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message *"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <button type="submit" className={styles["cta-btn"]}>
              Send Message
            </button>
          </div>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
        <p>Your message has been sent. We&apos;ll contact you soon.</p>
        <button onClick={closeModal} className="btn btn-secondary mt-3">
          Close
        </button>
      </Modal>
    </div>
  );
}
