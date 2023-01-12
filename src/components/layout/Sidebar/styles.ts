import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  width: 100%;
  background-color: ${(props) => props.theme.colors.third};
  opacity: 0.8;
`;
