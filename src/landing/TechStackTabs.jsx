"use client";
import { useState } from "react";
import styles from "./TechStackTabsPremium.module.css";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiCakephp,
  SiPhp,
  SiDjango,
  SiFastapi,
  SiStrapi,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiNginx,
  SiApache,
  SiGit,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiMagento,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiLinux,
} from "react-icons/si";

import {
  FaAws,
  FaServer,
  FaCodeBranch,
  FaCloud,
} from "react-icons/fa";

import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithub,
} from "react-icons/si";

const techData = {
  frontend: {
    label: "Frontend",
    color: "#2563eb",
    items: [
      { name: "React.js", icon: <SiReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    ],
  },

  backend: {
    label: "Backend",
    color: "#16a34a",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express", icon: <SiExpress />, color: "#444444" },
 
    //   { name: "Laravel", icon: <SiLaravel />, color: "#ff2d20" },
    //   { name: "CakePHP", icon: <SiCakephp />, color: "#d33c43" },
      { name: "PHP", icon: <SiPhp />, color: "#777bb4" },
    //   { name: "Django", icon: <SiDjango />, color: "#092e20" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
    //   { name: "Python", icon: <SiPython />, color: "#3776ab" },
      { name: "Strapi", icon: <SiStrapi />, color: "#4945ff" },
    ],
  },

  mobile: {
    label: "Mobile Development",
    color: "#9333ea",
    items: [
      { name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
      { name: "Android", icon: <SiAndroid />, color: "#3ddc84" },
      { name: "iOS", icon: <SiApple />, color: "#000000" },
    ],
  },

  database: {
    label: "Database",
    color: "#0f766e",
    items: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    ],
  },

cloud: {
  label: "Cloud & DevOps",
  color: "#ea580c",
  items: [
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    // { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    // { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    // { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
    { name: "GitHub", icon: <SiGithub />, color: "#000000" },
    { name: "Server / Nginx", icon: <FaServer />, color: "#009639" },
    // { name: "Cloud Infra", icon: <FaCloud />, color: "#0EA5E9" },
    // { name: "CI / CD", icon: <FaCodeBranch />, color: "#F97316" },
  ],
},







};

export default function TechStackTabs() {
const [active, setActive] = useState("frontend");


  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Technology Stack Trusted for Performance & Growth
        </h2>

        {/* TABS */}
        <div className={styles.tabsWrapper}>
  <div className={styles.tabs}>
    {Object.entries(techData).map(([key, tab]) => (
      <button
        key={key}
        onClick={() => setActive(key)}
        className={`${styles.tab} ${active === key ? styles.active : ""}`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>


        {/* CONTENT */}
        <div className={styles.grid}>
          {techData[active].items.map((tech, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.icon}
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
