import React from "react";
import { FaUser } from "react-icons/fa";
import { Box, IconBox, ItemsContainer, LoginBox, MenuContainer, MenuItemContainer, NavbarContainer } from "./styles";

const Navbar: React.FC = () => {
  return <NavbarContainer>
    <IconBox>StoryOutliner</IconBox>
    <MenuContainer>
      <ItemsContainer>
        <MenuItemContainer>Characterboard</MenuItemContainer>
        <MenuItemContainer>Storyboard</MenuItemContainer>
        <MenuItemContainer>Eventline</MenuItemContainer>
      </ItemsContainer>
      <LoginBox>
        <Box>
          <FaUser />
        </Box>
      </LoginBox>
    </MenuContainer>
  </NavbarContainer>;
};

export default Navbar;
