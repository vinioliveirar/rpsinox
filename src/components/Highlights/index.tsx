import { Perspective } from "phosphor-react";
import { Card, CardsContent, HighlightsArea, IconHolder } from "./styles";

export function HighLights() {
  return (
    <HighlightsArea>
      <CardsContent>
        <Card>
          <header>
            <IconHolder>
              <Perspective size={70} />
            </IconHolder>
            <div>
              <h3>Concepção & Design</h3>
            </div>
          </header>
          <div>
            <p>iashdiahsdiahsidahsd</p>
          </div>
          <div>
            <button>Ver Mais</button>
          </div>
        </Card>
      </CardsContent>
    </HighlightsArea>
  );
}
