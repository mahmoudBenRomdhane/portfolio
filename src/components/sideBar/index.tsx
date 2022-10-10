import React from "react";
import { Props } from "./types";
import { Wrapper, IconWrapper, ItemsWrapper } from "./styles";
import NavIcon from "../navbar/navIcon/index";
import SideBarItem from "./sideBarItem/index";
import Col from "../../shared/compoenents/col/index";

const Index = ({ handleSideBar, statue }: Props): JSX.Element => {
  return (
    <Wrapper>
      <IconWrapper
        onClick={() => {
          handleSideBar(statue);
        }}
      >
        <NavIcon
          fill="#ffffff"
          width="35px"
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          path="M26,7.115,23.885,5,15.5,13.385,7.115,5,5,7.115,13.385,15.5,5,23.885,7.115,26,15.5,17.615,23.885,26,26,23.885,17.615,15.5Z"
        />
        <Col width="20px" />
      </IconWrapper>
      <ItemsWrapper>
        <SideBarItem text="NavItem" />
        <SideBarItem text="NavItem" />
        <SideBarItem text="NavItem" />
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Index;

/*


      <SideBarItem text="Use Caeses" />
*/
