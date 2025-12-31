    "use client";

    import { useEffect, useState } from "react";
    import { FaArrowUp } from "react-icons/fa";
    import styles from "./CounterSection.module.css";

    const data = [
    {
        value: 95,
        suffix: "%",
        label: "Client Satisfaction Rate",
        color: "teal",
    },
    {
        value: 500,
        suffix: "+",
        label: "Happy Customers",
        color: "purple",
    },
    {
        value: 100,
        suffix: "%",
        label: "Improved Online Presence",
        color: "orange",
    },
    ];

    export default function CounterSection() {
    return (
        <section className={styles.section}>
        <div className={styles.wrapper}>
            {data.map((item, index) => (
            <CounterItem key={index} {...item} />
            ))}
        </div>
        </section>
    );
    }

    function CounterItem({ value, suffix, label, color }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 1200;
        const step = Math.max(10, Math.floor(duration / end));

        const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
        }, step);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className={styles.card}>
        <div className={styles.topRow}>
         <img
  src="/images/tech/arrow.png"
  alt="growth arrow"
  className={`${styles.arrowImg} ${styles[color]}`}
/>

            <span className={styles.value}>
            {count}
            {suffix}
            </span>
        </div>

        <p className={styles.label}>{label}</p>
        </div>
    );
    }
