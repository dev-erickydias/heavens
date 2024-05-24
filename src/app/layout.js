import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heavens Hair",
  description: "Heavens Hair salão de cabelereiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page">
        <Header/>
        {children}</body>
    </html>
  );
}
