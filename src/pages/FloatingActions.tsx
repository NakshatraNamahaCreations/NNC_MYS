"use client";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
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
    const { name, phone, email, subject, message } = callbackData;

    if (!name || !phone || !email || !subject) {
      alert("Please fill in all required fields.");
      return;
    }

    // Construct payload in the same shape as your ContactUs form expects.
    // Keep `phone` for local usage but include `phoneNo` for upstream.
    const payload = {
      name,
      email,
      phoneNo: phone,           // map to phoneNo (ContactUs uses phoneNo)
      phone,                    // include original too (proxy will normalize)
      service: subject,         // many backends expect `service` instead of `subject`
      message,
      referenceFrom: "callback",// small identifier so you know it came from floating callback
      city: "Mysore",
    };

    try {
      // Use the internal relative path so your pages/api/enquiries.js proxy handles forwarding.
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${txt}`);
      }

      // success
      // alert("Callback request submitted successfully!");
      setCallbackData({ name: "", phone: "", email: "", subject: "", message: "" });
      setShowModal(false);
      router.push("/thankyou");

    } catch (err) {
      console.error("Error submitting callback request:", err);
      alert("An error occurred while submitting. Check console for details.");
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
