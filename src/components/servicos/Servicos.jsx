"use client";
import "./servicos.css";
import SERVICOS from "../../data/servicos";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Link from "next/link";

const SERVICE_ICONS = {
  default: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  corte: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  cor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
    </svg>
  ),
  tratamento: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

function getIcon(nome) {
  const n = (nome || "").toLowerCase();
  if (n.includes("corte") || n.includes("trim")) return SERVICE_ICONS.corte;
  if (n.includes("cor") || n.includes("madeixa") || n.includes("coloração") || n.includes("tint") || n.includes("color"))
    return SERVICE_ICONS.cor;
  if (n.includes("trat") || n.includes("hidra") || n.includes("reconst") || n.includes("botox") || n.includes("queratina"))
    return SERVICE_ICONS.tratamento;
  return SERVICE_ICONS.default;
}

export default function Servicos() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="servicos"
      className={`servicos ${isVisible ? "servicos--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="servicos__header">
        <span className="servicos__label">O que oferecemos</span>
        <h2 className="servicos__title">Nossos Serviços</h2>
        <p className="servicos__description">
          Conheça o talento de nosso hairstylist, Wessel Santos, com mais de 14
          anos de expertise em cabelos afros. Especialista em colorimetria e
          tratamentos capilares para cabelos cacheados.
        </p>
      </div>

      <div className="servicos__grid">
        {SERVICOS.map((servico, index) => (
          <div
            key={servico.id_servico}
            className="servico__card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="servico__card__top">
              <div className="servico__card__icon">
                {getIcon(servico.nome)}
              </div>
              <div className="servico__card__price-tag">
                <span className="servico__card__price">{servico.preco}€</span>
              </div>
            </div>
            <h3 className="servico__card__title">{servico.nome}</h3>
            <div className="servico__card__footer">
              <span className="servico__card__duration">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {servico.a_partir_de}min
              </span>
              <Link href="/agendar" className="servico__card__cta">
                Agendar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
