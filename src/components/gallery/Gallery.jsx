"use client";
import CustomImage from "../customImage/CustomImage";
import "./gallery.css";
import gallery from "../../constants/gallery";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Gallery() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className={`gallery ${isVisible ? "gallery--visible" : ""}`} ref={ref}>
      <div className="gallery__header">
        <span className="gallery__label">Nosso Portfólio</span>
        <h2 className="gallery__title">
          Inspire-se com a Arte Capilar
        </h2>
        <p className="gallery__subtitle">
          Cada transformação conta uma história. Veja alguns dos nossos trabalhos favoritos.
        </p>
      </div>

      <div className="gallery__grid">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className={`gallery__item gallery__item--${index + 1}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CustomImage src={item.image} alt={item.name} className="gallery__img" />
            <div className="gallery__overlay">
              <span className="gallery__overlay__text">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
