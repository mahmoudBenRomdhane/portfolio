import React from "react";
import { Props } from "./types";
import { Text, TextActive } from "./styles";

const Index = ({ text, id, active, handleNavigation }: Props): JSX.Element => {
  return (
    <>
      {active === false ? (
        <Text
          onClick={() => {
            handleNavigation(id);
          }}
        >
          {text}
        </Text>
      ) : (
        <TextActive>{text}</TextActive>
      )}
    </>
  );
};

export default Index;
