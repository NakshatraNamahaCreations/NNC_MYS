"use client";

import Image from "next/image";
import styles from "./ZeroSection.module.css";

export default function ZeroSection() {
  return (
    <section className={`${styles.collaborateSection} position-relative`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-white z-1">
            <h2 className="fw-bold mb-3">
              Let's Collaborate for <br /> Mutual Success
            </h2>
            <p className="mb-4">
              Discuss your mobile app requirements with our team & get the finest fit for your
              business.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <button
                className="btn btn-light fw-semibold"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                🗨️ Talk to our Experts
              </button>
              <button
                className="btn btn-outline-light fw-semibold"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                👨‍💼 Hire our Experts
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className={styles.blankColumn}>
              <div className={styles.imgMaxHeight}></div>
              <Image
                src="/images/contactus.jpg"
                alt="dots"
                width={120}
                height={120}
                className={styles.dotImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <Image
        src="/images/contactus.jpg"
        alt="Collaboration"
        width={600}
        height={400}
        className={`${styles.collabImg} position-absolute bottom-0 end-0 img-fluid`}
      />
      <Image
        src="/assets/circle.png"
        alt="circle"
        width={300}
        height={300}
        className={styles.circleImg}
      />
    </section>
  );
}
