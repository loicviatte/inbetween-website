import Image from "next/image";

export function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone-wrap">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-tilt">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1440}
          sizes="(max-width: 768px) 280px, 380px"
          priority
          className="phone-img"
        />
      </div>

      <style>{`
        .phone-wrap {
          position: relative;
          perspective: 1600px;
          width: 100%;
          max-width: 380px;
          isolation: isolate;
        }

        .phone-glow {
          position: absolute;
          inset: -40% -30% -20% -40%;
          background:
            radial-gradient(55% 45% at 30% 50%, rgba(232, 181, 48, 0.28) 0%, rgba(232, 181, 48, 0.12) 35%, transparent 70%),
            radial-gradient(40% 40% at 80% 30%, rgba(246, 210, 122, 0.18) 0%, transparent 70%);
          filter: blur(30px);
          z-index: -1;
          pointer-events: none;
          animation: glow-breathe 6s ease-in-out infinite;
        }

        @keyframes glow-breathe {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .phone-tilt {
          position: relative;
          transform: rotateY(-14deg) rotateX(4deg) rotateZ(-1.5deg);
          transform-style: preserve-3d;
          transition: transform 700ms var(--ease-spring);
          will-change: transform;
        }
        .phone-tilt:hover {
          transform: rotateY(-8deg) rotateX(2deg) rotateZ(-0.8deg) translateY(-12px);
        }

        .phone-img {
          position: relative;
          width: 100%;
          height: auto;
          display: block;
          filter:
            drop-shadow(0 30px 50px rgba(0, 0, 0, 0.55))
            drop-shadow(-20px 40px 80px rgba(232, 181, 48, 0.15))
            drop-shadow(0 80px 60px rgba(0, 0, 0, 0.35));
        }

        @media (max-width: 768px) {
          .phone-wrap { max-width: 280px; }
          .phone-tilt { transform: rotateY(-8deg) rotateX(2deg) rotateZ(-0.5deg); }
          .phone-tilt:hover { transform: rotateY(-5deg) rotateX(1deg) translateY(-6px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-tilt, .phone-glow { transition: none; animation: none; }
        }
      `}</style>
    </div>
  );
}
