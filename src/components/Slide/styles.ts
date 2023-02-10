import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

export const SwiperContainer = styled(Swiper)`
  height: 700px;
  position: relative;

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
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
`;

export const SwiperSlideContent = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  color: white;
  padding: 15rem 20rem;

  h2 {
    position: relative;
    color: #ffffff;
    font-size: 72px;
    line-height: 1.1em;
    font-weight: 700;
    text-transform: none;
    font-family: "Poppins", sans-serif;
  }

  p {
    padding-top: 1rem;
    position: relative;
    display: block;
    color: #ffffff;
    font-size: 18px;
    line-height: 1.5em;
    font-weight: 400;
    letter-spacing: normal;
    text-transform: none;
    font-family: "Rubik", sans-serif;
  }
`;
