"use client";
import "./navMenu.css";
import CustomImage from "../../customImage/CustomImage";
import Link from "next/link";

export default function NavMenuMobile({ scrolled }) {
  function openPopup() {
    document.querySelector(".popup").classList.add("popup_opened");
  }

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <Link href="/" className="logo">
        <CustomImage
          className="logo__img"
          src="/logo.svg"
          alt="Heavens Hair"
          width={103}
          height={103}
        />
      </Link>
      <button
        className="menu__hamburger"
        onClick={openPopup}
        aria-label="Abrir menu"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--hh-green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </nav>
  );
}
