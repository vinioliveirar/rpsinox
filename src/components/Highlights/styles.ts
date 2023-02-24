import styled from "styled-components";

export const HighlightsArea = styled.section`
  margin: 0 auto;
  position: relative;
  display: block;
  background: transparent;
  margin-top: -135px;
  z-index: 100;
  max-width: 1100px;

  @media screen and (max-width: 500px) {
    margin-top: 2rem;
  }
`;

export const CardsContent = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    padding-top: 5rem;
  }
  @media screen and (max-width: 500px) {
    gap: 0;
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  text-align: center;
  position: relative;
  display: block;
  background: ${(props) => props.theme.white};
  padding-top: 5rem;
  box-shadow: 0px 4px 11px -1px #ececec;

  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30rem;

  @media screen and (max-width: 500px) {
    margin: 4rem 0;
    width: 100%;
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 26px;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme["gray-900"]};
    margin-top: 1rem;
    padding: 1rem 0;
  }
  p {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 0.975rem;
    line-height: 25px;
    font-weight: 400;
    font-family: "Rubik", sans-serif;
    width: 100%;
    padding: 1rem 0;
  }
`;

export const IconHolder = styled.div`
  position: absolute;
  top: -50px;
  border-radius: 999px;
  width: 110px;
  height: 110px;
  border: 2px solid red;
  z-index: 3;
  background-color: white;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  :hover {
    background: ${(props) => props.theme.red};
    transition: color 0.4s;
  }

  :hover svg {
    color: ${(props) => props.theme.white};
    transition: color 0.4s;
  }

  svg {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const ButtonSeeMore = styled.div`
  background: ${(props) => props.theme["gray-100"]};
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 0 30px 0;

    font-size: 15px;
    line-height: 60px;
    font-weight: 500;
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
  }

  :hover {
    color: ${(props) => props.theme.red};
    transition: color 0.4s;
  }
`;
