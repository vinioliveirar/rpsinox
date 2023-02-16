import styled from "styled-components";

export const BudgetButtonContainer = styled.div`
  @media screen and (max-width: 400px) {
    height: 30px;
    width: 12rem;
  }
  background: ${(props) => props.theme.red};
  height: 50px;
  width: 14rem;
  display: flex;
  align-items: center;
  padding: 1.25rem 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.5rem;

    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    line-height: 50px;
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
  }

  :hover {
    background: ${(props) => props.theme["gray-800"]};
    transition: background-color 0.4s;
  }
`;
