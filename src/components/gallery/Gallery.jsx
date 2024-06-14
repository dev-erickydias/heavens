import CustomImage from "../customImage/CustomImage"
import "./gallery.css"
import gallery from "../../constants/gallery"
export default function Gallery(){
    return (
        <section className="gallery">
            <h2 className="gallery__title">Inspire-se e descubra o poder da arte capilar em nossa galeria!</h2>
            <div className="gallery__container">
            {gallery.map((item)=>{
              return  <CustomImage src={item.image} alt={item.name} key={item.id}/>
            })}
            </div>
            <CustomImage className="gallery__logo" src="/gallery/logo.png" alt="logo"/>
        </section>
    )
}