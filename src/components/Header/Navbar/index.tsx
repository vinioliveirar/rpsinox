import { ArrowRight, CaretRight } from "phosphor-react";
import { DropDown, Nav } from "./styles";

export function Navbar() {
  return (
    <Nav>
      <ul>
        <DropDown>
          <a href="">Serviços</a>
          <ul>
            <li>
              <ArrowRight size={24} />
              <a href="">Residencial</a>
            </li>
            <li>
              <ArrowRight size={24} />
              <a href="">Comercial</a>
            </li>
          </ul>
        </DropDown>
        <li>
          <a href="">Projetos</a>
        </li>
        <li>
          <a href="">Fale Conosco</a>
        </li>
      </ul>
    </Nav>
  );
}
