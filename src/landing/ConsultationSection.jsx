"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import styles from "./ConsultationSection.module.css";
import Link from "next/link";

export default function ConsultationSection() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
    service: "Website Development",
    referenceFrom: "consultation-section",
    city: "Mysore",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNo ||
      !formData.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNo: formData.phoneNo,
        message: formData.message,
        service: formData.service,
        referenceFrom: formData.referenceFrom,
        city: formData.city,
      };

      const res = await axios.post("/api/enquiries", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
        router.push("/thankyou");
      }
    } catch (error) {
      console.error("Consultation form submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>

        {/* LEFT CONTENT */}
        <div className={styles.left} id="contact-us">
          <span className={styles.tag}>CONTACT US</span>

          <h2>
            Send Us a <br /> Message.
          </h2>

          <p className={styles.desc}>
            Have a website idea, business requirement, or improvement in mind? <br />
            Whether you are planning a new website, upgrading an existing one, or looking for professional website development support, our team is ready to guide you with the right solution.

          </p>

          <div className={styles.info}>
            <p><strong>Call us at:</strong> +91 9900566466</p>
            <p><strong>Mail us at:</strong>  info@nakshatranamahacreations.com</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className={styles.socialWrap}>
            <Link href="https://www.linkedin.com/company/nakshatra-namaha-creation/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </Link>
            <Link href="https://www.facebook.com/people/Nakshatra-Namaha-Creations-Mysore/61566507905764/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
              </Link>
            <Link href="https://www.instagram.com/nnc.digitalmysuru/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              </Link>
            <Link href="https://www.youtube.com/c/NakshatraNamahaCreations" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
              </Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <h3>Book a Free Consultation</h3>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label>Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Your Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
