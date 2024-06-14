import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/configsScroll.css"
import NavMenu from "../components/header/navMenu/NavMenu";
import Footer from "../components/footer/Footer";

import PopupMenu from "../components/popupMenu/PopupMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heavens Hair",
  description: "Heavens Hair salão de cabelereiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Salão de beleza especializado em cabelos afros" />
        <meta name="keywords" content="Next.js, CSS, React.js, AfroHair, Hair, Lisboa, Portugal" />
        <meta name="author" content="Ericky Dias" />
      </head>
      <body>
      <PopupMenu />
        <div className="page">
        <NavMenu />
        
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
