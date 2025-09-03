import { FaWhatsapp, FaPhoneAlt, FaComments } from "react-icons/fa";
import styles from "./MobileBottomBar.module.css";

export default function MobileBottomBar() {
  return (
    <div className={styles["mobile-bottom-bar"]}>
      <a
        href="https://wa.me/9900566466"
        className={styles["bottom-btn"]}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={18} />
        <span>WhatsApp</span>
      </a>

      <a href="tel:+9900566466" className={styles["bottom-btn"]}>
        <FaPhoneAlt size={16} />
        <span>Call Now</span>
      </a>

      <div className={`${styles["bottom-btn"]} ${styles["online-status"]}`}>
        <FaComments size={20} style={{ marginBottom: "2px" }} />
        <span>Online</span>
      </div>
    </div>
  );
}
