import React from "react";
import { Container, Wrapper, Bar, LearnMore } from "./styled";
import Button from "../../../../components/button";

const Welcome = () => {
  const title = "Vignette";
  return (
    <Container>
      <Wrapper className="titleDiv">
        <h1>{title}</h1>
        <p className="motto">Make your streams more virtual</p>
        <p className="headWriteUp">Free and Open Source</p>
        <Button text="Download" />

        <LearnMore>
          <p>Learn More</p>
          <span>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </LearnMore>
      </Wrapper>
      <Bar />
    </Container>
  );
};

export default Welcome;
