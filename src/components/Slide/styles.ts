import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

export const SwiperContainer = styled(Swiper)`
  @media screen and (max-width: 500px) {
    height: 80%;
  }
  height: 90vh;
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    ::after {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  img {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
  }
`;

export const SwiperWrapper = styled.section`
  width: 100%;

  background: transparent;
  margin: 0 auto;
  top: 10rem;
  position: absolute;
  @media screen and (max-width: 800px) {
    top: 2rem;
  }
`;

export const SwiperSlideContent = styled.div`
  color: white;
  max-width: 1200px;
  margin: 0 auto;

  z-index: 100;
  padding: 4rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  h2 {
    position: relative;
    color: #ffffff;
    font-size: 4.5rem;
    line-height: 1.1em;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
  }

  p {
    width: 60%;
    position: relative;
    display: block;
    color: #ffffff;
    font-size: 1.25rem;
    line-height: 1.5em;
    font-weight: 400;
    font-family: "Rubik", sans-serif;
  }

  @media screen and (max-width: 600px) {
    align-items: stretch;
    max-width: 400px;
    gap: 5px;
    padding: 0 30px;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 12px;
    }
  }
`;
