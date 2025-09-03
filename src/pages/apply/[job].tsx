'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

const LOCATIONS = ['Mysore', 'Bangalore', 'Hyderabad', 'Remote'] as const;
type Location = typeof LOCATIONS[number];

export default function ApplyJobPage() {
  const router = useRouter();
  const jobSlug = typeof router.query.job === 'string' ? router.query.job : '';

  const jobTitleFromSlug = useMemo(() => {
    if (!jobSlug) return '';
    return jobSlug
      .split('-')
      .map(p => (p ? p[0].toUpperCase() + p.slice(1) : p))
      .join(' ');
  }, [jobSlug]);

  // form state
  const [fullName, setFullName]       = useState('');
  const [email, setEmail]             = useState('');
  const [phone, setPhone]             = useState('');
  const [location, setLocation]       = useState<Location>('Bangalore');
  const [position, setPosition]       = useState(jobTitleFromSlug || 'React Native Developer');
  const [currentCTC, setCurrentCTC]   = useState('');
  const [expectedCTC, setExpectedCTC] = useState('');
  const [resume, setResume]           = useState<File | null>(null);
  const [submitting, setSubmitting]   = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  useEffect(() => {
    // when the slug becomes available (CSR on dynamic route)
    if (jobTitleFromSlug) setPosition(jobTitleFromSlug);
  }, [jobTitleFromSlug]);

  // Validate & accept resume (PDF/DOC/DOCX, max 4MB)
  const onResumeChange = (file?: File) => {
    if (!file) {
      setResume(null);
      return;
    }
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowed.includes(file.type)) {
      setMsg({ type: 'error', text: 'Please upload PDF, DOC, or DOCX only.' });
      setResume(null);
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setMsg({ type: 'error', text: 'Resume must be under 4MB.' });
      setResume(null);
      return;
    }
    setMsg(null);
    setResume(file);
  };

  const ORG_EMAIL = 'info@nakshatranamahacreations.com';

  const gmailComposeUrl = (jobTitle: string) => {
    const subject = `Application for ${jobTitle}`;
    const bodyLines = [
      'Hello Hiring Team,',
      '',
      `I would like to apply for the ${jobTitle} position.`,
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
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const su = encodeURIComponent(subject);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      ORG_EMAIL
    )}&su=${su}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    // basic validation
    if (!fullName || !email || !phone || !position) {
      setMsg({ type: 'error', text: 'Please fill all required fields.' });
      return;
    }
    if (!resume) {
      setMsg({ type: 'error', text: 'Please attach your resume (PDF/DOC/DOCX, up to 4MB).' });
      return;
    }

    setSubmitting(true);

    // Build mailto (attachments cannot be added via mailto)
    const subject = `Application for ${position}`;
    const body = [
      'Hello Hiring Team,',
      '',
      `I would like to apply for the ${position} position.`,
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
      fullName,
    ].join('\n');

    const mailto = `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailto;

    // Friendly reminder that they must attach the file manually
    setMsg({
      type: 'info',
      text:
        'Your email client has opened. Please attach your resume file in the compose window before sending. (Browsers cannot attach files automatically via mailto.)',
    });

    setSubmitting(false);
  };

  return (
    <main className="container" style={{ maxWidth: 840, padding: '40px 16px' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
        Apply for {position}
      </h1>
      <p style={{ marginBottom: 24 }}>
        Fill your details and upload your resume (PDF/DOC/DOCX, max 4MB). On submit, we’ll open your email client with everything prefilled—just attach the file and send.
      </p>

      {msg && (
        <div
          role="alert"
          style={{
            marginBottom: 16,
            padding: '12px 16px',
            borderRadius: 8,
            border:
              msg.type === 'success'
                ? '1px solid #22c55e'
                : msg.type === 'error'
                ? '1px solid #ef4444'
                : '1px solid #0ea5e9',
            background:
              msg.type === 'success'
                ? '#ecfdf5'
                : msg.type === 'error'
                ? '#fef2f2'
                : '#f0f9ff',
            color:
              msg.type === 'success'
                ? '#166534'
                : msg.type === 'error'
                ? '#991b1b'
                : '#075985',
          }}
        >
          {msg.text}{' '}
          {msg.type !== 'error' && (
            <>
              {' '}|{' '}
              <a
                href={gmailComposeUrl(position)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
                title="Open Gmail compose"
              >
                Use Gmail instead
              </a>
            </>
          )}
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
            readOnly={!!jobTitleFromSlug}
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
            onChange={e => onResumeChange(e.target.files?.[0] || undefined)}
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
          Tip: After your email window opens, attach the same file you selected above and click send.
        </div>
      </form>
    </main>
  );
}
