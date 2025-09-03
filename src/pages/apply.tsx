'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const LOCATIONS = ['Mysore', 'Bangalore', 'Hyderabad', 'Remote'] as const;
type Location = typeof LOCATIONS[number];

export default function ApplyPage() {
  const router = useRouter();
  const jobParam = typeof router.query.job === 'string' ? router.query.job : '';

  // Turn "React Native Developer" or "react-native-developer" into a nice title
  const jobTitle = useMemo(() => {
    if (!jobParam) return 'General Application';
    const words = jobParam.includes('-') ? jobParam.split('-') : jobParam.split(' ');
    return words.map(w => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');
  }, [jobParam]);

  // form state
  const [fullName, setFullName]       = useState('');
  const [email, setEmail]             = useState('');
  const [phone, setPhone]             = useState('');
  const [location, setLocation]       = useState<Location>('Bangalore');
  const [position, setPosition]       = useState(jobTitle);
  const [currentCTC, setCurrentCTC]   = useState('');
  const [expectedCTC, setExpectedCTC] = useState('');
  const [resume, setResume]           = useState<File | null>(null);
  const [submitting, setSubmitting]   = useState(false);
  const [msg, setMsg] = useState<{ type: 'error'; text: string } | null>(null);

  // keep position synced if the query changes
  useEffect(() => setPosition(jobTitle), [jobTitle]);

  // Robust resume validator
  const onResumeChange = (file?: File) => {
    if (!file) {
      setResume(null);
      return;
    }

    // Allow multiple PDF/DOC(DOCX) MIME variants + fallback to extension
    const allowedMime = new Set([
      'application/pdf',
      'application/x-pdf',
      'application/acrobat',
      'applications/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-word.document.macroEnabled.12',
      'application/octet-stream', // some browsers/devices report this
    ]);
    const allowedExt = new Set(['pdf', 'doc', 'docx']);

    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const typeOk = file.type ? allowedMime.has(file.type) : false;
    const extOk = allowedExt.has(ext);

    if (!typeOk && !extOk) {
      setMsg({ type: 'error', text: 'Please upload a PDF, DOC, or DOCX file.' });
      setResume(null);
      return;
    }

    // Max 4 MB
    if (file.size > 4 * 1024 * 1024) {
      setMsg({ type: 'error', text: 'Resume must be under 4MB.' });
      setResume(null);
      return;
    }

    setMsg(null);
    setResume(file);
  };

  const ORG_EMAIL = 'info@nakshatranamahacreations.com';

  const gmailComposeUrl = (title: string) => {
    const subject = `Application for ${title}`;
    const body = [
      'Hello Hiring Team,',
      '',
      `I would like to apply for the ${title} position.`,
      'Please find my resume attached.',
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Location: ${location}`,
      `Current CTC (LPA): ${currentCTC || '-'}`,
      `Expected CTC (LPA): ${expectedCTC || '-'}`,
      '',
      'Thanks,',
      fullName || '',
    ].join('\n');

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      ORG_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    if (!fullName || !email || !phone || !position) {
      setMsg({ type: 'error', text: 'Please fill all required fields.' });
      return;
    }
    if (!resume) {
      setMsg({ type: 'error', text: 'Please attach your resume (PDF/DOC/DOCX, up to 4MB).' });
      return;
    }

    setSubmitting(true);

    // Open Gmail compose in a new tab (prefilled). No info banner.
    const url = gmailComposeUrl(position);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Popup blocked – open in same tab
      window.location.href = url;
    }

    setSubmitting(false);
  };

  return (
    <main className="container" style={{ maxWidth: 840, padding: '40px 16px', marginTop: '100px' }}>
      <Head>
        <title>Apply {jobTitle ? `— ${jobTitle}` : ''}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
        Apply for {position}
      </h1>
      <p style={{ marginBottom: 24 }}>
        Fill your details and upload your resume (PDF/DOC/DOCX, max 4MB). On submit, we’ll open Gmail
        with everything prefilled—just attach the file and send.
      </p>

      {msg && (
        <div
          role="alert"
          style={{
            marginBottom: 16,
            padding: '12px 16px',
            borderRadius: 8,
            border: '1px solid #ef4444',
            background: '#fef2f2',
            color: '#991b1b',
          }}
        >
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label className="form-label">Full Name*</label>
            <input
              className="form-control"
              placeholder="Enter your full name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Email Address*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label className="form-label">Phone Number*</label>
            <input
              className="form-control"
              placeholder="Enter your phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Location*</label>
            <select
              className="form-select"
              value={location}
              onChange={e => setLocation(e.target.value as Location)}
            >
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="form-label">Position Applied For*</label>
          <input
            className="form-control"
            value={position}
            onChange={e => setPosition(e.target.value)}
            readOnly={!!jobParam}  // lock if it came from Careers page
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label className="form-label">Current CTC (in LPA)</label>
            <input
              className="form-control"
              placeholder="e.g., 6.0"
              value={currentCTC}
              onChange={e => setCurrentCTC(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Expected CTC (in LPA)</label>
            <input
              className="form-control"
              placeholder="e.g., 9.0"
              value={expectedCTC}
              onChange={e => setExpectedCTC(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="form-label">
            Upload Resume*{' '}
            <span style={{ color: '#ef4444' }}>(max 4MB; PDF/DOC/DOCX)</span>
          </label>
          <input
            id="resume"
            type="file"
            className="form-control"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={e => {
              const f = e.target.files?.[0];
              onResumeChange(f);
              // allow re-selecting the same file (reset input)
              e.currentTarget.value = '';
            }}
          />
          {resume && (
            <small className="text-muted">
              Selected: {resume.name} ({Math.round(resume.size / 1024)} KB)
            </small>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-dark"
          disabled={submitting}
          style={{ height: 56, fontSize: 18, borderRadius: 9999 }}
        >
          {submitting ? 'Submitting…' : 'Submit Application ↗'}
        </button>

        <div style={{ fontSize: 12, color: '#6b7280' }}>
          Note: Gmail (or any email client) cannot receive your file automatically via URL.
          After the compose window opens, attach the same file and click send.
        </div>
      </form>
    </main>
  );
}
  