import React from "react";
import { Props } from "./types";
import { IconWrapper, Svg } from "./styles";

const Index = ({ height, path, viewBox, width, xmlns }: Props): JSX.Element => {
  return (
    <IconWrapper>
      <Svg
        fill="#7819CB"
        xmlns={xmlns}
        viewBox={viewBox}
        width={width}
        height={height}
      >
        {" "}
        <path d={path} />
      </Svg>
    </IconWrapper>
  );
};

export default Index;
