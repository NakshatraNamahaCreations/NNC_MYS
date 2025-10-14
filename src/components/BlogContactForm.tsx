"use client";

import React, { useEffect, useState } from "react";
import { Card, FloatingLabel, Button, Form } from "react-bootstrap";
import { usePathname, useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

type ServiceName =
  | "Web Development"
  | "App Development"
  | "Graphic Designing"
  | "Digital Marketing"
  | "Corporate Video Production"
  | "B2B Marketing Service"
  | "2D Animations";

interface FormData {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_service: ServiceName | "";
  referenceFrom: "blog";
  city: "Bangalore";
}

interface FormErrors {
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  user_service?: string;
}

const BlogContactForm: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    referenceFrom: "blog",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    const serviceMap: Record<string, ServiceName> = {
      "/website-development-company-in-bangalore": "Web Development",
      "/mobile-app-development-company-in-bangalore": "App Development",
      "/graphic-design-company-in-bangalore": "Graphic Designing",
      "/digital-marketing-agency-in-bangalore": "Digital Marketing",
      "/corporate-video-production-company-in-bangalore":
        "Corporate Video Production",
      "/b2b-marketing-agency-in-bangalore": "B2B Marketing Service",
      "/2d-animation-studio-in-bangalore": "2D Animations",
    };

    const detectedService = pathname ? serviceMap[pathname] : undefined;
    if (detectedService) {
      setFormData((prev) => ({ ...prev, user_service: detectedService }));
    }
  }, [pathname]);

  // ✅ For inputs / textareas
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, user_phone: numericValue }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ For the select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      user_service: value as ServiceName | "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user_name, user_phone, user_service, user_email } = formData;
    const errors: FormErrors = {};

    // Name validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!user_name || !nameRegex.test(user_name.trim())) {
      errors.user_name =
        "Please enter a valid name (only letters, at least 3 characters).";
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = new Set([
      "0000000000",
      "1234567890",
      "0123456789",
      "9999999999",
      "8888888888",
      "7777777777",
      "6666666666",
    ]);

    if (
      !user_phone ||
      !phoneRegex.test(user_phone) ||
      repeatedDigitsRegex.test(user_phone) ||
      invalidPhones.has(user_phone)
    ) {
      errors.user_phone = "Please enter a valid 10-digit mobile number.";
    }

    // Service validation
    if (!user_service) {
      errors.user_service = "Please select a service.";
    }

    // Email validation (optional)
    if (user_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user_email)) {
        errors.user_email = "Please enter a valid email address.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response: AxiosResponse = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: user_name,
          email: user_email || undefined,
          phoneNo: user_phone,
          service: user_service,
          referenceFrom: formData.referenceFrom,
          city: formData.city,
        }
      );

      if (response.status === 200 || response.status === 201) {
        router.push("/thankyou");
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          user_service: "",
          referenceFrom: "blog",
          city: "Bangalore",
        });
        setFormErrors({});
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry. Please check console for details.");
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
      <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: "black" }}>
        Contact Us
      </h3>

      <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: "black" }}>
        <FloatingLabel controlId="floatingName" label="Name *" className="mb-3">
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleInputChange}
            required
          />
        </FloatingLabel>
        {formErrors.user_name && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_name}
          </div>
        )}

        <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-3">
          <Form.Control
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleInputChange}
            maxLength={10}
            required
          />
        </FloatingLabel>
        {formErrors.user_phone && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_phone}
          </div>
        )}

        <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={formData.user_email}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        {formErrors.user_email && (
          <div style={{ color: "red", fontSize: "10px", marginBottom: "4px" }}>
            {formErrors.user_email}
          </div>
        )}

        <Form.Select
          name="user_service"
          value={formData.user_service}
          onChange={handleSelectChange}
          required
          className="mb-3"
        >
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="Corporate Video Production">Corporate Video Production</option>
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

export default BlogContactForm;
