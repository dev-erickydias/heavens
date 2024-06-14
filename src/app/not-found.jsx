// pages/not-found.jsx

import CustomButton from "@/components/customButton/CustomButton";
import Link from 'next/link';
import "../styles/404.css"; // Importa o arquivo de estilos CSS externo

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Página não encontrada</h1>
      <div className="not-found__messages">
          <p className="not-found__message">Ooops! Parece que a página que você está procurando não existe.</p>
          <p className="not-found__message">Erro: Esta página não foi encontrada no servidor.</p>
      </div>
      <Link  href="/">
          <CustomButton className="not-found__link">Voltar para a página inicial</CustomButton>
        
      </Link>
    </div>
  );
}
