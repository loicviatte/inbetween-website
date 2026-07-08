"use client";

import { useEffect, useState } from "react";
import { ContactModal } from "./ContactModal";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#app", label: "The App" },
  { href: "#clip", label: "The Clip" },
];

/**
 * Sticky marketing nav — transparent over the dark hero, light glass once
 * scrolled. Section anchors + a "Join the waitlist" CTA that returns to the
 * hero form, plus the shared contact dialog. The site footer is left as-is.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-spy: highlight the nav link whose section is crossing the viewport's
  // vertical middle band.
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        setActiveSection(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  function joinClick() {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openContact() {
    setMenuOpen(false);
    setContactOpen(true);
  }

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <a href="/" className="brand" aria-label="InBetween — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-white" src="/images/icon_name_white.png" alt="InBetween" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-black" src="/images/icon_name_black.png" alt="" aria-hidden="true" />
          </a>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={activeSection === l.href.slice(1) ? "active" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => setContactOpen(true)}>
                Contact
              </button>
            </li>
          </ul>
          <div className="nav-cta">
            <button type="button" className="btn btn-gold btn-sm" onClick={joinClick}>
              Join the waitlist
            </button>
            <button
              type="button"
              className={`nav-burger ${menuOpen ? "open" : ""}`}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <button type="button" onClick={openContact}>
          Contact
        </button>
        <button type="button" className="btn btn-gold btn-block" onClick={joinClick}>
          Join the waitlist
        </button>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
