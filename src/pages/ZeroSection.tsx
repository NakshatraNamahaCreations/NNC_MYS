"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ZeroSection.module.css";

export default function ZeroSection() {
  return (
    <section className={`${styles.collaborateSection} position-relative`}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-6 text-white z-1">
            <h2 className="fw-bold mb-3">
              Let&apos;s Collaborate for <br /> Mutual Success
            </h2>
            <p className="mb-4" style={{ color: "#fff" }}>
              Discuss your mobile app requirements with our team & get the finest fit for your
              business.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              {/* Link to Contact Us page */}
              <Link href="/contact-us" className="btn btn-light fw-semibold">
                🗨️ Talk to our Experts
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className={styles.blankColumn}>
              <div className={styles.imgMaxHeight}></div>
              <Image
                src="/images/contactus.jpg"
                alt="Contact Us"
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
        alt="Circle Graphic"
        width={300}
        height={300}
        className={styles.circleImg}
      />
    </section>
  );
}
