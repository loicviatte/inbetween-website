"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      el.showModal();
    } else {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => setOpen(false);
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) setOpen(false);
  }

  function handleOpen() {
    setStatus("idle");
    setError("");
    setOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <>
      <button className="contact-link" onClick={handleOpen}>
        Contact
      </button>

      <dialog ref={dialogRef} className="contact-dialog" onClick={handleBackdropClick}>
        <div className="contact-card">
          <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>

          {status === "success" ? (
            <div className="success-state">
              <div className="success-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="card-title">Message sent</h2>
              <p className="card-sub">We'll get back to you as soon as possible.</p>
              <button className="close-text-btn" onClick={() => setOpen(false)}>Close</button>
            </div>
          ) : (
            <>
              <h2 className="card-title">Get in touch</h2>
              <p className="card-sub">A question, an idea, a partnership. We read everything.</p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label className="field-label" htmlFor="c-name">Name</label>
                    <input
                      id="c-name"
                      className="field-input"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      disabled={status === "loading"}
                      autoComplete="name"
                    />
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="c-email">Email</label>
                    <input
                      id="c-email"
                      className="field-input"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    className="field-input field-textarea"
                    placeholder="What's on your mind?"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    disabled={status === "loading"}
                    rows={4}
                  />
                </div>

                {error && <p className="form-error">{error}</p>}

                <button className="submit-btn" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>

      <style>{`
        .contact-link {
          appearance: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          color: rgba(247, 246, 243, 0.7);
          transition: color 150ms var(--ease-out);
        }
        .contact-link:hover { color: var(--gold-500); }

        .contact-dialog {
          background: transparent;
          border: none;
          padding: 0;
          max-width: 100vw;
          max-height: 100vh;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .contact-dialog:not([open]) { display: none; }
        .contact-dialog::backdrop {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: bd-in 220ms var(--ease-out) both;
        }
        @keyframes bd-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .contact-card {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 20px;
          hyphens: none;
          padding: 36px 32px 32px;
          border-radius: 22px;
          background: linear-gradient(155deg, rgba(26, 22, 14, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 1px solid rgba(232, 181, 48, 0.18);
          box-shadow:
            0 32px 64px -16px rgba(0,0,0,0.85),
            0 0 0 1px rgba(255,255,255,0.04),
            inset 0 1px 0 rgba(255,255,255,0.05);
          animation: card-in 260ms var(--ease-spring) both;
        }
        @keyframes card-in {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        .close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          appearance: none;
          background: rgba(247, 246, 243, 0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(247, 246, 243, 0.45);
          cursor: pointer;
          transition: all 150ms var(--ease-out);
        }
        .close-btn:hover {
          background: rgba(247,246,243,0.1);
          color: var(--ink-50);
        }

        .card-title {
          margin: 0 0 6px;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .card-sub {
          margin: 0 0 24px;
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(247,246,243,0.5);
        }

        /* ---- Form ---- */
        .contact-form { display: flex; flex-direction: column; gap: 14px; }

        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .field { display: flex; flex-direction: column; gap: 6px; }

        .field-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(247,246,243,0.45);
        }

        .field-input {
          width: 100%;
          padding: 11px 14px;
          background: rgba(247,246,243,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          font-family: inherit;
          font-size: 14px;
          color: var(--ink-50);
          transition: border-color 150ms var(--ease-out), background 150ms var(--ease-out);
          resize: none;
        }
        .field-input::placeholder { color: rgba(247,246,243,0.25); }
        .field-input:focus {
          outline: none;
          border-color: rgba(232,181,48,0.5);
          background: rgba(247,246,243,0.09);
        }
        .field-input:disabled { opacity: 0.55; cursor: not-allowed; }
        .field-textarea { line-height: 1.5; }

        .form-error {
          margin: 0;
          font-size: 13px;
          color: #D06A5A;
        }

        .submit-btn {
          height: 48px;
          padding: 0 24px;
          background: var(--gold-500);
          color: var(--ink-950);
          border: none;
          border-radius: 10px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 150ms var(--ease-out);
          box-shadow: 0 4px 16px -4px rgba(232,181,48,0.4);
        }
        .submit-btn:hover:not(:disabled) {
          background: var(--gold-400);
          transform: translateY(-1px);
        }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* ---- Success ---- */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 12px 0 8px;
        }
        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(232,181,48,0.15), rgba(232,181,48,0.06));
          border: 1px solid rgba(232,181,48,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-400);
          margin-bottom: 18px;
        }
        .success-state .card-sub { margin-bottom: 24px; }
        .close-text-btn {
          appearance: none;
          background: rgba(247,246,243,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 10px 24px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          color: rgba(247,246,243,0.7);
          cursor: pointer;
          transition: all 150ms var(--ease-out);
        }
        .close-text-btn:hover { background: rgba(247,246,243,0.12); color: var(--ink-50); }

        @media (max-width: 520px) {
          .contact-card { padding: 28px 20px 24px; }
          .field-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
