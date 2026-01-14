"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./WebsitePopupForm.module.css";

export default function WebsitePopupForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNo: "",
    service: "",
    city: "",
    referenceFrom: "popup",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // 🔥 Open popup on page load / refresh
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phoneNo") {
      const numeric = value.replace(/\D/g, "");
      if (numeric.length <= 10) {
        setFormData((p) => ({ ...p, [name]: numeric }));
      }
      return;
    }

    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!/^[6-9]\d{9}$/.test(formData.phoneNo))
      newErrors.phoneNo = "Invalid phone number";
    if (!formData.service) newErrors.service = "Select a service";
    if (!formData.city.trim()) newErrors.city = "City is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("/api/enquiries", {
        ...formData,
        sourceDomain: "nakshatra.in",
      });

      setShow(false);
      router.push("/thankyou");
    } catch (err) {
      alert("Submission failed");
    }
  };

  if (!show) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <button
          className={styles.popupClose}
          onClick={() => setShow(false)}
        >
          ×
        </button>

        <h4 className={styles.popupTitle}>Let’s Collaborate</h4>
        <p className={styles.popupSubtitle}>
          Tell us about your project
        </p>

        <form onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.popupInput}`}
            name="name"
            placeholder="Name *"
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}

         

          <input
            className={`form-control ${styles.popupInput}`}
            name="phoneNo"
            placeholder="Phone Number *"
            onChange={handleChange}
          />
          {errors.phoneNo && (
            <small className="text-danger">{errors.phoneNo}</small>
          )}

          <input
            className={`form-control ${styles.popupInput}`}
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <select
            className={`form-control ${styles.popupInput}`}
            name="service"
            onChange={handleChange}
          >
            <option value="">Select Service *</option>
            <option>Web Development</option>
            <option>App Development</option>
            <option>Digital Marketing</option>
            <option>Corporate Video</option>
            <option>2D Animations</option>
          </select>
          {errors.service && (
            <small className="text-danger">{errors.service}</small>
          )}

           <input
            className={`form-control ${styles.popupInput}`}
            name="companyName"
            placeholder="Company Name *"
            onChange={handleChange}
          />
          {errors.companyName && (
            <small className="text-danger">{errors.companyName}</small>
          )}
          
          <input
            className={`form-control ${styles.popupInput}`}
            name="city"
            placeholder="City *"
            onChange={handleChange}
          />
          {errors.city && (
            <small className="text-danger">{errors.city}</small>
          )}

          <button
            type="submit"
            className={`btn btn-dark ${styles.popupSubmit}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
