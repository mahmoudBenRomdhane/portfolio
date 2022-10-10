import styled from "styled-components";

export const Svg = styled.svg<{ fill: string }>`
  fill: ${(props) => props.fill};
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-width: 0px;
  border-radius: 12px 12px 12px 12px;
  box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 6%);
  :hover {
    background-color: ${(props) => props.theme.default.primary};
  }
  &:hover ${Svg} {
    fill: white;
  }
`;

/*
    &:hover ${Text}   {
        display: none;
    }
*/
