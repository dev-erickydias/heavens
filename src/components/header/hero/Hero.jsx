"use client";
import "./hero.css";
import CustomImage from "../../customImage/CustomImage";
import CustomButton from "../../customButton/CustomButton";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Hero() {
  function redirectToSchedule(e) {
    window.open(
      "https://pt.zappysoftware.com/m/SELL?&goback=1&lang=pt-PT&t=20231014#pro"
    );
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
          <Link href="#contact"><CustomButton className="header__hero__text__button-contato ">Entre em contato</CustomButton></Link>
        </div>
      </div>
      <CustomImage
        className={"header__hero__image"}
        src="/Vector_full.png"
        alt={"Menina com Madeixas Feito no proprio salão"}
      />
    </section>
  );
}
