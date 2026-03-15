import Cursos from "../../components/cursos/Cursos";
import CustomImage from "../../components/customImage/CustomImage";
import HeroCursos from "../../components/heroCursos/HeroCursos";

export const metadata = {
  title: "Cursos - Heavens Hair",
  description: "Cursos de formação profissional em cabelos afro no Heavens Hair.",
};

export default function CursosPage() {
  return (
    <main className="main">
      <HeroCursos/>
      <CustomImage className="logo__cursos" src={"/gallery/logo.png"}/>
      <Cursos/>
    </main>
  );
}