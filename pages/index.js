import Image from "next/image";
import landingpageImage from "../public/images/landingpage.jpg";
import styled from "styled-components";
import Link from "next/link";

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
      <WelcomeMessage>
        <WelcomeText>Willkommen bei</WelcomeText>
        <AppTitle>P a r e n t H o o d</AppTitle>
      </WelcomeMessage>
      <LinkToSpots href={"/spots"}>Hier geht's zu den Spots!</LinkToSpots>
      <AppDescription>
        <p>
          Entdecke zahlreiche Spots, die du mit deinen Kids besuchen kannst &
          teile Spots aus deiner Hood!
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

const WelcomeMessage = styled.div`
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
  font-size: 1.6rem;
  margin: 2px;
  color: var(--primary-color);
  filter: var(--primary-dropshadow);
`;

const AppTitle = styled.h1`
  font-size: 1.8rem;
  margin: 2px;
  color: var(--third-color);
  filter: var(--secondary-dropshadow);
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
    display: none;
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
    display: none;
  }
`;
