import HeaderLink from "@/components/AnchorSection"; 
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="header">
      <HeaderLink to="home" logo>
        Jean Lima
      </HeaderLink>
      <Navbar>
        <HeaderLink to="home">
          Inicio
        </HeaderLink>
        <HeaderLink to="about">
          Sobre
        </HeaderLink>
        <HeaderLink to="skills">
          Habilidades
        </HeaderLink>
        <HeaderLink to="portfolio">
          Projetos
        </HeaderLink>
      </Navbar>
    </header>
  );
};