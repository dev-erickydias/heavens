"use client"
import "./navMenu.css";
import CustomImage from "../../customImage/CustomImage";
import CustomButton from "../../customButton/CustomButton";

export default function NavMenuMobile() {

function openPopup(){
  document.querySelector(".popup").classList.add("popup_opened")
}
  return (
    <nav className="nav">
      <div className="logo">
        <CustomImage
          className="logo__img"
          src="/logo.svg"
          alt="Logo"
          width={103}
          height={103}
        />
      </div>
      <CustomButton className="menu__hamburger" onClick={openPopup}><CustomImage  src={"/menu.png"} alt={"Menu Hamburger"}/></CustomButton>
      
    </nav>
  );
}
