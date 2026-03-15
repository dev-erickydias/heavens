import "./heroCursos.css";
import CustomImage from "../customImage/CustomImage";
import Link from "next/link";

export default function HeroCursos() {
  return (
    <section className="cursos__hero">
      <div className="cursos__hero__text">
        <h1 className="cursos__hero__text__title">Cursos de Formação</h1>
        <p className="cursos__hero__text__description">
          Torne-se profissional conosco!
        </p>
        <div className="cursos__hero__btn">
          <Link href="/#contact" className="btn-primary">
            Entre em contato
          </Link>
        </div>
      </div>

      <div className="curso__contain">
        <CustomImage
          className="curso__image"
          src="/Vector__cursos.png"
          alt="Menina com madeixas feitas no Heavens Hair"
        />
        <p className="curso__text">
          Wessel Santos, hairstylist com 14 anos de experiência em cabelos
          afros. Aos 27 anos, se especializou em colorimetria e tratamentos
          capilares para cabelos cacheados. Venha nessa jornada!
        </p>
      </div>
    </section>
  );
}
