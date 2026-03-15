"use client";
import { useState } from "react";
import "./agendamento.css";
import SERVICOS from "../../data/servicos";
import Link from "next/link";

const HORARIOS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00"
];

export default function Agendamento() {
  const [step, setStep] = useState(1);
  const [selectedServico, setSelectedServico] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [calendarUrl, setCalendarUrl] = useState("");

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleSubmit = () => {
    if (!selectedServico || !selectedDate || !selectedTime || !nome) return;

    setIsSubmitting(true);

    // Gerar URL do Google Calendar
    const startDate = new Date(`${selectedDate}T${selectedTime}:00`);
    const durationMin = selectedServico.a_partir_de || 60;
    const endDate = new Date(startDate.getTime() + durationMin * 60000);

    const formatGCalDate = (d) =>
      d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Heavens Hair - ${selectedServico.nome}`,
      dates: `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`,
      details: `Cliente: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nServiço: ${selectedServico.nome}\nPreço: ${selectedServico.preco}€`,
      location: "Heavens Hair Salão",
    });

    const url = `https://calendar.google.com/calendar/render?${params.toString()}`;
    setCalendarUrl(url);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1000);
  };

  const nextStep = () => {
    if (step === 1 && selectedServico) setStep(2);
    else if (step === 2 && selectedDate && selectedTime) setStep(3);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isBooked) {
    return (
      <section className="agendamento">
        <div className="agendamento__success">
          <div className="agendamento__success__icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#296d65"/>
            </svg>
          </div>
          <h2 className="agendamento__success__title">Quase lá!</h2>
          <p className="agendamento__success__text">
            Clique no botão abaixo para confirmar seu agendamento no Google Calendar.
          </p>
          <div className="agendamento__success__details">
            <p><strong>Serviço:</strong> {selectedServico?.nome}</p>
            <p><strong>Data:</strong> {new Date(selectedDate).toLocaleDateString("pt-BR")}</p>
            <p><strong>Horário:</strong> {selectedTime}</p>
            <p><strong>Preço:</strong> {selectedServico?.preco}€</p>
          </div>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="agendamento__gcal-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 4h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
            </svg>
            Adicionar ao Google Calendar
          </a>
          <Link href="/" className="agendamento__back-link">
            Voltar para o início
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="agendamento">
      <Link href="/" className="agendamento__back">
        ← Voltar
      </Link>

      <div className="agendamento__header">
        <h1 className="agendamento__title">Agende seu horário</h1>
        <p className="agendamento__subtitle">
          Escolha o serviço, data e horário para sua visita.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="agendamento__progress">
        <div className={`agendamento__step ${step >= 1 ? "active" : ""}`}>
          <span className="agendamento__step__number">1</span>
          <span className="agendamento__step__label">Serviço</span>
        </div>
        <div className={`agendamento__step__line ${step >= 2 ? "active" : ""}`}></div>
        <div className={`agendamento__step ${step >= 2 ? "active" : ""}`}>
          <span className="agendamento__step__number">2</span>
          <span className="agendamento__step__label">Data e Hora</span>
        </div>
        <div className={`agendamento__step__line ${step >= 3 ? "active" : ""}`}></div>
        <div className={`agendamento__step ${step >= 3 ? "active" : ""}`}>
          <span className="agendamento__step__number">3</span>
          <span className="agendamento__step__label">Seus Dados</span>
        </div>
      </div>

      {/* Step 1: Serviço */}
      {step === 1 && (
        <div className="agendamento__content agendamento__fade-in">
          <h2 className="agendamento__content__title">Selecione o serviço</h2>
          <div className="agendamento__servicos">
            {SERVICOS.map((s) => (
              <button
                key={s.id_servico}
                className={`agendamento__servico ${selectedServico?.id_servico === s.id_servico ? "selected" : ""}`}
                onClick={() => setSelectedServico(s)}
              >
                <span className="agendamento__servico__name">{s.nome}</span>
                <span className="agendamento__servico__info">
                  <span className="agendamento__servico__price">{s.preco}€</span>
                  <span className="agendamento__servico__dur">{s.a_partir_de}min</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Data e Hora */}
      {step === 2 && (
        <div className="agendamento__content agendamento__fade-in">
          <h2 className="agendamento__content__title">Escolha data e horário</h2>

          <div className="agendamento__datetime">
            <div className="agendamento__date-picker">
              <label className="agendamento__label">Data</label>
              <input
                type="date"
                className="agendamento__input"
                value={selectedDate}
                min={getMinDate()}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {selectedDate && (
              <div className="agendamento__times">
                <label className="agendamento__label">Horário</label>
                <div className="agendamento__times__grid">
                  {HORARIOS.map((h) => (
                    <button
                      key={h}
                      className={`agendamento__time ${selectedTime === h ? "selected" : ""}`}
                      onClick={() => setSelectedTime(h)}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Dados pessoais */}
      {step === 3 && (
        <div className="agendamento__content agendamento__fade-in">
          <h2 className="agendamento__content__title">Seus dados</h2>

          <div className="agendamento__form">
            <div className="agendamento__field">
              <label className="agendamento__label">Nome *</label>
              <input
                type="text"
                className="agendamento__input"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="agendamento__field">
              <label className="agendamento__label">Telefone</label>
              <input
                type="tel"
                className="agendamento__input"
                placeholder="+351 XXX XXX XXX"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="agendamento__field">
              <label className="agendamento__label">Email</label>
              <input
                type="email"
                className="agendamento__input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="agendamento__summary">
              <h3>Resumo</h3>
              <p><strong>Serviço:</strong> {selectedServico?.nome}</p>
              <p><strong>Data:</strong> {new Date(selectedDate).toLocaleDateString("pt-BR")}</p>
              <p><strong>Horário:</strong> {selectedTime}</p>
              <p><strong>Preço:</strong> {selectedServico?.preco}€</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="agendamento__nav">
        {step > 1 && (
          <button className="agendamento__nav__btn agendamento__nav__btn--back" onClick={prevStep}>
            Voltar
          </button>
        )}
        {step < 3 ? (
          <button
            className="agendamento__nav__btn agendamento__nav__btn--next"
            onClick={nextStep}
            disabled={
              (step === 1 && !selectedServico) ||
              (step === 2 && (!selectedDate || !selectedTime))
            }
          >
            Próximo
          </button>
        ) : (
          <button
            className="agendamento__nav__btn agendamento__nav__btn--confirm"
            onClick={handleSubmit}
            disabled={!nome || isSubmitting}
          >
            {isSubmitting ? "Processando..." : "Confirmar Agendamento"}
          </button>
        )}
      </div>
    </section>
  );
}
