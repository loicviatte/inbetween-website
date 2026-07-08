export function Statement() {
  return (
    <section className="section statement">
      <div className="container reveal">
        <h2>
          Every correction becomes a <span className="g">focus point.</span>
        </h2>
        <p>
          Every hip correction, timing note and technique cue your coach gives is
          gone by the drive home. InBetween turns each one into a clear, trainable
          focus point, so the space between lessons becomes where you improve.
        </p>
      </div>

      <style>{`
        .statement { text-align: center; }
        .statement h2 {
          font-size: var(--fs-display-lg);
          letter-spacing: -0.02em;
          color: var(--ink-1000);
          max-width: 820px;
          margin: 0 auto 20px;
        }
        .statement h2 .g { color: var(--gold-500); }
        .statement p {
          color: var(--ink-500);
          font-weight: var(--fw-light);
          font-size: var(--fs-lead);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
