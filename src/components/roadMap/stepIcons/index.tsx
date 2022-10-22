import React from "react";
import { Props } from "./types";
import {
  Circle,
  IconWrapper,
  Svg,
  DashedLine,
  Wrapper,
  StepWrapper,
} from "./styles";

const Index = ({ items }: Props): JSX.Element => {
  return (
    <>
      <Wrapper>
        <StepWrapper>
          <Circle>
            <IconWrapper>
              <Svg
                fill={items.icon.fill}
                xmlns={items.icon.xmlns}
                height={items.icon.height} //25
                width={items.icon.width} //30
                viewBox={items.icon.viewBox}
              >
                <path d={items.icon.path}></path>
              </Svg>
            </IconWrapper>
          </Circle>
        </StepWrapper>
        {items.isNotLast && <DashedLine />}
      </Wrapper>
    </>
  );
};

export default Index;
