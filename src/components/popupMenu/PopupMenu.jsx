"use client";
import NavMenuItem from "../header/navMenuItem/NavMenuItem";
import "./popupMenu.css";
import Link from "next/link";

export default function PopupMenu() {
  function closePopup() {
    document.querySelector(".popup").classList.remove("popup_opened");
  }

  return (
    <div className="popup" id="popup-card-form">
      <div onClick={closePopup} className="popup__overlay" id="overlay-add" />
      <div className="popup__container">
        <button className="popup__close" onClick={closePopup} aria-label="Fechar menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <ul className="popup__nav">
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="/">
            Início
          </NavMenuItem>
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="#servicos">
            Serviços
          </NavMenuItem>
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="/cursos">
            Cursos
          </NavMenuItem>
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="#contact">
            Contactos
          </NavMenuItem>
        </ul>

        <Link href="/agendar" className="popup__cta btn-primary" onClick={closePopup}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
          </svg>
          Agende Aqui
        </Link>
      </div>
    </div>
  );
}
