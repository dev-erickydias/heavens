import React from 'react';
import "./termsOfResponsibility.css"



export default function TermsOfResponsibility() {
  return (
    <div className="terms-of-responsibility">
      <h1 className="terms-of-responsibility__title">Termos de Responsabilidade</h1>
      <h2 className="terms-of-responsibility__subtitle">Heavens Hair</h2>
      <p className="terms-of-responsibility__address">
        Rua Francisco Tomás da Costa, N.º 3 A-C, Entre Campos, Portugal
      </p>
      <p className="terms-of-responsibility__date">
        Última atualização: {new Date().toLocaleDateString()}
      </p>
      
      <h3 className="terms-of-responsibility__section-title">1. Introdução</h3>
      <p className="terms-of-responsibility__text">
        Os Termos de Responsabilidade regulamentam o uso do site Heavens Hair, a inscrição e participação em nossos cursos
        presenciais, bem como a contratação dos nossos serviços exclusivos para cabelos afros. Ao utilizar nosso site, você
        concorda em cumprir e estar sujeito a estes termos.
      </p>

      <h3 className="terms-of-responsibility__section-title">2. Uso do Site</h3>
      <p className="terms-of-responsibility__text">
        A Heavens Hair se esforça para manter as informações em seu site precisas e atualizadas. No entanto, não garantimos a
        precisão, completude ou atualidade das informações fornecidas. O uso das informações e conteúdos do site é de sua
        exclusiva responsabilidade.
      </p>

      <h3 className="terms-of-responsibility__section-title">3. Inscrição em Cursos e Serviços</h3>
      <h4 className="terms-of-responsibility__subsection-title">3.1. Cursos Presenciais</h4>
      <p className="terms-of-responsibility__text">
        Nossos cursos presenciais são projetados para oferecer treinamento especializado em cuidados e estilização de cabelos
        afros. Ao se inscrever, você concorda em fornecer informações precisas e completas. Reservamo-nos o direito de cancelar
        ou reprogramar cursos a nosso critério.
      </p>

      <h4 className="terms-of-responsibility__subsection-title">3.2. Serviços Exclusivos</h4>
      <p className="terms-of-responsibility__text">
        Oferecemos uma gama de serviços exclusivos para cabelos afros. Ao agendar um serviço, você reconhece que as informações
        fornecidas são precisas e que seguirá as orientações e recomendações fornecidas por nossos profissionais.
      </p>

      <h3 className="terms-of-responsibility__section-title">4. Limitação de Responsabilidade</h3>
      <p className="terms-of-responsibility__text">
        Heavens Hair não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou especiais
        decorrentes do uso ou incapacidade de uso do nosso site, cursos ou serviços. Isso inclui, mas não se limita a, danos
        por perda de dados, lucros cessantes ou interrupção de negócios.
      </p>

      <h3 className="terms-of-responsibility__section-title">5. Alterações nos Termos</h3>
      <p className="terms-of-responsibility__text">
        Reservamo-nos o direito de modificar estes Termos de Responsabilidade a qualquer momento. Quaisquer alterações serão
        publicadas no site e a continuação do uso dos nossos serviços após tais alterações constitui sua aceitação dos novos
        termos.
      </p>

      <h3 className="terms-of-responsibility__section-title">6. Privacidade</h3>
      <p className="terms-of-responsibility__text">
        Proteger sua privacidade é importante para nós. Por favor, consulte nossa Política de Privacidade para informações
        detalhadas sobre como coletamos, usamos e protegemos seus dados pessoais.
      </p>

      <h3 className="terms-of-responsibility__section-title">7. Contato</h3>
      <p className="terms-of-responsibility__text">
        Se você tiver alguma dúvida sobre estes Termos de Responsabilidade, entre em contato conosco:
      </p>
      <ul className="terms-of-responsibility__contact-list">
        <li className="terms-of-responsibility__contact-item">
          Endereço: Rua Francisco Tomás da Costa, N.º 3 A-C, Entre Campos, Portugal
        </li>
        <li className="terms-of-responsibility__contact-item">
          Email: <a href="mailto:seuemail@heavenshair.com" className="terms-of-responsibility__contact-link">seuemail@heavenshair.com</a>
        </li>
        <li className="terms-of-responsibility__contact-item">
          Telefone: <a href="tel:+351123456789" className="terms-of-responsibility__contact-link">+351 123 456 789</a>
        </li>
      </ul>
      
      <p className="terms-of-responsibility__text">
        Ao utilizar o site Heavens Hair, você confirma que leu, compreendeu e concorda com estes Termos de Responsabilidade.
      </p>
    </div>
  );
}
