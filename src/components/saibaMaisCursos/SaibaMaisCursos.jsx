"use client";
import "./saibaMaisCursos.css";
import Link from "next/link";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function SaibaMaisCursos() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section
      className={`cursos-cta ${isVisible ? "cursos-cta--visible" : ""}`}
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="cursos-cta__deco cursos-cta__deco--1" />
      <div className="cursos-cta__deco cursos-cta__deco--2" />
      <div className="cursos-cta__deco cursos-cta__deco--3" />

      <div className="cursos-cta__inner">
        <div className="cursos-cta__content">
          <span className="cursos-cta__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Formação Profissional
          </span>
          <h2 className="cursos-cta__title">
            Aprenda a Arte do<br />Cabelo Afro Conosco
          </h2>
          <p className="cursos-cta__text">
            Descubra nossos cursos exclusivos e domine as técnicas que
            transformam vidas. Do básico ao avançado, com certificação e
            acompanhamento personalizado.
          </p>

          <div className="cursos-cta__highlights">
            <div className="cursos-cta__highlight">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Certificação reconhecida</span>
            </div>
            <div className="cursos-cta__highlight">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Turmas reduzidas</span>
            </div>
            <div className="cursos-cta__highlight">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Prática supervisionada</span>
            </div>
          </div>
        </div>

        <div className="cursos-cta__action">
          <Link href="/cursos" className="cursos-cta__btn">
            Explorar Cursos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <span className="cursos-cta__footnote">
            Próxima turma a iniciar em breve
          </span>
        </div>
      </div>
    </section>
  );
}
