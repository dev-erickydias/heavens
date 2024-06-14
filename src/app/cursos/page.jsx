import Cursos from "@/components/cursos/Cursos";
import CustomImage from "@/components/customImage/CustomImage";
import HeroCursos from "@/components/heroCursos/HeroCursos";

export default function Home() {
  return (
    <main className="main">
      <HeroCursos/>
      <CustomImage className="logo__cursos" src={"/gallery/logo.png"}/>
      <Cursos/>
    </main>
  );
}