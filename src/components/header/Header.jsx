import "./header.css"
import imgBackGound from "../../assents/Assets_Website/desktop/Vector_full.png"


import Navigation from "./navigation/Navigation"


function Header() {
    return (
        <header className="header">
            <Navigation />
            

            <div className="header__container">
            
                <div className="contein">
                    <div className="titles">
                        <h1 className="title">Desperte sua autenticidade!</h1>
                        <h2 className="subtitle">Liberte sua beleza com estilo e confiança.</h2>
                    </div>
                    <div className="buttons">
                        <button className="btn__agenda"><a target="_blank" href="https://www.heavenshair.pt/" className="link">Agende aqui</a></button>
                        <button className="btn__contacto">Entre em contato</button>
                    </div>
                </div>
                <img src={imgBackGound} alt="imgBackGound" className="imgBackGound" />
            </div>
        </header>
    )
}

export default Header