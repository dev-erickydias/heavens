import "./navMenu.css";
import NavMenuItem from "../navMenuItem/NavMenuItem";
import CustomImage from "../../customImage/CustomImage";
import CustomButton from "../../customButton/CustomButton";
import logo from "../../../assets/logo.svg";

export default function NavMenu() {
  return (
    <nav className="nav">
      <div className="logo">
        <CustomImage
          className="logo__img"
          src={logo}
          alt="Logo"
          width={103}
          height={103}
        />
      </div>
      <ul className="header__nav__menu">
        <NavMenuItem href="/">Home</NavMenuItem>
        <NavMenuItem href="/servicos">Serviços</NavMenuItem>
        <NavMenuItem href="/cursos">Cursos</NavMenuItem>
        <NavMenuItem href="/contact">contactos</NavMenuItem>
      </ul>
      <CustomButton className="nav__btn">Agende Aqui</CustomButton>
    </nav>
  );
}
