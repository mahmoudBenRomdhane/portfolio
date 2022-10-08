import React from "react";
import { Props } from "./types";
import { Text } from "./styles";

const Index = ({ text, id }: Props): JSX.Element => {
  const selectSection = (): void => {
    console.log(id);
  };
  return (
    <Text
      onClick={() => {
        selectSection();
      }}
    >
      {text}
    </Text>
  );
};

export default Index;
