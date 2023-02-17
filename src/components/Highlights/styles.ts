import styled from "styled-components";

export const HighlightsArea = styled.section`
  @media screen and (max-width: 500px) {
    margin-top: 1rem;
  }
  margin: 0 auto;
  position: relative;
  display: block;
  background: transparent;
  margin-top: -135px;
  z-index: 100;
  max-width: 1100px;
`;

export const CardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;

  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    margin: 1rem;
  }
`;

export const Card = styled.div`
  @media screen and (max-width: 500px) {
    margin: 1rem;
  }
  height: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const IconHolder = styled.div`
  border-radius: 999px;
  width: 110px;
  height: 110px;
  border: 3px solid red;
  z-index: 3;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
