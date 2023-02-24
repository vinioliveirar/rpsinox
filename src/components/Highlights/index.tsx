import { ArrowRight, CodesandboxLogo, Lightning, Perspective } from "phosphor-react";
import { ButtonSeeMore, Card, CardsContent, HighlightsArea, IconHolder } from "./styles";

export function HighLights() {
  return (
    <HighlightsArea>
      <CardsContent>
        <Card>
          <header>
            <IconHolder>
              <Perspective size={70} weight="thin" />
            </IconHolder>
            <div>
              <h3>Concepção & Design</h3>
            </div>
          </header>
          <div>
            <p>Nós planejamos e desenhamos o projeto do jeito que você imagina.</p>
          </div>
          <ButtonSeeMore>
            <a href="">
              Ver mais <ArrowRight size={24} />
            </a>
          </ButtonSeeMore>
        </Card>

        <Card>
          <header>
            <IconHolder>
              <CodesandboxLogo size={70} weight="thin" />
            </IconHolder>
            <div>
              <h3>Fabricação</h3>
            </div>
          </header>
          <div>
            <p>
              Utilizando os melhores materiais fabricamos as peças de acordo com as suas
              necessidades.
            </p>
          </div>
          <ButtonSeeMore>
            <a href="">
              Ver mais <ArrowRight size={24} />
            </a>
          </ButtonSeeMore>
        </Card>

        <Card>
          <header>
            <IconHolder>
              <Lightning size={70} weight="thin" />
            </IconHolder>
            <div>
              <h3>Instalação</h3>
            </div>
          </header>
          <div>
            <p>Para completar o processo, fazemos a instalação em sua casa ou empresa.</p>
          </div>
          <ButtonSeeMore>
            <a href="">
              Ver mais <ArrowRight size={24} />
            </a>
          </ButtonSeeMore>
        </Card>
      </CardsContent>
    </HighlightsArea>
  );
}
