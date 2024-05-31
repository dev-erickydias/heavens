"use client";
import "./hero.css";
import CustomImage from "@/components/customImage/CustomImage";
import headerImage from "@/assets/vector_full.png";
import CustomButton from "@/components/customButton/CustomButton";
import { redirect } from "next/navigation";

export default function Hero() {
  function redirectToSchedule(e) {
    window.open(
      "https://pt.zappysoftware.com/m/SELL?&goback=1&lang=pt-PT&t=20231014#pro"
    );
  }

  function redirectToContact(){
    redirect("/contacto")
  }

  return (
    <section className="header__hero">
      <div className="header__hero__text">
        <h1 className="header__hero__text__title">
          Desperte sua autenticidade!
        </h1>
        <p className="header__hero__text__description">
          Liberte sua beleza com estilo e confiança.
        </p>
        <div className="header__hero__btn">
          <CustomButton
            onClick={redirectToSchedule}
            className="header__hero__text__button"
          >
           Agende Aqui
          </CustomButton>
          <CustomButton onClick={redirectToContact}>Entre em contato</CustomButton>
        </div>
      </div>
      <CustomImage
        className={"header__hero__image"}
        src={headerImage}
        alt={"Menina com Madeixas Feito no proprio salão"}
      />
    </section>
  );
}
