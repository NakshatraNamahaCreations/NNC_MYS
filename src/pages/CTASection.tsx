"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import styles from "./CTASection.module.css";

type FormData = {
  name: string;
  phoneNo: string;
  email: string;
  service: string;
  message: string;
  referenceFrom: string;
  city: string;
};

export default function CTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNo: "",
    email: "",
    service: "",
    message: "",
    referenceFrom: "Website",
    city: "Mysore",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // In Next.js App Router, the app mounts on <body>, not #__next
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement(document.body);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // minimal client validation (tweak as needed)
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.email.trim() && !formData.phoneNo.trim()) {
      alert("Please provide at least an email or phone number.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        formData
      );

      if (res.status === 200 || res.status === 201) {
        setModalIsOpen(true);
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          service: "",
          message: "",
          referenceFrom: "Website",
          city: "Mysore",
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles["container17"]}>
      <div className="row align-items-center gx-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/images/rji.png"
            alt="Get in Touch"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-lg-6">
          <div className={styles["ctaContent"]}>
            <h4 className="sec_title1 mb-3">
              Here&apos;s how you can connect with the NNC team:
            </h4>
            <p className="py-1">
              We help businesses of all sizes achieve their goals. We believe every brand, big or small, deserves to shine.
            </p>

            <form className="mt-3" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="form-control mb-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNo"
                placeholder="Enter phone number"
                className="form-control mb-2"
                value={formData.phoneNo}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Please enter your work email"
                className="form-control mb-2"
                value={formData.email}
                onChange={handleChange}
              />
              <select
                name="service"
                className="form-control mb-2"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a Service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Corporate Video Production">Corporate Video Production</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="2D Animations">2D Animations</option>
                <option value="B2B Marketing Service">B2B Marketing Service</option>
              </select>
              <textarea
                name="message"
                rows={4}
                maxLength={150}
                placeholder="Enter your message"
                className="form-control mb-2"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                {submitting ? "Sending..." : "Talk to our experts"}
                <svg
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles["iconArrow"]}
                  width={16}
                  height={16}
                >
                  <path
                    d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal
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
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <h2>Thank you!</h2>
        <p>Your message has been sent. We&apos;ll contact you soon.</p>
        <button
          onClick={() => setModalIsOpen(false)}
          className="btn btn-secondary mt-3"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
