"use client";
import { useState, useEffect } from "react";
import "./navMenu.css";
import NavMenuItem from "../navMenuItem/NavMenuItem";
import CustomImage from "../../customImage/CustomImage";
import CustomButton from "../../customButton/CustomButton";
import NavMenuMobile from "./navMenuMobile";

export default function NavMenu() {
  const redirectToSchedule = (e) => {
    e.preventDefault();
    window.open("https://pt.zappysoftware.com/m/SELL?&goback=1&lang=pt-PT&t=20231014#pro");
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 200 && window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <NavMenuMobile />
      ) : (
        <nav className="nav">
          <div className="logo">
            <CustomImage
              className="logo__img"
              src="/logo.svg"
              alt="Logo"
              width={103}
              height={103}
            />
          </div>
          <ul className="header__nav__menu">
            <NavMenuItem className={"header__menu__item"} href="/">Home</NavMenuItem>
            <NavMenuItem className={"header__menu__item"} href="/#servicos">Serviços</NavMenuItem>
            <NavMenuItem className={"header__menu__item"} href="/cursos">Cursos</NavMenuItem>
            <NavMenuItem className={"header__menu__item"} href="#contact">Contactos</NavMenuItem>
          </ul>
          <CustomButton onClick={redirectToSchedule} className="nav__btn">
            Agende Aqui
          </CustomButton>
        </nav>
      )}
    </>
  );
}
