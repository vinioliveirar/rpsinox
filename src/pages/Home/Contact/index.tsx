import { Compass, Envelope, FacebookLogo, InstagramLogo, PhoneCall } from "phosphor-react";
import { TopBarRight } from "../../../components/Header/styles";
import { ContactContainer, ContactContent, ContactText, ContactWrapper } from "./styles";

export function Contact() {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactContent>
          <Compass size={50} weight="thin" />
          <ContactText>
            <h3>Guarulhos, SP</h3>
            <p>Atendemos: Capital e interior SP</p>
          </ContactText>
        </ContactContent>
        <ContactContent>
          <PhoneCall size={50} weight="thin" />
          <ContactText>
            <h3>
              <a href="">(11) 94713-6091</a>
            </h3>
            <p>Seg - Sex: 9:00 às 18:00</p>
          </ContactText>
        </ContactContent>
        <ContactContent>
          <Envelope size={50} weight="thin" />
          <ContactText>
            <h3>
              <a href="">contato@rpsinox.com.br</a>
            </h3>
            <p>Solicite um orçamento</p>
          </ContactText>
        </ContactContent>

        <TopBarRight>
          <a href="" title="Acesse nosso Facebook">
            <FacebookLogo size={50} weight="light" />
          </a>

          <a href="" title="Acesse nosso Instagram">
            <InstagramLogo size={50} weight="light" />
          </a>
        </TopBarRight>
      </ContactContainer>
    </ContactWrapper>
  );
}
