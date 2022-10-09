import styled from "styled-components";
import { device } from "../../utils/devices";

export const Wrapper = styled.div`
  height: 90px;
  width: 100%;
  box-shadow: 0px 0px 47px 0px rgb(0 0 0 / 9%);
  display: flex;
  align-items: center;
`;
export const NavitemsWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    display: none;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6%;
  @media ${device.tablet} {
    display: none;
  }
`;
export const NavButtonWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }
`;
export const NameWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    margin-left: 40px;
    display: block;
  }
`;
