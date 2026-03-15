"use client";
import "./contatoForm.css";
import Link from "next/link";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function ContactForm() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section
      id="contact"
      className={`contact ${isVisible ? "contact--visible" : ""}`}
      ref={ref}
    >
      <div className="contact__inner">
        {/* Left – info & socials */}
        <div className="contact__info">
          <span className="contact__label">Fale Conosco</span>
          <h2 className="contact__title">
            Vamos Cuidar do<br />Seu Cabelo Juntos
          </h2>
          <p className="contact__description">
            Tire suas dúvidas, agende seu horário ou simplesmente venha nos
            conhecer. Estamos sempre prontos para ajudá-la a descobrir a melhor
            versão do seu cabelo.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail__label">Localização</span>
                <span className="contact__detail__value">Lisboa, Portugal</span>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail__label">Email</span>
                <span className="contact__detail__value">cbeheavenshair@gmail.com</span>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail__label">Horário</span>
                <span className="contact__detail__value">Seg–Sáb · 9h–19h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right – CTA cards */}
        <div className="contact__actions">
          <Link
            href="https://wa.me/351912345678"
            target="_blank"
            className="contact__card contact__card--whatsapp"
          >
            <div className="contact__card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="contact__card__body">
              <span className="contact__card__title">WhatsApp</span>
              <span className="contact__card__text">Resposta rápida e direta</span>
            </div>
            <span className="contact__card__arrow">→</span>
          </Link>

          <Link
            href="https://www.instagram.com/cbheavenshair/"
            target="_blank"
            className="contact__card contact__card--instagram"
          >
            <div className="contact__card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div className="contact__card__body">
              <span className="contact__card__title">Instagram</span>
              <span className="contact__card__text">Veja nossos trabalhos</span>
            </div>
            <span className="contact__card__arrow">→</span>
          </Link>

          <Link
            href="https://www.facebook.com/cbheavenshair/"
            target="_blank"
            className="contact__card contact__card--facebook"
          >
            <div className="contact__card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="contact__card__body">
              <span className="contact__card__title">Facebook</span>
              <span className="contact__card__text">Acompanhe as novidades</span>
            </div>
            <span className="contact__card__arrow">→</span>
          </Link>

          <Link
            href="mailto:cbeheavenshair@gmail.com"
            className="contact__card contact__card--email"
          >
            <div className="contact__card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="contact__card__body">
              <span className="contact__card__title">Email</span>
              <span className="contact__card__text">cbeheavenshair@gmail.com</span>
            </div>
            <span className="contact__card__arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
