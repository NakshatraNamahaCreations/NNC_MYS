// src/components/CounterWithLottie.tsx
"use client";

import CountUp from "react-countup";
import dynamic from "next/dynamic";
import styles from "./CounterWithLottie.module.css";

// 👇 lazy-load the Player only in the browser
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(m => m.Player),
  { ssr: false }
);

type Stat = { number: number; label: string };

const stats: Stat[] = [
  { number: 500, label: "Project Completed" },
  { number: 8, label: "Years Of Experience" },
  { number: 300, label: "Happy Clients" },
];

export default function CounterWithLottie() {
  return (
    <section className={styles["container"]} style={{ width: "70%", margin: "0 auto" , padding:"100px"}}>
      <div className={styles["row-flex"]}>
        <div className={styles["left"]}>
          <h2 className={styles["heading"]}>
            Creating Outstanding Website Designs <br /> Driven by User Satisfaction
          </h2>

          <div className={styles["counters"]}>
            {stats.map((item) => (
              <div key={item.label} className={styles["stat"]}>
                <h3 className={styles["stat-number"]}>
                  <CountUp end={item.number} duration={2.5} />+
                </h3>
                <p className={styles["stat-label"]}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["lottie-container"]}>
          {/* now safe on client */}
          <LottiePlayer
            autoplay
            loop
            src="https://lottie.host/a090c1e3-ca9d-4b07-8c82-c83e5e280726/nwi76vcccG.json"
            className={styles["player"]}
          />
        </div>
      </div>
      
    </section>
  );
}
