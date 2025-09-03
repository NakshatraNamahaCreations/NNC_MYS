"use client";

import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "./MyBreadcrumb.module.css";

type Crumb = { name: string; path?: string };

export default function MyBreadcrumb({
  crumbs,
  includeSchema = true,
}: {
  crumbs: Crumb[];
  includeSchema?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path ?? "",
    })),
  };

  return (
    <>
      {includeSchema && (
        <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      )}

      <nav
        className={`${styles["container53"]} ${styles["navbar-container"]} my-3 d-flex justify-content-between align-items-center`}
        aria-label="breadcrumb"
      >
        <div
          className={`${styles["breadcrumb-wrapper"]} d-flex justify-content-start`}
          aria-label="breadcrumb"
        >
          <Breadcrumb className={styles["breadcrumb"]}>
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <Breadcrumb.Item
                  key={`${crumb.name}-${idx}`}
                  linkAs={!isLast ? Link : undefined}
                  href={!isLast ? crumb.path ?? "#" : undefined}
                  active={isLast}
                >
                  {crumb.name}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </nav>
    </>
  );
}
