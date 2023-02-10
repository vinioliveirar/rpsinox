import styled from "styled-components";

export const ContactContainer = styled.section`
  @media screen and (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
  padding: 1rem 25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme["gray-100"]};
`;

export const ContactContent = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    color: ${(props) => props.theme["gray-400"]};
  }

  h3,
  p {
    text-align: center;
    font-family: "Rubik", sans-serif;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 14px;
    margin-top: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue-light"]};
  }

  :hover svg {
    color: ${(props) => props.theme.red};
    transition: color 0.4s;
  }
  :hover a {
    color: ${(props) => props.theme["blue-dark"]};
    transition: color 0.4s;
  }
`;

export const ContactText = styled.div`
  padding: 1.25rem 0;
`;
