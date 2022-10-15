import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 600px;
  display: flex;
`;
export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;
export const IntroWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Intro = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;
export const IntroTitle = styled.div`
  font-size: 52px;
  font-weight: 700;
  line-height: 58px;
  color: #0d0a31;
`;
export const IntroDescrption = styled.div`
  color: #6d747c;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  max-width: 70%;
`;
export const ButtonsGroup = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const IntroImage = styled(Image)``;
export const TripWrapper = styled.div`
  display: flex;
`;
