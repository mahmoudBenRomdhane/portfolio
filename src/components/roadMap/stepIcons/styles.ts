import styled from "styled-components";

export const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.default.primary};
`;
export const IconWrapper = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Svg = styled.svg`
  fill: #ffffff;
`;
export const DashedLine = styled.div`
  //background-color: ${(props) => props.theme.default.primary};
  height: 80px;
  border-right: 2px dashed;
  border-color: ${(props) => props.theme.default.primary}; ;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StepWrapper = styled.div`
  display: flex;
`;
