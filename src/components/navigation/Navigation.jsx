import "./navigation.css"

import logo from "../../assents/Logos/.png/Degradê.png"
const Navigation = () => {
  return (
    <nav className="navigation">
      <img className="nav__logo" src={logo} alt="logo" />
        <ul className="menu">
            <li className="menu_item">Home</li>
            <li className="menu_item">Serviços</li>
            <li className="menu_item">Cursos</li>
            <li className="menu_item">Contato</li>
        </ul>
        <button className="menu_btn">Agende aqui</button>
    </nav>
  )
}

export default Navigation