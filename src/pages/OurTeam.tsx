import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OurTeam.module.css";

const teamMembers = [
  {
    name: "Harish J N",
    role: "Founder & Managing Director",
    img: "/images/harish.jpg",
  },
  {
    name: "Anjana DR",
    role: "Operation Manager",
    img: "/images/anjana.jpg",
  },
  {
    name: "Lisha KR",
    role: "Strategic Analyst & Business Development Manager",
    img: "/images/lisha.jpg",
  },
  {
    name: "Person 4",
    role: "Marketing Lead",
    img: "/images/person4.jpg",
  },
  {
    name: "Person 5",
    role: "UI/UX Designer",
    img: "/images/person5.jpg",
  },
  {
    name: "Person 6",
    role: "Full Stack Developer",
    img: "/images/person6.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="team-section">
      <Container>
        <Row className="g-5">
          {teamMembers.map((member, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="text-center">
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} className="team-img" />
                </div>
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role">{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
