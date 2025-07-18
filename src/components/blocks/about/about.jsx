import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Address, Text, StyledSection, WorkTime, TextWrapper } from "./styled";

function About({ level }) {
  return (
    <StyledSection>
      <TextWrapper>
        <Title level={level} size={TitleSize.BIG}>
          The First Cat Café in Central Europe
        </Title>
        <Text>
          The largest cat café in Central Europe, home to 50 cats, each looking for a new family. You can pet them, take photos, and play with them.
        </Text>
        <WorkTime>Open daily from 8:00 to 23:00</WorkTime>
        <Address>Vienna, Mariahilfer Straße 27</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
