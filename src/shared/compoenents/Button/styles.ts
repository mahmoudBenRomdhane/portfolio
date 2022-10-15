import styled from "styled-components";

export const Button = styled.div<{
  width: string;
  height: string;
  color: string;
  hoverColor: string;
  fontSize: string;
  fontColor: string;
}>`
  background-color: ${(props) => props.color};
  border-radius: 8px 8px 8px 8px;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: 24px;
  font-weight: 600;
  box-shadow: 0px 15px 30px -10px rgb(52 16 131 / 54%);
  border: 0px solid #7819cb;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
