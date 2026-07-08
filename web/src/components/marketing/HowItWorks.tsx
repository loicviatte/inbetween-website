"use client";

import { useEffect, useRef, useState } from "react";

const WAVE = [8, 14, 20, 11, 18, 22, 9, 15, 21, 12, 17, 8, 13, 19, 10, 16, 22, 11, 14, 9, 18, 12, 20, 10];

const STEPS = [
  {
    n: 1,
    title: "Clip on. Teach.",
    body: "Your coach wears the Clip and taps once. The whole lesson is captured without anyone touching a phone or breaking flow.",
  },
  {
    n: 2,
    title: "Every correction, extracted.",
    body: "The app listens to the lesson and pulls out each correction, word for word, tied to the figure it belongs to.",
  },
  {
    n: 3,
    title: "You train your points in between lessons.",
    body: "Each day surfaces one focus point from your last lesson. A few minutes of drilling, and the next session starts ahead.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const steps = Array.from(section.querySelectorAll<HTMLElement>(".hstep"));
    if (!steps.length) return;
    let tick = false;

    function update() {
      tick = false;
      const mid = window.innerHeight / 2;
      let best = steps[0];
      let bestD = Infinity;
      for (const s of steps) {
        const r = s.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = s;
        }
      }
      setStep(Number(best.dataset.step));
    }
    function onScroll() {
      if (!tick) {
        tick = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section hiw" id="how" data-step={step} ref={sectionRef}>
      <div className="container">
        <div className="hiw-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>From spoken correction to muscle memory.</h2>
        </div>
        <div className="hiw-grid">
          <div className="hiw-visual" aria-hidden="true">
            {/* step 1 — clip on a dark card */}
            <div className="hv hv-1">
              <div className="hv-card grain">
                <div className="glow" />
                <div className="clip-device">
                  <span className="cd-mic" />
                  <span className="cd-led" />
                  <span className="cd-engrave">InBetween</span>
                </div>
                <div className="hv-tag">
                  Recording <b>· lesson in progress</b>
                </div>
              </div>
            </div>
            {/* step 2 — speech → focus point */}
            <div className="hv hv-2">
              <div className="hv-extract">
                <div className="quote-card">
                  <div className="who">Your coach · 14:32</div>
                  <p className="words">
                    &ldquo;Push from the standing foot, earlier, before the weight
                    transfer.&rdquo;
                  </p>
                  <div className="wave">
                    {WAVE.map((h, i) => (
                      <span key={i} style={{ height: `${h}px`, "--i": i } as React.CSSProperties} />
                    ))}
                  </div>
                </div>
                <div className="extract-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M12 4v14m0 0l-5-5m5 5l5-5" />
                  </svg>
                </div>
                <div className="focus-chip">
                  <span className="fc-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <span>
                    <span className="fc-kind">Focus point · Rumba walks</span>
                    <span className="fc-name">Push foot, earlier drive</span>
                  </span>
                </div>
              </div>
            </div>
            {/* step 3 — readiness card */}
            <div className="hv hv-3">
              <div className="hv-ready">
                <div className="hv-ready-head">
                  <span className="hv-ready-k">Get ready · Next private</span>
                  <span className="hv-ready-tag">Solo</span>
                </div>
                <div className="hv-ready-top">
                  <span className="hv-pct">
                    <span className="ring" style={{ "--p": 60 } as React.CSSProperties} />
                    <b>60%</b>
                  </span>
                  <span className="hv-ready-msg">
                    <b>Almost ready for your next private.</b>
                    <p>Train your focus points between lessons, ~14 min to go.</p>
                  </span>
                </div>
                <div className="hv-fp-label">Focus points</div>
                <div className="hv-fp done">
                  <span className="ring" style={{ "--p": 100, "--c": "#5BA876" } as React.CSSProperties} />
                  <span className="hv-fp-txt">
                    Heel Lead Recovery<small>Critical focus · from last private</small>
                  </span>
                  <b>3/3</b>
                </div>
                <div className="hv-fp">
                  <span className="ring" style={{ "--p": 50 } as React.CSSProperties} />
                  <span className="hv-fp-txt">
                    Side Lead Initiation<small>Important focus · from last private</small>
                  </span>
                  <b>1/2</b>
                </div>
              </div>
            </div>
          </div>

          <div className="hiw-steps">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className={`hstep ${step === s.n ? "is-active" : ""}`}
                data-step={s.n}
              >
                <span className="idx">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hiw-head { text-align: center; max-width: 720px; margin: 0 auto clamp(48px, 6vw, 88px); }
        .hiw-head .eyebrow { justify-content: center; margin-bottom: 20px; }
        .hiw-head h2 { font-size: var(--fs-display-lg); letter-spacing: -0.02em; color: var(--ink-1000); margin: 0; }

        .hiw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 96px); align-items: stretch; }
        .hiw-visual { position: sticky; top: calc(50vh - 250px); height: 500px; }
        .hv {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(.96);
          transition: opacity .55s var(--ease-out), transform .55s var(--ease-out);
          pointer-events: none;
        }
        .hiw[data-step="1"] .hv-1,
        .hiw[data-step="2"] .hv-2,
        .hiw[data-step="3"] .hv-3 { opacity: 1; transform: none; }

        .hv-card {
          width: min(420px, 100%); height: 460px;
          background: var(--ink-1000); border-radius: var(--radius-xl);
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 40px 80px -36px rgba(20,20,20,.5);
        }
        .hv-card .glow { position: absolute; inset: 0; background: radial-gradient(70% 70% at 50% 80%, rgba(150,112,42,0.4) 0%, transparent 65%); }
        .hv-1 .clip-device { --cw: 130px; transform: rotate(-7deg); position: relative; }
        .hv-1 .hv-tag { position: absolute; bottom: 26px; left: 0; right: 0; text-align: center; font-size: 13px; color: rgba(247,246,243,.55); font-weight: var(--fw-light); }
        .hv-1 .hv-tag b { color: var(--gold-400); font-weight: var(--fw-medium); }

        .hv-extract { width: min(420px, 100%); display: flex; flex-direction: column; gap: 18px; }
        .quote-card { background: var(--ink-1000); border-radius: var(--radius-lg); padding: 26px 28px; box-shadow: 0 30px 60px -30px rgba(20,20,20,.45); }
        .quote-card .who { font-size: var(--fs-eyebrow); text-transform: uppercase; letter-spacing: var(--tracking-eyebrow); color: rgba(247,246,243,.4); margin-bottom: 12px; font-weight: var(--fw-medium); }
        .quote-card .words { font-size: 19px; font-weight: var(--fw-light); font-style: italic; color: var(--ink-50); line-height: 1.5; margin: 0 0 16px; }
        .wave { display: flex; align-items: center; gap: 3px; height: 22px; }
        .wave span { width: 3px; border-radius: 2px; background: var(--gold-400); opacity: .85; }
        @media (prefers-reduced-motion: no-preference) {
          .hiw[data-step="2"] .wave span { animation: wave-bounce 1.1s var(--ease-in-out) infinite; animation-delay: calc(var(--i) * 70ms); }
        }
        @keyframes wave-bounce { 0%, 100% { transform: scaleY(.45); } 50% { transform: scaleY(1); } }
        .extract-arrow { align-self: center; color: var(--gold-500); }
        .extract-arrow svg { width: 22px; height: 22px; display: block; }
        .focus-chip {
          background: var(--ink-0); border: 1px solid rgba(232,181,48,.45);
          border-radius: var(--radius-lg); padding: 20px 24px;
          display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: center;
          box-shadow: 0 24px 50px -28px rgba(20,20,20,.35);
        }
        .focus-chip .fc-ico { width: 38px; height: 38px; border-radius: 10px; background: rgba(232,181,48,.16); border: 1px solid rgba(232,181,48,.4); display: inline-flex; align-items: center; justify-content: center; color: var(--gold-500); }
        .focus-chip .fc-ico svg { width: 18px; height: 18px; }
        .focus-chip .fc-kind { font-size: 11px; text-transform: uppercase; letter-spacing: var(--tracking-eyebrow); color: var(--gold-500); font-weight: var(--fw-medium); display: block; margin-bottom: 3px; }
        .focus-chip .fc-name { font-size: 16px; font-weight: var(--fw-demibold); color: var(--ink-1000); }

        .hv-3 .hv-ready { width: min(420px, 100%); background: var(--ink-0); border: 1px solid rgba(232,181,48,.4); border-radius: var(--radius-xl); padding: 26px 28px 22px; box-shadow: 0 40px 80px -32px rgba(20,20,20,.45); }
        .hv-ready-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
        .hv-ready-k { font-size: 11px; text-transform: uppercase; letter-spacing: var(--tracking-eyebrow); color: var(--gold-500); font-weight: var(--fw-medium); }
        .hv-ready-tag { font-size: 11px; font-weight: var(--fw-medium); color: #8A6A1E; background: rgba(232,181,48,.16); border: 1px solid rgba(232,181,48,.4); border-radius: var(--radius-pill); padding: 3px 12px; }
        .hv-ready-top { display: flex; gap: 16px; align-items: center; margin-bottom: 22px; }
        .hv-pct { position: relative; width: 62px; height: 62px; flex-shrink: 0; }
        .hv-pct .ring { width: 62px; }
        .hv-pct b { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: var(--fw-demibold); color: var(--ink-1000); }
        .hv-ready-msg b { display: block; font-size: 16px; font-weight: var(--fw-demibold); color: var(--ink-1000); line-height: 1.3; margin-bottom: 4px; }
        .hv-ready-msg p { font-size: 13px; color: var(--ink-500); font-weight: var(--fw-light); line-height: 1.5; margin: 0; }
        .hv-fp-label { font-size: 11px; text-transform: uppercase; letter-spacing: var(--tracking-eyebrow); color: var(--ink-400); font-weight: var(--fw-medium); margin-bottom: 4px; }
        .hv-fp { display: flex; align-items: center; gap: 13px; padding: 12px 0; border-top: 1px solid rgba(20,20,20,.08); }
        .hv-fp .ring { width: 30px; }
        .hv-fp-txt { display: flex; flex-direction: column; font-size: 15px; font-weight: var(--fw-medium); color: var(--ink-1000); }
        .hv-fp-txt small { font-size: 11px; color: var(--ink-400); font-weight: var(--fw-light); margin-top: 2px; }
        .hv-fp b { margin-left: auto; font-size: 13px; color: var(--gold-500); font-weight: var(--fw-demibold); }
        .hv-fp.done b { color: #5BA876; }

        .hiw-steps { display: flex; flex-direction: column; }
        .hstep { min-height: 420px; display: flex; flex-direction: column; justify-content: center; padding: 40px 0; opacity: .25; transition: opacity .5s var(--ease-out); }
        .hstep.is-active { opacity: 1; }
        .hstep .idx { font-family: var(--font-display); font-size: 60px; font-weight: var(--fw-demibold); color: var(--gold-500); line-height: 1; letter-spacing: -0.02em; margin-bottom: 24px; display: block; }
        .hstep h3 { font-size: var(--fs-h2); color: var(--ink-1000); margin-bottom: 14px; letter-spacing: -0.01em; }
        .hstep p { color: var(--ink-500); font-weight: var(--fw-light); font-size: 16px; line-height: 1.7; max-width: 420px; margin: 0; }

        @media (max-width: 900px) {
          .hiw-grid { grid-template-columns: 1fr; }
          .hiw-visual { display: none; }
          .hstep { min-height: 0; padding: 32px 0; opacity: 1; }
          .hstep .idx { font-size: 44px; margin-bottom: 14px; }
        }
      `}</style>
    </section>
  );
}
