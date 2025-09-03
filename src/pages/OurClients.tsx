// src/components/OurClients.tsx
import React from "react";
import styles from "./OurClients.module.css"; // renamed from OurClients.css -> OurClients.module.css

type Client = {
  id: number;
  frontSrc: string;
  backSrc: string;
  alt: string;
};

const clientsRows: Client[][] = [
  [
    { id: 31, frontSrc: "/images/clients/logo23.webp", backSrc: "/images/clients/logo23.webp", alt: "Client 31" },
    { id: 2, frontSrc: "/images/clients/clientlogo7.jpg", backSrc: "/images/clients/clientlogo7.jpg", alt: "Client 2" },
    { id: 3, frontSrc: "/images/clients/clients1.jpg", backSrc: "/images/clients/clients1.jpg", alt: "Client 3" },
    { id: 4, frontSrc: "/images/clients/clients2.jpg.webp", backSrc: "/images/clients/clients2.jpg.webp", alt: "Client 4" },
    { id: 5, frontSrc: "/images/clients/clients3.jpg.webp", backSrc: "/images/clients/clients3.jpg.webp", alt: "Client 5" },
    { id: 6, frontSrc: "/images/clients/clients4.webp", backSrc: "/images/clients/clients4.webp", alt: "Client 6" },
    { id: 28, frontSrc: "/images/clients/logo20.webp", backSrc: "/images/clients/logo20.webp", alt: "Client 28" },

    { id: 7, frontSrc: "/images/clients/clients5.webp", backSrc: "/images/clients/clients5.webp", alt: "Client 7" },
    { id: 8, frontSrc: "/images/clients/clients6.webp", backSrc: "/images/clients/clients6.webp", alt: "Client 8" },
    { id: 32, frontSrc: "/images/clients/logo25.webp", backSrc: "/images/clients/logo25.webp", alt: "Client 32" },
    { id: 10, frontSrc: "/images/clients/clients8.webp", backSrc: "/images/clients/clients8.webp", alt: "Client 10" },
    { id: 33, frontSrc: "/images/clients/logo26.webp", backSrc: "/images/clients/logo26.webp", alt: "Client 33" },
    { id: 34, frontSrc: "/images/clients/logo27.webp", backSrc: "/images/clients/logo27.webp", alt: "Client 34" },
    { id: 30, frontSrc: "/images/clients/logo22.webp", backSrc: "/images/clients/logo22.webp", alt: "Client 30" },

    { id: 14, frontSrc: "/images/clients/imagecopy3.png", backSrc: "/images/clients/imagecopy3.png", alt: "Client 14" },
    { id: 19, frontSrc: "/images/clients/logo9.jpg", backSrc: "/images/clients/logo9.jpg", alt: "Client 19" },
    { id: 20, frontSrc: "/images/clients/logo10.jpg", backSrc: "/images/clients/logo10.jpg", alt: "Client 20" },
    { id: 26, frontSrc: "/images/clients/logo18.webp", backSrc: "/images/clients/logo18.webp", alt: "Client 26" },
    { id: 27, frontSrc: "/images/clients/logo19.webp", backSrc: "/images/clients/logo19.webp", alt: "Client 27" },
    { id: 23, frontSrc: "/images/clients/logo13.webp", backSrc: "/images/clients/logo13.webp", alt: "Client 23" },
    { id: 29, frontSrc: "/images/clients/logo21.webp", backSrc: "/images/clients/logo21.webp", alt: "Client 29" },

    // duplicates exist in your data; use a safer key below
    { id: 20, frontSrc: "/images/clients/logo10.jpg", backSrc: "/images/clients/logo10.jpg", alt: "Client 20" },
    { id: 21, frontSrc: "/images/clients/logo11.webp", backSrc: "/images/clients/logo11.webp", alt: "Client 21" },
    { id: 22, frontSrc: "/images/clients/logo12.webp", backSrc: "/images/clients/logo12.webp", alt: "Client 22" },
    { id: 23, frontSrc: "/images/clients/logo13.webp", backSrc: "/images/clients/logo13.webp", alt: "Client 23" },
    { id: 24, frontSrc: "/images/clients/logo14.webp", backSrc: "/images/clients/logo14.webp", alt: "Client 24" },
    { id: 25, frontSrc: "/images/clients/logo16.webp", backSrc: "/images/clients/logo16.webp", alt: "Client 25" },
    { id: 28, frontSrc: "/images/crea.jpg", backSrc: "/images/crea.jpg", alt: "Client 28" },
  ],
];

export default function ClientsSection() {
  return (
    <>
      <div className={styles["ourclientsh1"]} >
        <h2>Our Clients</h2>
      </div>

      <section aria-label="Our Clients" className={styles["clients-container"]}>
        {clientsRows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles["clients-row"]}>
            {row.map((client) => (
              <div
                key={`${client.id}-${client.frontSrc}`} // safer key (you had duplicates)
                className={styles["client-col"]}
              >
                <div
                  className={styles["flipper-container"]}
                  tabIndex={0}
                  aria-label={`Client ${client.id} flip card`}
                >
                  <div className={styles["flip"]}>
                    <div className={`${styles["front"]} ${styles["face"]}`}>
                      <img
                        src={client.frontSrc}
                        alt={`${client.alt} front`}
                        loading="lazy"
                        width={219}
                        height={130}
                        draggable={false}
                      />
                    </div>
                    <div className={`${styles["back"]} ${styles["face"]}`}>
                      <img
                        src={client.backSrc}
                        alt={`${client.alt} back`}
                        loading="lazy"
                        width={219}
                        height={130}
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
     
      </section>
    </>
  );
}
