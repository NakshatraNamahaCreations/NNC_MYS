// src/pages/services/EcomTypesSection.tsx
import React from "react";
import styles from "./EcomTypesSection.module.css";
import { MdRocketLaunch } from "react-icons/md";
import {
  LuLayoutDashboard,
  LuWarehouse,
  LuShoppingBasket,
  LuNetwork,
  LuPuzzle,
} from "react-icons/lu";
import { FaMobileAlt, FaLock, FaHeadset } from "react-icons/fa";
import type { IconType } from "react-icons";

type Item = {
  title: string;
  description: string;
  Icon: IconType;
};

const ecommerceSteps: Item[] = [
  {
    title: "Custom Website Design for E-commerce",
    description:
      "Our e-commerce design company Mysore will help you stay top among your competitive fellas as we provide an attractive and engaging website, design so aptly that makes it possible for user to leverages all the features.",
    Icon: LuLayoutDashboard,
  },
  {
    title: "Custom E-commerce Store",
    description:
      "Our secure e-commerce web development services in Mysore are customizable that offer solutions to meet all the client’s requirement.",
    Icon: LuWarehouse,
  },
  {
    title: "Shopping Cart Development",
    description:
      "We have expertise in creating robust and feature-rich shopping carts that have been proving to enhance business conversion and revenue.",
    Icon: LuShoppingBasket,
  },
  {
    title: "E-commerce Marketplace Services in India",
    description:
      "We render development services in India for e-commerce marketplace for all enterprises running on multi-platform selling models worldwide.",
    Icon: LuNetwork,
  },
  {
    title: "Module and Plugin Development for E-commerce",
    description:
      "We can help in enriching your e-commerce stores easily with high-end plugins and module development and features advanced functionalities.",
    Icon: LuPuzzle,
  },
  {
    title: "Highly Responsive E-commerce Development",
    description:
      "We build responsive e-commerce website for you to deliver user-friendly experiences irrespective of the kind of device used to operate the platform.",
    Icon: MdRocketLaunch,
  },
  {
    title: "E-commerce Application Development",
    description:
      "Our e-commerce mobile apps are easy to download, install and use; all apps are handy and available on fingertips that increases the business visibility chances.",
    Icon: FaMobileAlt,
  },
  {
    title: "Secure Payment Gateway",
    description:
      "Our multiple payment gateways integration into the e-commerce store development allows secure and reliable online transactions.",
    Icon: FaLock,
  },
  {
    title: "Maintenance and Support",
    description:
      "We offer around the clock maintenance and support e-commerce services in India for ensuring smooth and flawless e-commerce experience for all.",
    Icon: FaHeadset,
  },
];

export default function EcomTypesSection() {
  return (
    <div className={styles["ecommerce-types-wrapper"]}>
      <h2 className={styles["ecommerce-types-title"]}>Types of Web Design</h2>

      <div className={styles["ecommerce-types-grid"]}>
        {ecommerceSteps.map(({ title, description, Icon }, idx) => (
          <div className={styles["ecommerce-types-card"]} key={idx}>
            <div className={styles["ecommerce-types-icon"]}>
              <Icon size={40} />
            </div>
            <h3 className={styles["ecommerce-types-heading"]}>{title}</h3>
            <p className={styles["ecommerce-types-description"]}>
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
