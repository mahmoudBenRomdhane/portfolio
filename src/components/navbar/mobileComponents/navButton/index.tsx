import React from "react";
import { Props } from "./types";
import { ButtonWrapper, Step } from "./styles";
const Index = ({}: Props): JSX.Element => {
  return (
    <ButtonWrapper>
      <Step />
      <Step />
      <Step />
    </ButtonWrapper>
  );
};

export default Index;
