import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { SwiperContainer, SwiperSlideContent, SwiperSlideStyled, SwiperWrapper } from "./styles";
import { BudgetButton } from "../BudgetButton";
import { useEffect, useState } from "react";

interface Informations {
  id: number;
  image: string;
  title: string;
  description: string;
  stongDescription: string;
}

export default function Slide() {
  const [informations, setInformations] = useState<Informations[]>([]);

  //puxa dados do JSONServer
  async function loadInformations() {
    const response = await fetch("http://localhost:3000/informations");
    const data = await response.json();
    setInformations(data);
  }
  useEffect(() => {
    loadInformations();
  }, []);
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
        {informations.map((information) => {
          return (
            <SwiperSlideStyled>
              <img src={`/images/${information.image}`} alt="" />
              <SwiperWrapper>
                <SwiperSlideContent>
                  <div>
                    <h2>{information.title}</h2>
                  </div>
                  <div>
                    <p>
                      {information.description}
                      <strong> {information.stongDescription}</strong>
                    </p>
                  </div>
                  <div>
                    <BudgetButton text="Ver Projetos" />
                  </div>
                </SwiperSlideContent>
              </SwiperWrapper>
            </SwiperSlideStyled>
          );
        })}
      </SwiperContainer>
    </>
  );
}
