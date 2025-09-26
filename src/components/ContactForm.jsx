"use client";

import { useEffect, useState } from "react";
import { Card, FloatingLabel, Button, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import axios from "axios";

const ContactForm = () => {
  const router = useRouter(); // Use Next.js router for navigation

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    referenceFrom: "website", // Static value
    city: "Bangalore", // Static value
  });

  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
  });

  useEffect(() => {
    const currentPath = window.location.pathname; // safer for Next.js client-side
    let service = "";

    if (
      currentPath === "/website-development-company-in-bangalore" ||
      currentPath === "/website-development-company-in-hyderabad"
    ) {
      service = "Web Development";
    } else if (
      currentPath === "/mobile-app-development-company-in-bangalore" ||
      currentPath === "/mobile-app-development-company-hyderabad"
    ) {
      service = "App Development";
    } else if (
      currentPath === "/graphic-design-company-in-bangalore" ||
      currentPath === "/graphic-design-services-hyderabad"
    ) {
      service = "Graphic Designing";
    } else if (
      currentPath === "/digital-marketing-agency-in-bangalore" ||
      currentPath === "/digital-marketing-agency-hyderabad"
    ) {
      service = "Digital Marketing";
    } else if (
      currentPath === "/corporate-video-production-company-in-bangalore" ||
      currentPath === "/corporate-video-production-company-hyderabad"
    ) {
      service = "Corporate Video Production";
    } else if (
      currentPath === "/b2b-marketing-agency-in-bangalore" ||
      currentPath === "/b2b-marketing-company-hyderabad"
    ) {
      service = "B2B Marketing Service";
    } else if (
      currentPath === "/2d-animation-studio-in-bangalore" ||
      currentPath === "/2d-animation-studio-hyderabad"
    ) {
      service = "2D Animations";
    }
     else if (
  currentPath === "/software-development-company-in-bangalore" ||
  currentPath === "/software-development-company-in-bangalore"
) {
  service = "Software Development";
}

    setFormData((prev) => ({
      ...prev,
      user_service: service,
    }));
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, ""); // Allow only digits
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, ""); // Allow only letters and spaces
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { user_name, user_phone, user_service, user_email } = formData;

    // Name validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!user_name || !nameRegex.test(user_name.trim())) {
      errors.user_name =
        "Please enter a valid name (only letters, min 3 characters).";
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = [
      "0000000000",
      "1234567890",
      "0123456789",
      "9999999999",
      "8888888888",
      "7777777777",
      "6666666666",
    ];

    if (
      !user_phone ||
      !phoneRegex.test(user_phone) ||
      repeatedDigitsRegex.test(user_phone) ||
      invalidPhones.includes(user_phone)
    ) {
      errors.user_phone = "Please enter a valid 10-digit mobile number.";
    }

    // Service validation
    if (!user_service) {
      errors.user_service = "Please select a service.";
    }

    // Optional Email validation
    if (user_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user_email)) {
        errors.user_email = "Please enter a valid email address.";
      }
    }

    // Show errors if any
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: user_name,
          email: user_email,
          phoneNo: user_phone, // Renamed to match previous backend schema
          service: user_service,
          referenceFrom: "website",
          city: "Bangalore",
        }
      );

      if (response.status === 201 || response.status === 200) {
        router.push("/thankyou"); // Use Next.js router to navigate
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          user_service: "",
          referenceFrom: "website",
          city: "Bangalore",
        });
        setFormErrors({});
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry. Please check the console for details.");
    }
  };

  return (
    <Card.Body
      style={{
        backgroundColor: "white",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <h3
        className="text-center mb-3"
        style={{ fontWeight: "bold", color: "black" }}
      >
        Contact Us
      </h3>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column"
        style={{ color: "black" }}
      >
        <FloatingLabel controlId="floatingName" label="Name *" className="mb-3">
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        {formErrors.user_name && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_name}
          </div>
        )}

        <FloatingLabel
          controlId="floatingPhone"
          label="Phone Number *"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleChange}
            maxLength={10}
            required
          />
        </FloatingLabel>
        {formErrors.user_phone && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_phone}
          </div>
        )}

        <FloatingLabel
          controlId="floatingEmail"
          label="Email Address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={formData.user_email}
            onChange={handleChange}
          />
        </FloatingLabel>
        {formErrors.user_email && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_email}
          </div>
        )}

        <Form.Select
          name="user_service"
          disabled // Prevent manual selection
          value={formData.user_service}
          onChange={handleChange}
          required
          className="mb-3"
        >
          <option value={formData.user_service}>
            {formData.user_service || "Select a Service"}
          </option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="Corporate Video Production">
            Corporate Video Production
          </option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="2D Animations">2D Animations</option>
          <option value="B2B Marketing Service">B2B Marketing Service</option>
        </Form.Select>
        {formErrors.user_service && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_service}
          </div>
        )}

        <Button variant="dark" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </Card.Body>
  );
};

export default ContactForm;
