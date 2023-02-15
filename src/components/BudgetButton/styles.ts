import styled from "styled-components";

export const BudgetButtonContainer = styled.div`
  background: ${(props) => props.theme.red};
  height: 50px;
  width: 16rem;
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

    padding: 0 1.25rem 0;
    gap: 0.5rem;

    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-weight: 500;
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
  }

  :hover {
    background: ${(props) => props.theme["gray-800"]};
    transition: background-color 0.4s;
  }
`;
