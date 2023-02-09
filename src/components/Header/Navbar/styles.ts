import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    margin-right: 35px;
    list-style: none;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;

    :hover {
      color: ${(props) => props.theme.red};
      transition: color 0.2s;
    }
  }
`;

export const DropDown = styled.li`
  :hover ul {
    top: 120px;
    width: 270px;
    padding: 10px;
    position: fixed;
    display: block;

    li {
      margin: 10px 0;
    }
  }
  ul {
    display: none;
  }
`;
