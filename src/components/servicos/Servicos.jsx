import "./servicos.css"
import Precos from "../catalogoPrecos/Precos"
function Servicos(){
    return (
        <section className="servicos">
            <h2 className="servicos__title">Nossos serviços</h2>
            <p className="servicos__text">Conheça o talento de nosso hairstylist, Wessel Santos, com mais de 14 anos de expertise em cabelos afros. Além de ser especialista em colorimetria e tratamentos capilares para cabelos cacheados, Wessel é apaixonado por realçar a beleza natural de cada cliente. Estamos aqui para cuidar de você e dos seus cabelos com toda a dedicação e cuidado que merece.</p>
            <Precos/>
        </section>
    )
}

export default Servicos