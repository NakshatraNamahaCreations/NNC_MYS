import React from "react";
import "./WhyChooseUs.module.css"; // Custom CSS if needed

const features = [
  {
    title: "Dedicated and personalized",
    highlight: "web development",
    description:
      "We value making things and always give our best to create unique websites and achieve great outcomes.",
    points: [
      "+ Focus on your needs",
      "+ Tailored to your business",
      "+ Personalized attention",
    ],
    borderClass: "border-bottom",
  },
  {
    title: "High quality at a",
    highlight: "reasonable cost",
    description:
      "Our streamlined processes and optimized resource allocation enable us to deliver high-quality web development solutions as per global standards.",
    points: [
      "+ Affordable prices",
      "+ High-quality work",
      "+ Value for your money",
    ],
    borderClass: "border-bottom border-start border-end",
  },
  {
    title: "Real-time project",
    highlight: "tracking",
    description:
      "We prioritize transparent communication with our clients by providing real-time report tracking.",
    points: [
      "+ Stay up-to-date",
      "+ See your project progress",
      "+ Be involved in the process",
    ],
    borderClass: "border-bottom",
  },
  {
    title: "Ongoing",
    highlight: "support",
    description:
      "We believe in providing ongoing support to our clients in maintaining and optimizing their websites.",
    points: [
      "+ Help when you need it",
      "+ Answer your questions",
      "+ Make sure you're happy",
    ],
    borderClass: "",
  },
  {
    title: "Dynamic and responsive",
    highlight: "website",
    description:
      "We strive to exceed client expectations with our reliable and accessible web development services.",
    points: [
      "+ Looks great on any device",
      "+ Works seamlessly",
      "+ Keeps your visitors engaged",
    ],
    borderClass: "border-start border-end",
  },
  {
    title: "Performance",
    highlight: "readiness",
    description:
      "We use smart tools to make websites easy to use and navigate for users.",
    points: ["+ Built to last", "+ Scalable and secure", "+ Ready for the future"],
    borderClass: "",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className={`feature-box h-100 ${feature.borderClass}`}>
              <h3>
                {feature.title} <span className="d-block">{feature.highlight}</span>
              </h3>
              <p>{feature.description}</p>
              <ul className="feature-list">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
