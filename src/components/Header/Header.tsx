import HeaderLink from "@/components/AnchorSection"; 
import { Navbar } from "./Navbar";

import { HeaderInterface } from "@/interfaces/i18n"
interface HeaderProps {
    dictionary : HeaderInterface;
}

export const Header = ({dictionary}: HeaderProps) => {
  return (
    <header className="header">
      <HeaderLink to="home" logo>
        Jean Lima
      </HeaderLink>
      <Navbar dictionary={dictionary}>
        <HeaderLink to="home">
          {dictionary.links.start}
        </HeaderLink>
        <HeaderLink to="about">
          {dictionary.links.about}
        </HeaderLink>
        <HeaderLink to="skills">
          {dictionary.links.skills}
        </HeaderLink>
        <HeaderLink to="portfolio">
          {dictionary.links.projects}
        </HeaderLink>
      </Navbar>
    </header>
  );
};