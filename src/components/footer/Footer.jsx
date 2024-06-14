import Link from "next/link";
import CustomImage from "../customImage/CustomImage";
import "./footer.css";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__logo">
          <CustomImage src="/logo.svg" alt={"Logo"} />
        </div>
        <div class="footer__content">
          <div class="footer__section">
            <h3 class="footer__title">
              Desperte sua beleza única e brilhe com confiança.
            </h3>
          </div>
          <div class="footer__section">
            <h2 className="footer__section_title">
              Heavens Hair é um salão especializado em cuidados de cabelos
              crespos, chacheados e ondulados.
            </h2>
            <div className="footer__copy">
              <Link className="footer__link footer__termo" href="/terms-of-responsibility">Termos de Privacidade</Link>
              <p class="footer__section_copy">© Heavens Hair 2024</p>
            </div>
          </div>
          <div className="footer__social">
            <Link className="footer__link" target="_blank" href="https://www.instagram.com/cbheavenshair/">
              <CustomImage src="/icon/instagramBranco.png" />
            </Link>
            <Link className="footer__link" target="_blank" href="https://www.instagram.com/cbheavenshair/">
              <CustomImage src="/icon/facebookBranco.png" />
            </Link>
            <Link className="footer__link" target="_blank" href="mailto:cbeheavenshair@gmail.com">
              <CustomImage src="/icon/emailBranco.png" />
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
