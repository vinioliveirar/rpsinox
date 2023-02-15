import styled from "styled-components";

export const TopBar = styled.section`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  background: ${(props) => props.theme["gray-800"]};
  color: white;
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Rubik", sans-serif;
`;

export const TopBarLeft = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
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
        color: ${(props) => props.theme["blue-dark"]};
        transition: color 0.4s;
      }
    }
  }
`;

export const TopBarRight = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    display: none;
  }
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
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 4rem;
`;

export const LogoBox = styled.div`
  img {
    @media screen and (max-width: 800px) {
      width: 8rem;
    }
    width: 12.5rem;
  }
`;

export const MenuBoxMobile = styled.div`
  @media screen and (max-width: 800px) {
    display: block;
  }
  display: none;
`;

export const MenuBox = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
