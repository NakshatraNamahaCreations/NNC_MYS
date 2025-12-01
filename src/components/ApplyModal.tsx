'use client';

import React, { useEffect, useMemo, useState } from 'react';

const LOCATIONS = ['Mysore', 'Bangalore', 'Hyderabad', 'Remote'] as const;
type Location = typeof LOCATIONS[number];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
};

export default function ApplyModal({ isOpen, onClose, jobTitle }: Props) {
  const [fullName, setFullName]       = useState('');
  const [email, setEmail]             = useState('');
  const [phone, setPhone]             = useState('');
  const [location, setLocation]       = useState<Location>('Bangalore');
  const [position, setPosition]       = useState(jobTitle || 'React Native Developer');
  const [currentCTC, setCurrentCTC]   = useState('');
  const [expectedCTC, setExpectedCTC] = useState('');
  const [resume, setResume]           = useState<File | null>(null);
  const [submitting, setSubmitting]   = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  // keep position synced with incoming jobTitle
  useEffect(() => {
    setPosition(jobTitle || 'React Native Developer');
  }, [jobTitle]);

  // reset form when closing/opening
  useEffect(() => {
    if (!isOpen) {
      setFullName('');
      setEmail('');
      setPhone('');
      setLocation('Bangalore');
      setPosition(jobTitle || 'React Native Developer');
      setCurrentCTC('');
      setExpectedCTC('');
      setResume(null);
      setSubmitting(false);
      setMsg(null);
    }
  }, [isOpen, jobTitle]);

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

  const gmailComposeUrl = (jobTitleLocal: string) => {
    const subject = `Application for ${jobTitleLocal}`;
    const bodyLines = [
      'Hello Hiring Team,',
      '',
      `I would like to apply for the ${jobTitleLocal} position.`,
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

    if (!fullName || !email || !phone || !position) {
      setMsg({ type: 'error', text: 'Please fill all required fields.' });
      return;
    }
    if (!resume) {
      setMsg({ type: 'error', text: 'Please attach your resume (PDF/DOC/DOCX, up to 4MB).' });
      return;
    }

    setSubmitting(true);

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

    // open default mail app
    window.location.href = mailto;

    setMsg({
      type: 'info',
      text:
        'Your email client has opened. Please attach your resume file in the compose window before sending. (Browsers cannot attach files automatically via mailto.)',
    });

    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="apply-modal-backdrop" role="dialog" aria-modal="true">
      <div className="apply-modal-card">
        <button
          type="button"
          className="apply-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="apply-modal-title">Apply for {position}</h3>
        <p className="apply-modal-sub">
          Fill your details and upload your resume (PDF/DOC/DOCX, max 4MB). On submit, we’ll open your email client with everything prefilled—just attach the file and send.
        </p>

        {msg && (
          <div
            role="alert"
            className={`apply-modal-alert ${msg.type}`}
          >
            {msg.text}{' '}
            {msg.type !== 'error' && (
              <>
                {' '}|{' '}
                <a
                  href={gmailComposeUrl(position)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-modal-link"
                >
                  Use Gmail instead
                </a>
              </>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="apply-modal-form">
          <div className="grid-2">
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

          <div className="grid-2">
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
              readOnly={!!jobTitle}
            />
          </div>

          <div className="grid-2">
            <div>
              <label className="form-label">Current CTC (in LPA)*</label>
              <input
                className="form-control"
                placeholder="e.g., 6.0"
                value={currentCTC}
                onChange={e => setCurrentCTC(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Expected CTC (in LPA)*</label>
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
              Upload Resume* <span style={{ color: '#ef4444' }}>(max 4MB; PDF/DOC/DOCX)</span>
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

          <div className="apply-modal-actions">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-dark"
              disabled={submitting}
              style={{ minWidth: 200 }}
            >
              {submitting ? 'Submitting…' : 'Submit Application ↗'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
