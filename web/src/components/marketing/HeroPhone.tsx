import "./app-demo.css";
import { HERO_PHONE_MARKUP } from "./heroPhoneMarkup";

/**
 * The hero's phone mockup: a STATIC render of the app's Train screen — the same
 * CSS mockup used in "The App" demo (beat 01), so the hero shows the real
 * product UI rather than a flat image. Non-interactive (ids stripped so it never
 * clashes with the live demo lower on the page).
 */
export function HeroPhone() {
  return (
    <>
      <div
        className="hero-phone"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: HERO_PHONE_MARKUP }}
      />
      <style>{`
        .hero-phone { display: flex; justify-content: center; width: 100%; }
        .hero-phone .phone { width: min(340px, 84vw); }
        /* static mockup — kill any interactive affordances */
        .hero-phone .phone [type="button"],
        .hero-phone .phone a,
        .hero-phone .phone .ph-start,
        .hero-phone .phone .tr-alt { cursor: default; pointer-events: none; }
      `}</style>
    </>
  );
}
