import styled from "styled-components";
import Image from "next/image";
import { device } from "../../utils/devices";

export const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 600px;
  display: flex;
  @media ${device.laptop} {
    flex-direction: column;
    //height: 100%;
  }
`;
export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media ${device.laptop} {
    height: 100%;
    width: 320px;
    display: flex;
  }
`;
export const IntroWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.laptop} {
    width: 100%;
    align-items: stretch;
  }
`;
export const Intro = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    height: 100%;
  }
`;
export const IntroTitle = styled.div`
  font-size: 52px;
  font-weight: 700;
  line-height: 58px;
  color: #0d0a31;
  min-width: 495px;
  z-index: 99999;
  margin-bottom: 15px;
  @media ${device.laptop} {
    font-size: 40px;
    min-width: unset;
  }
`;
export const IntroDescrption = styled.div`
  color: #6d747c;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  max-width: 70%;
  margin-bottom: 15px;
  @media ${device.laptop} {
    max-width: none;
  }
`;
export const ButtonsGroup = styled.div`
  display: flex;
`;

export const IntroImage = styled(Image)``;
export const TripWrapper = styled.div`
  display: flex;
  @media ${device.laptop} {
    display: none;
  }
`;
export const TripWrapperMobile = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
  }
`;
