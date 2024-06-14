
import SaibaMaisCursos from "../components/saibaMaisCursos/SaibaMaisCursos";
import Header from "../components/header/header/Header";
import Servicos from "../components/servicos/Servicos";
import Gallery from "../components/gallery/Gallery";
import ContactForm from "../components/contatoForm/ContatoForm";
export default function Home() {
  return (
    <main>
      <Header />
      <Servicos />
      <SaibaMaisCursos/>
      <Gallery/>
      <ContactForm/>
    </main>
  );
}