import styled from "styled-components";
import { device } from "../../utils/devices";

export const Wrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    z-index: 999;
    width: 70%;
    height: 100vh;
    background-color: #0d0a31;
    position: absolute;
  }
`;
export const IconWrapper = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 80px;
`;
export const ItemsWrapper = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
