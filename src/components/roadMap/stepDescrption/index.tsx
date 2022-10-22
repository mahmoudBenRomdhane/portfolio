import React from "react";
import { Props } from "./types";
import { Wrapper, Title, Descrption } from "./styles";

const Index = ({}: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title>Text</Title>
      <Descrption>
        The decrption helps you to create and test business apps in real time
      </Descrption>
    </Wrapper>
  );
};

export default Index;
