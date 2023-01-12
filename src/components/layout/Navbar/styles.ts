import styled from "styled-components";

export const NavbarContainer = styled.div`
  grid-area: navbar;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "icon menu-container";
  background-color: ${(props) => props.theme.colors.primary};
`;

export const IconBox = styled.div`
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  opacity: 0.7;
`;

export const MenuContainer = styled.div`
  grid-area: menu-container;
  display: flex;
  width: 100%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  font-weight: bold;
  opacity: 0.7;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 3px rgb(0, 0, 0, 0.7) solid;

  & > svg {
    stroke: #000;
    opacity: 0.7;
    &:hover {
      stroke: ${(props) => props.theme.colors.primary};
    }
  }
`;
