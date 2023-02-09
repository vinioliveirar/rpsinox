import { CaretDoubleRight, FacebookLogo, Headset, InstagramLogo } from "phosphor-react";
import { Navbar } from "./Navbar";
import {
  BudgetButton,
  LogoBox,
  MainHeader,
  MenuBox,
  TopBar,
  TopBarLeft,
  TopBarRight,
} from "./styles";

export function Header() {
  return (
    <header>
      <TopBar>
        <TopBarLeft>
          <p>
            <Headset size={24} />
            Consulte especialista
          </p>
          <ul>
            <li>
              <a href="" title="Conversar por Whatsapp">
                (11)94713-6091
              </a>
            </li>
            <li>
              <a href="" title="Entre em contato por e-mail">
                contato@rpsinox.com.br
              </a>
            </li>
            <li>Seg - Sex: 9:00 às 18:00</li>
          </ul>
        </TopBarLeft>
        <TopBarRight>
          <a href="" title="Acesse nosso Facebook">
            <FacebookLogo size={24} />
          </a>

          <a href="" title="Acesse nosso Instagram">
            <InstagramLogo size={24} />
          </a>
        </TopBarRight>
      </TopBar>

      <MainHeader>
        <LogoBox>
          <a href="/">
            <img src="https://www.rpsinox.com.br/images/resources/logo.png" alt="" />
          </a>
        </LogoBox>
        <MenuBox>
          <Navbar />
          <BudgetButton>
            <a href="">
              Solicite um Orçamento <CaretDoubleRight size={24} />
            </a>
          </BudgetButton>
        </MenuBox>
      </MainHeader>
    </header>
  );
}
