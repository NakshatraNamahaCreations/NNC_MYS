// src/pages/jobs/[slug].tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";                // ✅ add this
import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "./JobDetail.module.css";

// Adjust this import path to your project
import jobDescriptions from "@/data/jobDescriptions";

type JobDescription = {
  title: string;
  type: string;
  experience: string;
  vacancy: number;
  skills: string;
  responsibilities: string[];
  applyLink: string; // e.g. "/apply"
};

type Props = {
  slug: string;
  job: JobDescription | null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(jobDescriptions || {});
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = String(context.params?.slug || "");
  const job =
    (jobDescriptions as Record<string, JobDescription | undefined>)[slug] || null;

  if (!job) {
    return { notFound: true };
  }

  return { props: { slug, job } };
};

export default function JobDetailPage({
  job,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!job) {
    return <p className={styles.notFound}>Job not found.</p>;
  }

  // ✅ Same pattern as Careers: /apply?job=<Job Title>
  const applyHref = `/apply?job=${encodeURIComponent(job.title)}`;

  return (
    <>
      <Head>
        <title>{job.title} — Careers</title>
        <meta name="description" content={`${job.title} — Apply now`} />
      </Head>

      <div
        className={styles["job-modal-overlay"]}
        onClick={() => router.back()}
        role="button"
        aria-label="Close job modal"
      >
        <div
          className={styles["job-modal-content"]}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <button
            className={styles["job-modal-close"]}
            onClick={() => router.back()}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>

          <h2>{job.title}</h2>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Vacancy:</strong> {job.vacancy}</p>
          <p><strong>Skills:</strong> {job.skills}</p>

          <h4>Job Responsibilities</h4>
          <ul className={styles.list}>
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* ✅ Internal navigation with Next Link */}
          <Link href={applyHref} className="btn btn-primary">
            Apply
          </Link>
        </div>
      </div>
    </>
  );
}
