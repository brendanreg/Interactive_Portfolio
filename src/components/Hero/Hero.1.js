import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink
} from "./HeroElements";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Brendan Regelbrugge</h1>
            <h5>IT Professional</h5>
            <p></p>
          </HeroLeft>
          <HeroRight></HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>Scroll down ↓</ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}
