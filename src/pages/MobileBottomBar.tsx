import { FaWhatsapp, FaPhoneAlt, FaComments } from "react-icons/fa";
import styles from "./MobileBottomBar.module.css";

export default function MobileBottomBar() {
  // store the full international number once (no "+" for wa.me)
  const countryCode = "91"; // change if needed
  const localNumber = "9900566466"; // your number
  const intlNumber = `${countryCode}${localNumber}`; // e.g. 919900566466
  const telHref = `tel:+${intlNumber}`; // tel: uses "+" prefix
  const waHref = `https://wa.me/${intlNumber}`; // wa.me must NOT include "+"

  return (
    <div className={styles["mobile-bottom-bar"]}>
      <a
        href={waHref}
        className={styles["bottom-btn"]}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={18} />
        <span>WhatsApp</span>
      </a>

      <a
        href={telHref}
        className={styles["bottom-btn"]}
        aria-label="Call now"
        title="Call now"
      >
        <FaPhoneAlt size={16} />
        <span>Call Now</span>
      </a>

      <div
        className={`${styles["bottom-btn"]} ${styles["online-status"]}`}
        role="status"
        aria-live="polite"
        title="Online chat status"
      >
        <FaComments size={20} style={{ marginBottom: "2px" }} />
        <span>Online</span>
      </div>
    </div>
  );
}
