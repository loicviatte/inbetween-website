const { useState, useEffect } = React;

function App() {
  const [day, setDay] = useState(5);
  const [tab, setTab] = useState('train');
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setTime(`${hours}:${minutes.toString().padStart(2, '0')}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const Bell = ({ color = '#0A0A0A' }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );

  const Arrow = ({ color = '#F7F6F3', w = 14 }) => (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );

  const Chevron = ({ color }) => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );

  // Nav icons
  const ProfileIcon = ({ active }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#F7F6F3' : 'rgba(10,10,10,0.45)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const TrainIcon = ({ active }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#F7F6F3' : 'rgba(10,10,10,0.45)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );

  const LogIcon = ({ active }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? '#F7F6F3' : 'rgba(10,10,10,0.45)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  const days = [
    { l: 'M', dots: [] },
    { l: 'T', dots: ['#2E4670', '#7FB77E'] },
    { l: 'W', dots: [] },
    { l: 'T', dots: ['#7FB77E', '#2E4670'] },
    { l: 'F', dots: [] },
    { l: 'S', dots: [] },
    { l: 'S', dots: [] },
  ];

  // Cream-surface ink tokens (warm-neutral)
  const INK = '#0A0A0A';
  const INK2 = 'rgba(10,10,10,0.72)';
  const INK3 = 'rgba(10,10,10,0.45)';
  const INK4 = 'rgba(10,10,10,0.30)';
  const LINE = 'rgba(10,10,10,0.09)';
  const LINE2 = 'rgba(10,10,10,0.05)';
  const TILE = 'rgba(255,255,255,0.55)';

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(135% 95% at 85% 108%, #F9DF9B 0%, #F7F6F3 44%, #EDEBE4 94%)',
      color: INK,
      fontFamily: '"TT Travels Next", ui-sans-serif, system-ui, sans-serif',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* grain texture */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--grain-url, none)', backgroundSize: '220px', opacity: .3, mixBlendMode: 'multiply', pointerEvents: 'none' }} />

      {/* Status bar spacer - pushes content below the frame's status bar */}
      <div style={{ height: 62 }} />

      {/* scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 90 }}>
        {/* top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px 12px', position: 'relative' }}>
          <button style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(255,255,255,0.55)', border: `1px solid ${LINE}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', position: 'relative',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          }}>
            <Bell color={INK} />
            {/* notification dot */}
            <div style={{ position: 'absolute', top: 9, right: 9, width: 6, height: 6, borderRadius: '50%', background: '#E8B530', boxShadow: '0 0 0 1.5px #F7F6F3' }} />
          </button>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            backgroundImage: 'url(avatar.png)', backgroundSize: 'cover', backgroundPosition: '62% 30%',
            boxShadow: '0 0 0 2px rgba(247,246,243,0.9), 0 0 0 3px rgba(240,194,74,0.35), 0 6px 14px -4px rgba(232,181,48,.35)',
            position: 'relative',
          }} />
        </div>

        {/* TODAY'S FOCUS card — dark/gold hero */}
        <div style={{
          margin: '0 18px 12px',
          background: 'radial-gradient(130% 115% at 85% 118%, #4A3A18 0%, #1F1810 40%, #0A0A0A 85%)',
          border: '1px solid rgba(240,194,74,0.28)',
          borderRadius: 22,
          padding: '16px 20px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 22px 60px -22px rgba(10,10,10,.55), 0 2px 6px rgba(10,10,10,.12)',
        }}>
          {/* inner gold-tinted highlight */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none', boxShadow: 'inset 0 1px 0 rgba(255,220,140,0.12)' }} />

          {/* header row: eyebrow pill + session counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '5px 11px',
              background: '#E8B530', color: '#0A0A0A',
              borderRadius: 999,
              fontSize: 10, letterSpacing: '.16em', fontWeight: 600, textTransform: 'uppercase',
            }}>Today's Focus</div>
            <div style={{
              fontSize: 10, letterSpacing: '.16em', fontWeight: 500,
              color: 'rgba(247,246,243,0.5)', textTransform: 'uppercase',
              fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
            }}>01 / 04</div>
          </div>

          <div style={{ marginTop: 12, fontSize: 32, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#fff' }}>Go extreme</div>
          <div style={{ marginTop: 4, fontSize: 11, color: 'rgba(247,246,243,0.48)', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 500 }}>1st Session · 18 min</div>

          <div style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.5, color: 'rgba(247,246,243,0.8)', fontWeight: 300, maxWidth: 320, letterSpacing: '-.005em' }}>
            Push movement to extremes, embrace mistakes, and trust your body over logic.
          </div>

          <button style={{
            width: '100%', marginTop: 12,
            background: '#E8B530', color: '#F7F6F3',
            border: 0, padding: '11px 20px', borderRadius: 12,
            fontFamily: 'inherit', fontWeight: 600, fontSize: 14.5, letterSpacing: '-.005em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
            cursor: 'pointer',
            boxShadow: '0 1px 0 rgba(255,255,255,0.15) inset, 0 -1px 0 rgba(0,0,0,0.12) inset',
            transition: 'all 120ms cubic-bezier(.2,.7,.2,1)',
          }}>Start Now <Arrow w={15} /></button>
        </div>

        {/* "or" divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 28px 10px' }}>
          <div style={{ flex: 1, height: 1, background: LINE2 }} />
          <div style={{ fontSize: 10, color: INK3, letterSpacing: '.08em', textTransform: 'uppercase', fontStyle: 'italic', fontWeight: 300 }}>or</div>
          <div style={{ flex: 1, height: 1, background: LINE2 }} />
        </div>

        {/* 3 focus option tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: '0 18px', marginBottom: 14 }}>
          {[
            { eye: 'Try Instead', title: 'Hip Settlement' },
            { eye: 'Coming Up', title: 'Body Movement' },
            { eye: '', title: 'All Points', only: true },
          ].map((c, i) => (
            <button key={i} style={{
              background: TILE, border: `1px solid ${LINE}`, borderRadius: 12, padding: '10px 11px 11px',
              minHeight: 72, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              alignItems: 'stretch', textAlign: 'left',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              cursor: 'pointer', position: 'relative', fontFamily: 'inherit',
            }}>
              {c.eye ? <div style={{ fontSize: 8.5, color: INK3, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 500 }}>{c.eye}</div> : <div style={{ height: 10 }} />}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 4 }}>
                <div style={{ fontSize: c.only ? 11 : 13, fontWeight: 600, color: INK, letterSpacing: c.only ? '.06em' : '-.015em', lineHeight: 1.15, textTransform: c.only ? 'uppercase' : 'none' }}>{c.title}</div>
                <Chevron color={INK3} />
              </div>
            </button>
          ))}
        </div>

        {/* THIS WEEK */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px 8px' }}>
          <div style={{ fontSize: 10, color: INK2, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 500 }}>This week</div>
          <div style={{ flex: 1, height: 1, background: LINE2 }} />
          <div style={{ fontSize: 10, color: INK3, letterSpacing: '.05em' }}>Apr 14 – 20</div>
        </div>

        {/* day grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5, padding: '0 18px', marginBottom: 10 }}>
          {days.map((d, i) => {
            const selected = i === day;
            return (
              <button key={i} onClick={() => setDay(i)} style={{
                height: 44,
                background: selected ? '#0A0A0A' : TILE,
                border: selected ? '1px solid #0A0A0A' : `1px solid ${LINE}`,
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', cursor: 'pointer',
                color: selected ? '#F7F6F3' : INK2,
                fontSize: 14, fontWeight: 600, letterSpacing: '-.01em',
                fontFamily: 'inherit',
                boxShadow: selected ? '0 4px 12px -4px rgba(10,10,10,.45)' : 'none',
                transition: 'all 120ms cubic-bezier(.2,.7,.2,1)',
              }}>
                {d.l}
                {d.dots.length > 0 && (
                  <div style={{ position: 'absolute', bottom: 5, display: 'flex', gap: 3 }}>
                    {d.dots.map((c, j) => (
                      <div key={j} style={{ width: 3.5, height: 3.5, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* stats row */}
        <div style={{
          margin: '0 18px 20px', background: TILE,
          border: `1px solid ${LINE}`, borderRadius: 12,
          padding: '10px 0 11px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        }}>
          {[{ n: 3, l: 'Training' }, { n: 2, l: 'Class' }, { n: 3, l: 'Focus Trained' }].map((s, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              borderRight: i < 2 ? `1px solid ${LINE}` : 'none',
            }}>
              <div style={{ fontSize: 24, fontWeight: 600, color: INK, letterSpacing: '-.03em', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 9, color: INK3, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 24,
        paddingLeft: 18,
        paddingRight: 18,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          background: 'rgba(255,255,255,0.45)',
          borderRadius: 999,
          padding: '4px',
          border: `1px solid ${LINE}`,
          boxShadow: '0 2px 8px rgba(10,10,10,0.08), 0 1px 2px rgba(10,10,10,0.06)',
          width: '100%',
          maxWidth: 366,
        }}>
          {[
            { id: 'profile', label: 'PROFILE' },
            { id: 'train', label: 'TRAIN' },
            { id: 'log', label: 'LOG' },
          ].map(({ id, label }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  padding: '9px 12px',
                  background: active ? '#0A0A0A' : 'transparent',
                  color: active ? '#F7F6F3' : INK3,
                  border: 0,
                  borderRadius: 999,
                  fontFamily: 'inherit',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '.08em',
                  cursor: 'pointer',
                  transition: 'all 150ms cubic-bezier(.2,.7,.2,1)',
                  boxShadow: active ? '0 1px 3px rgba(10,10,10,0.25)' : 'none',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <div style={{
    minHeight: '100vh', background: '#0A0A0A',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 40,
  }}>
    <IOSDevice>
      <App />
    </IOSDevice>
  </div>
);
