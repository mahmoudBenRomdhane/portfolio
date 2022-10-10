import React from "react";
import { Props } from "./types";
import { Text } from "./styles";
const Index = ({ text }: Props): JSX.Element => {
  return <Text>{text}</Text>;
};

export default Index;
