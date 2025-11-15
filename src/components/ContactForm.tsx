"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./ContactForm.module.css"; // import the CSS you provided

type FormData = {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_service: string;
   message: string;    
  referenceFrom: string;
  city: string;
};

type FormErrors = {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_service: string;
};

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    message: "New enquiry received from website contact form.",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
  });

  // ✅ Autofill service based on URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      let service = "";

      if (path.includes("website-development-company")) service = "Web Development";
      else if (path.includes("/service/mobile-app-development-company-in-mysore")) service = "App Development";
         else if (path.includes("/service/mobile-app-development-company")) service = "App Development";
      else if (path.includes("/service/seo-service-company-in-mysore")) service = "Seo Services";
       else if (path.includes("/service/ui-ux-design-company-in-mysore")) service = "UI-UX Design Services";
         else if (path.includes("/service/social-media-marketing-company-in-mysore")) service = "Social Media Marketing";
      else if (path.includes("/service/software-development-company-in-mysore")) service = "Software Development";
      else if (path.includes("/service/ecommerce-website-development-company-in-mysore")) service = "Web Development";
      else if (path.includes("digital-marketing")) service = "Digital Marketing";
      else if (path.includes("corporate-video")) service = "Corporate Video Production";
      else if (path.includes("b2b-marketing")) service = "B2B Marketing Service";
      else if (path.includes("/service/2d-animation-company-in-mysore")) service = "2D Animations";
      else if (path.includes("/software-development")) service = "Software Development";
  else if (path.includes("/service/2d-animation-company")) service = "2D Animation";
else if (path.includes("/service/corporate-ad-film-production-company")) service = "Corporate Video Production";
      else if (path.includes("/service/web-design-company-in-mysore")) service = "Website Development";
        else if (path.includes("/service/website-developers")) service = "Website Development";
      setFormData((prev) => ({ ...prev, user_service: service }));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors: FormErrors = {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_service: "",
    };

    const { user_name, user_phone, user_service, user_email } = formData;

    // validation
    if (!/^[A-Za-z\s]{3,}$/.test(user_name)) errors.user_name = "Enter a valid name (min 3 letters).";
    if (!/^[6-9]\d{9}$/.test(user_phone)) errors.user_phone = "Enter a valid 10-digit mobile number.";
    if (!user_service) errors.user_service = "Service is required.";
    if (user_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
      errors.user_email = "Enter a valid email address.";
    }

    if (Object.values(errors).some((msg) => msg !== "")) {
      setFormErrors(errors);
      return;
    }

 try {
 const response = await axios.post(
  "/api/enquiries", 
  {
    name: user_name,
    email: user_email,
    phoneNo: user_phone,
    service: user_service,
    message: formData.message,
    referenceFrom: formData.referenceFrom,
    city: formData.city,
  },
  {
    headers: { "Content-Type": "application/json" },
  }
);


  if (response.status === 200 || response.status === 201) {
    router.push("/thankyou");
  } else {
    alert("Failed to send enquiry. Please try again.");
  }
} catch (error) {
  console.error("Error sending enquiry:", error);
  alert("Failed to send enquiry.");
}

  };

  return (

      <div className={styles.contactCard}>
        <h3 className={styles.contactHeading}>Let’s Connect</h3>
        <form onSubmit={handleSubmit} noValidate>
          <input
            name="user_name"
            type="text"
            placeholder="Your Name *"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          {formErrors.user_name && <div className="text-danger small">{formErrors.user_name}</div>}

          <input
            name="user_phone"
            type="tel"
            placeholder="Phone Number *"
            value={formData.user_phone}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          {formErrors.user_phone && <div className="text-danger small">{formErrors.user_phone}</div>}

          <input
            name="user_email"
            type="email"
            placeholder="Email *"
            value={formData.user_email}
            onChange={handleChange}
            className="form-control mb-3"
          />
          {formErrors.user_email && <div className="text-danger small">{formErrors.user_email}</div>}

       <select
  name="user_service"
  value={formData.user_service}
  disabled // 🔑 lock the dropdown so user cannot change it
  className="form-select mb-3"
>
  <option value={formData.user_service}>
    {formData.user_service || "Select a Service"}
  </option>
</select>

          {formErrors.user_service && <div className="text-danger small">{formErrors.user_service}</div>}

          <button
            type="submit"
            className="btn w-100"
            style={{
              height: 46,
              borderRadius: 12,
              fontWeight: 700,
              background: "linear-gradient(135deg, rgba(255,90,90,1), rgba(255,64,64,1))",
              color: "#fff",
              boxShadow: "0 8px 18px rgba(255,64,64,.35)",
            }}
          >
            Submit
          </button>
        </form>
      </div>

  );
};

export default ContactForm;
