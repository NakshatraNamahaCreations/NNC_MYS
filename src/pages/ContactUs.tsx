// src/components/ContactUs.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "./ContactUs.module.css";

type FormData = {
  name: string;
  companyName: string;
  email: string;
  phoneNo: string;
  service: string;
  message: string;
  referenceFrom: string;
  city: string;
};

export default function ContactUs() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    email: "",
    phoneNo: "",
    service: "",
    message: "",
    referenceFrom: "contactus",
    city: "Mysore",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Minimal validation
    if (!formData.name.trim() || !formData.phoneNo.trim()) {
      alert("Name and Phone are required");
      return;
    }

    try {
      const response = await axios.post(
        "/api/enquiries",
        {
          ...formData,
          sourceDomain: "nakshatra.in", // ✅ CATEGORY IDENTIFIER
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
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
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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

      {/* FORM */}
      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <div className="row g-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

         

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="phoneNo"
              className="form-control"
              placeholder="Phone Number *"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
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

     <div className="col-md-6">
            <input
              type="text"
              name="companyName"
              className="form-control"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
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
    </div>
  );
}
