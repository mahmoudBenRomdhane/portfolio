import React from "react";
import { Props } from "./types";
import {
  Wrapper,
  ImageWrapper,
  IntroWrapper,
  Intro,
  IntroTitle,
  IntroDescrption,
  IntroImage,
  TripWrapper,
} from "./styles";
import Row from "../../shared/compoenents/row/index";
import Button from "../../shared/compoenents/Button/index";
import { Colone } from "../../shared/compoenents/col/styles";

const Index = ({}: Props): JSX.Element => {
  return (
    <Wrapper>
      <IntroWrapper>
        <Intro>
          <IntroTitle>Software Developer</IntroTitle>
          <Row height="7%" />
          <IntroDescrption>
            Hi, Mahmoud ben Romdhane , Full stack Developer working at Arsela
            technologie, Click on Start to Know Me Better
          </IntroDescrption>
          <Row height="7%" />
          <Button
            color="#7819cb"
            fontColor="#ffffff"
            fontSize="16px"
            width="180px"
            height="45px"
            text="Contact Me"
            hoverColor="#aa46bd"
            Link="Contact Me"
          />
          <Row height="21%" />
          <TripWrapper>
            <Colone width="20%" />
            <Button
              color="#ffffff"
              fontColor="#7819cb"
              fontSize="32px"
              width="360px"
              height="90px"
              text="Start The Trip 👩‍🚀"
              hoverColor="#ffffff"
              Link="Contact Me"
            />
          </TripWrapper>
        </Intro>
      </IntroWrapper>
      <ImageWrapper>
        <IntroImage
          layout="fill"
          objectFit="cover"
          src="/image_processing20210517-25370-1vbkgy4.gif"
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Index;

// image 50%
//text 40%
//col 10%<iframe src="" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/10Clouds-computer-10clouds-10c-IauL6LvGNlT3ffhcqq">via GIPHY</a></p>
