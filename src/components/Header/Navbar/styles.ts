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
    margin-right: 2.3rem;
    list-style: none;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: uppercase;

    :hover {
      color: ${(props) => props.theme.red};
      transition: color 0.2s;
    }
  }
`;

export const DropDown = styled.li`
  svg {
    display: none;
  }
  ul {
    display: none;
  }

  :hover ul {
    top: 7.5rem;
    width: 12rem;
    padding: 1.25rem;

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    z-index: 100;
    background: ${(props) => props.theme.white};
  }
  li {
    gap: 0.75rem;
    margin: 0.75rem 0;
    display: flex;
    align-items: center;

    a {
      padding: 12px 0;
      font-weight: 400;
      line-height: 1.25rem;
      font-size: 15px;
      text-transform: capitalize;
      color: ${(props) => props.theme["gray-400"]};
      transition: all 500ms ease 0s;
    }
    :hover svg {
      display: block;
      color: ${(props) => props.theme.red};
    }
  }
`;
