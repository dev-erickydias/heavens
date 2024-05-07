import "./header.css"
import imgBackGound from "../../assents/Assets_Website/desktop/Vector_full.png"


import Navigation from "../navigation/Navigation"


function Header() {
    return (
        <header className="header">
            <Navigation />
            <img src={imgBackGound} alt="imgBackGound" className="imgBackGound" />

            <div className="titles">
                <h1 className="title">Desperte sua autenticidade!</h1>
                <h2 className="subtitle">Liberte sua beleza com estilo e confiança.</h2>
            </div>
            <div className="buttons">
                <button className="btn__agenda">Agende aqui</button>
                <button className="btn__contacto">Entre em contato</button>
            </div>
        </header>
    )
}

export default Header