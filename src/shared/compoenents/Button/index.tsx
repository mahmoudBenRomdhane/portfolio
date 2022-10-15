import React from "react";
import { Button } from "./styles";
import { Props } from "./types";

const Index = ({
  width,
  height,
  color,
  hoverColor,
  Link,
  fontSize,
  fontColor,
  text,
}: Props): JSX.Element => {
  return (
    <Button
      width={width}
      height={height}
      color={color}
      hoverColor={hoverColor}
      fontSize={fontSize}
      fontColor={fontColor}
    >
      {text}
    </Button>
  );
};

export default Index;
