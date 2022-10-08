import styled from "styled-components";

export const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #0d0a31;
  cursor: pointer;
  margin-right: 20px;
  :hover {
    color: ${(props) => props.theme.default.primaryHover};
  }
`;
