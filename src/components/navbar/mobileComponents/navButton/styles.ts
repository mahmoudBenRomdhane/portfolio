import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 25px;
  cursor: pointer;
`;
export const Step = styled.div`
  height: 30%;
  width: 100%;
  border-bottom: 3px solid;
  border-bottom-color: ${(props) => props.theme.default.primary};
`;
