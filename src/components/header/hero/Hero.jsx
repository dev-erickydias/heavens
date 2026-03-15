'use client';
import './hero.css';
import CustomImage from '../../customImage/CustomImage';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__badge">
          <span className="hero__badge__dot"></span>
          Especialistas em Cabelos Afro
        </span>
        <h1 className="hero__title">
          <span className="hero__title__line hero__title__line--cursive">Desperte sua</span>
          <span className="hero__title__line hero__title__line--bold">Autenticidade</span>
        </h1>
        <p className="hero__subtitle">
          Mais de 14 anos a transformar e realçar a beleza natural dos cabelos
          crespos, cacheados e ondulados em Lisboa.
        </p>
        <div className="hero__cta">
          <Link href="/agendar" className="btn-primary hero__btn--main">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
            </svg>
            Agende Aqui
          </Link>
          <Link href="#contact" className="btn-secondary hero__btn--contact">
            Fale Conosco
          </Link>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat__number">14+</span>
            <span className="hero__stat__label">Anos de experiência</span>
          </div>
          <div className="hero__stat__divider"></div>
          <div className="hero__stat">
            <span className="hero__stat__number">500+</span>
            <span className="hero__stat__label">Clientes satisfeitos</span>
          </div>
          <div className="hero__stat__divider"></div>
          <div className="hero__stat">
            <span className="hero__stat__number">Lisboa</span>
            <span className="hero__stat__label">Portugal</span>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__image-frame">
          <CustomImage
            className="hero__image"
            src="/Vector_full.png"
            alt="Menina com madeixas feitas no Heavens Hair"
          />
          <div className="hero__image-accent"></div>
        </div>
      </div>
    </section>
  );
}
