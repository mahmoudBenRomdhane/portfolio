import React from "react";
import { Props } from "./types";
import { ButtonWrapper, Step } from "./styles";
const Index = ({ handleSideBar, statue }: Props): JSX.Element => {
  return (
    <ButtonWrapper
      onClick={() => {
        handleSideBar(statue);
      }}
    >
      <Step />
      <Step />
      <Step />
    </ButtonWrapper>
  );
};

export default Index;
