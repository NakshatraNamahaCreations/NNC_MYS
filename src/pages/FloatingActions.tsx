"use client";
import { useRouter } from "next/navigation";
import {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import styles from "./FloatingActions.module.css";

type CallbackData = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  subject: string;
  city: string;
  message: string;
};

export default function FloatingActions() {
  const router = useRouter();

  const [callbackData, setCallbackData] = useState<CallbackData>({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    subject: "",
    city: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleCallbackChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCallbackData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCallbackSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      name,
      companyName,
      phone,
      email,
      subject,
      city,
      message,
    } = callbackData;

    if (!name || !companyName || !phone || !email || !subject || !city) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      name,
      companyName,
      email,
      phoneNo: phone,
      phone,
      service: subject,
      message,
      city,
      referenceFrom: "callback",
      sourceDomain: "nakshatra.in",
    };

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${txt}`);
      }

      setCallbackData({
        name: "",
        companyName: "",
        phone: "",
        email: "",
        subject: "",
        city: "",
        message: "",
      });

      setShowModal(false);
      router.push("/thankyou");
    } catch (err) {
      console.error("Error submitting callback request:", err);
      alert("An error occurred while submitting. Please try again.");
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

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
          href="https://wa.me/919900566466?text=Hi,%20I%20need%20a%20callback"
          target="_blank"
          rel="noreferrer"
          className={styles["floating-whatsapp"]}
          aria-label="Chat on WhatsApp"
        >
          <img src="/images/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>

      {showModal && (
        <div
          className={styles["callback-overlay"]}
          onClick={() => setShowModal(false)}
        >
          <div
            className={styles["callback-box"]}
            onClick={stopPropagation}
            role="dialog"
            aria-modal="true"
          >
            <button
              className={styles["close-btn"]}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className={styles["callback-title"]}>Request a Callback</h3>
            <p className={styles["callback-sub"]}>
              Fill out the form below and we’ll call you within 24 hours.
            </p>

            <form
              className={styles["callback-form"]}
              onSubmit={handleCallbackSubmit}
            >
              {/* <label className={styles["label"]}>Name *</label> */}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={callbackData.name}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
                style={{marginTop:"5px", marginBottom:"5px"}}
              />

              {/* <label className={styles["label"]}>Company Name *</label> */}
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={callbackData.companyName}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
                   style={{marginTop:"5px", marginBottom:"5px"}}
              />

              {/* <label className={styles["label"]}>Phone *</label> */}
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                value={callbackData.phone}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
                   style={{marginTop:"5px", marginBottom:"5px"}}
              />

              {/* <label className={styles["label"]}>Email *</label> */}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={callbackData.email}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
                style={{marginTop:"5px", marginBottom:"5px"}}
              />

              {/* <label className={styles["label"]}>City *</label> */}
              <input
                type="text"
                name="city"
                placeholder="City"
                value={callbackData.city}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
                style={{marginTop:"5px", marginBottom:"5px"}}
              />

              {/* <label className={styles["label"]}>Subject *</label> */}
              <input
                type="text"
                name="subject"
                placeholder="Service / Subject"
                value={callbackData.subject}
                onChange={handleCallbackChange}
                required
                className={styles["input"]}
                style={{marginTop:"5px", marginBottom:"5px"}}
              />

              {/* <label className={styles["label"]}>Message</label> */}
              <textarea
                name="message"
                placeholder="Your message"
                rows={3}
                value={callbackData.message}
                onChange={handleCallbackChange}
                className={styles["textarea"]}
                style={{marginTop:"5px", marginBottom:"5px"}}
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
