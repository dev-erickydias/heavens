"use client";
import NavMenuItem from "../header/navMenuItem/NavMenuItem";
import "./popupMenu.css";
import CustomButton from "../customButton/CustomButton";

export default function PopupMenu() {
  function closePopup() {
    document.querySelector(".popup").classList.remove("popup_opened");
  }
  function redirectToSchedule(e) {
    window.open(
      "https://pt.zappysoftware.com/m/SELL?&goback=1&lang=pt-PT&t=20231014#pro"
    );
  }
  return (
    <div class="popup" id="popup-card-form">
      <div onClick={closePopup} class="overlay" id="overlay-add"></div>
      <div className="popup__container">
        <CustomButton className="nav__btn_close"  onClick={closePopup}>X</CustomButton>
        <ul className="popup__nav__menu">
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="/">
            Home
          </NavMenuItem>
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="#servicos">
            Serviços
          </NavMenuItem>
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="/cursos">
            Cursos
          </NavMenuItem>
          <NavMenuItem onClick={closePopup} className={"popup__link"} href="#contact">
            contactos
          </NavMenuItem>
        </ul>
        <CustomButton onClick={redirectToSchedule} className="popup__btn">Agende Aqui</CustomButton>
      </div>
    </div>
  );
}
