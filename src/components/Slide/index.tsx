import "swiper/css";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { SwiperContainer, SwiperSlideContent, SwiperSlideStyled } from "./styles";
import { BudgetButton } from "../BudgetButton";

export default function Slide() {
  return (
    <>
      <SwiperContainer
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlideStyled>
          <img src="https://www.rpsinox.com.br/images/slides/mequi-1000-2.jpg" alt="" />
          <SwiperSlideContent>
            <div>
              <h2>Méqui 1000</h2>
            </div>
            <div>
              <p>
                Tivemos o imenso prazer de fazer parte desta grande historia. <br />
                Projeto exclusivo no <strong>Milésimo McDonalds`s</strong>
              </p>
            </div>
            <div>
              <BudgetButton text="Ver Projetos" />
            </div>
          </SwiperSlideContent>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <img src="https://www.rpsinox.com.br/images/slides/hospital-corrimao.jpg" alt="" />

          <SwiperSlideContent>
            <div>
              <h2>Planejados</h2>
            </div>
            <div>
              <p>
                Planejados são a melhor opção para otimizar espaços
                <br />e deixar o espaço do jeito que você quer.
              </p>
            </div>
            <div>
              <BudgetButton text="Ver Projetos" />
            </div>
          </SwiperSlideContent>
        </SwiperSlideStyled>
      </SwiperContainer>
    </>
  );
}
