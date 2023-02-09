import styled from "styled-components";

export const TopBar = styled.section`
  background: ${(props) => props.theme["gray-800"]};
  color: white;
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Rubik", sans-serif;
`;

export const TopBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  p {
    font-size: 1rem;
    font-weight: bold;
    line-height: 2rem;
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;

    svg {
      color: ${(props) => props.theme.red};
      margin-right: 0.5rem;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding-left: 1.25rem;
    list-style: none;

    li {
      padding-right: 1rem;
      color: ${(props) => props.theme["gray-700"]};
      display: flex;
      align-items: center;

      /* ::before {
        content: "";
        margin: 0 2px;
        width: 1px;
        height: 15px;
        background: ${(props) => props.theme["gray-400"]};
      } */
    }

    a {
      color: ${(props) => props.theme["blue-light"]};
      text-decoration: none;

      :hover {
        color: ${(props) => props.theme.blue};
        transition: color 0.4s;
      }
    }
  }
`;

export const TopBarRight = styled.div`
  svg {
    color: ${(props) => props.theme["gray-400"]};
    margin: 0 0.75rem;
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.red};
      transition: color 0.4s;
    }
  }
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 4rem;
`;

export const LogoBox = styled.div`
  img {
    width: 12.5rem;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BudgetButton = styled.div`
  background: ${(props) => props.theme.red};
  padding: 1.25rem 0;
  margin-left: 2.3rem;
  cursor: pointer;

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
