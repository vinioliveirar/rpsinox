import { DropDown, Nav } from "./styles";

export function Navbar() {
  return (
    <Nav>
      <ul>
        <DropDown>
          <a href="">Serviços</a>
          <ul>
            <li>
              <a href="">Residencial</a>
            </li>
            <li>
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
