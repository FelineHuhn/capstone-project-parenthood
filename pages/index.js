import Image from "next/image";
import landingpageImage from "../public/images/landingpage.jpg";
import styled from "styled-components";
import Link from "next/link";
import parenthoodGif from "../public/images/parenthood.gif";

export default function Home() {
  return (
    <>
      <Background>
        <Image
          src={landingpageImage}
          alt="child jumping in a puddle"
          height={667}
          width={375}
        />
      </Background>
      <StyledContainerMobileView>
        <WelcomeText>Willkommen in deiner</WelcomeText>
        <AppTitle>P a r e n t H o o d</AppTitle>
      </StyledContainerMobileView>
      <StyledContainerDesktopView>
        <WelcomeText>Willkommen in deiner</WelcomeText>
        <AppTitle>P a r e n t H o o d</AppTitle>
        <ParenthoodGif
          src={parenthoodGif}
          alt="a magnifying glass over a map"
          height={100}
          width={170}
        />
      </StyledContainerDesktopView>

      <LinkToSpots href={"/spots"}>Hier geht's zu den Spots!</LinkToSpots>
      <AppDescription>
        <p>
          Entdecke zahlreiche Spots, die du mit deinen Kids besuchen kannst &
          teile auch Spots aus deiner Hood!
        </p>
      </AppDescription>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  position: fixed;
  overflow-y: hidden;
  z-index: 120;
  @media (min-width: 376px) {
    display: none;
  }
`;

const StyledContainerMobileView = styled.div`
  background-color: var(--white-color);
  border-radius: 15px;
  box-shadow: var(--primary-boxshadow);
  text-align: center;
  padding: 5px 15px;
  margin-top: 20px;

  z-index: 130;
  @media (min-width: 376px) {
    display: none;
  }
`;

const WelcomeText = styled.p`
  font-size: 1.5rem;
  margin: 2px;
  color: var(--primary-color);
  filter: var(--primary-dropshadow);
  @media (min-width: 376px) {
    font-size: 1.8rem;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.8rem;
  margin: 2px;
  color: var(--third-color);
  filter: var(--secondary-dropshadow);
  @media (min-width: 376px) {
    margin-bottom: 40px;
    font-size: 2.2rem;
  }
`;

const LinkToSpots = styled(Link)`
  color: var(--white-color);
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  box-shadow: var(--primary-boxshadow);
  margin-top: 15px;
  padding: 8px;
  border-radius: 7px;
  z-index: 130;
  display: flex;
  @media (min-width: 376px) {
    margin-top: 40px;
    z-index: 0;
  }

  :hover {
    cursor: pointer;
  }
`;

const AppDescription = styled.p`
  background-color: var(--white-color);
  border-radius: 15px;
  box-shadow: var(--primary-boxshadow);
  z-index: 130;
  text-align: center;
  padding: 0 8px;
  margin: 370px 28px 0 28px;
  @media (min-width: 376px) {
    max-width: 375px;
    font-size: 1.2rem;
    z-index: 0;
    margin-top: 20px;
    box-shadow: none;
    background-color: transparent;
    margin-bottom: 70px;
  }
`;

const ParenthoodGif = styled(Image)`
  display: none;
  @media (min-width: 376px) {
    display: inline;
  }
`;

const StyledContainerDesktopView = styled.div`
  display: none;
  @media (min-width: 376px) {
    display: block;
    background-color: var(--white-color);
    border-radius: 15px;
    box-shadow: var(--primary-boxshadow);
    text-align: center;
    margin-top: 100px;
    padding: 30px;
  }
`;
