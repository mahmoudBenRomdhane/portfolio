import styled from "styled-components";

export const Row = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;
//styled.div<{ image : string }>
