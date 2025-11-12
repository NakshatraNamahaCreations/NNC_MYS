"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import styles from "./FloatingActions.module.css";

type CallbackData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export default function FloatingActions() {
  const [callbackData, setCallbackData] = useState<CallbackData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleCallbackChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCallbackData((s) => ({ ...s, [name]: value }));
  };

  const handleCallbackSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, phone, email, subject } = callbackData;

    if (!name || !phone || !email || !subject) {
      alert("Please fill in all required fields.");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5001";

    try {
      const res = await fetch(`${endpoint}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(callbackData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      alert("Callback request submitted successfully!");
      setCallbackData({ name: "", phone: "", email: "", subject: "", message: "" });
      setShowModal(false);
    } catch (err) {
      console.error("Error submitting callback request:", err);
      alert("An error occurred. Check the console.");
    }
  };

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const stop = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <>
      <div className={styles["floating-action-container"]}>
        <button
          className={styles["floating-callback"]}
          onClick={() => setShowModal(true)}
          aria-label="Request a Callback"
          type="button"
        >
          RequestToCallback
        </button>

 <a
  href="https://wa.me/919900566466"
  target="_blank"
  rel="noreferrer"
  className={styles["floating-whatsapp"]}
  aria-label="Chat on WhatsApp"
>
  <img src="/images/whatsapp.png" alt="WhatsApp" />
          </a>

      </div>

      {showModal && (
        <div className={styles["callback-overlay"]} onClick={() => setShowModal(false)}>
          <div className={styles["callback-box"]} onClick={stop} role="dialog" aria-modal="true">
            <button className={styles["close-btn"]} onClick={() => setShowModal(false)} aria-label="Close">
              &times;
            </button>
            <h3 className={styles["callback-title"]}>Request a callback</h3>
            <p className={styles["callback-sub"]}>Fill out the form below, and we'll call you within 24 hours.</p>

            <form className={styles["callback-form"]} onSubmit={handleCallbackSubmit}>
              <label className={styles["label"]}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={callbackData.name}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
              />

              <label className={styles["label"]}>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={callbackData.phone}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
              />

              <label className={styles["label"]}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={callbackData.email}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
              />

              <label className={styles["label"]}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={callbackData.subject}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
              />

              <label className={styles["label"]}>Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={3}
                value={callbackData.message}
                onChange={handleCallbackChange}
                className={styles["textarea"]}
              />

              <button type="submit" className={styles["submit-btn"]}>
                Call me back
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
