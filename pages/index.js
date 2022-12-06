import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Background>
        <Image
          src="/images/landingpage.jpg"
          alt="child jumping in a puddle"
          height={667}
          width={375}
        />
      </Background>
      <StyledContainer>
        <WelcomeText>Willkommen in deiner</WelcomeText>
        <AppTitle>ParentHood</AppTitle>
      </StyledContainer>
      <LinkToSpots href={"/spots"}>Hier geht's zu den Spots!</LinkToSpots>
      <AppDescription>
        Entdecke zahlreiche Spots, die du mit deinen Kids besuchen kannst &
        teile auch Spots aus deiner Hood!
      </AppDescription>
      <ParenthoodGif
        src="/images/parenthood.gif"
        alt="a magnifying glass over a map"
        height={100}
        width={170}
      />
    </main>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  position: fixed;
  overflow-y: hidden;
  @media (min-width: 376px) {
    display: none;
  }
`;

const StyledContainer = styled.div`
  background-color: var(--white-color);
  border-radius: 10px;
  box-shadow: var(--primary-boxshadow);
  padding: 2px 15px;
  margin: 15px;
  text-align: center;
  z-index: 10;
  @media (min-width: 376px) {
    margin-top: 120px;
    padding: 40px 40px 440px 40px;
  } ;
`;

const WelcomeText = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: var(--primary-color);
  @media (min-width: 376px) {
    font-size: 1.7rem;
  }
`;

const AppTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: var(--third-color);
  @media (min-width: 376px) {
    font-size: 3rem;
  }
`;

const LinkToSpots = styled(Link)`
  color: var(--white-color);
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  box-shadow: var(--primary-boxshadow);
  padding: 8px;
  border-radius: 7px;
  z-index: 10;
  @media (min-width: 376px) {
    font-size: 1.1rem;
    position: absolute;
    top: 615px;
    z-index: 20;
  }
  :hover {
    cursor: pointer;
  }
`;

const AppDescription = styled.span`
  background-color: var(--white-color);
  color: var(--primary-color);
  border-radius: 10px;
  box-shadow: var(--primary-boxshadow);
  padding: 0 8px;
  margin: 400px 28px 0 28px;
  text-align: center;
  z-index: 10;
  @media (min-width: 376px) {
    max-width: 300px;
    font-size: 1.2rem;
    box-shadow: none;
    position: absolute;
    top: 55px;
    z-index: 20;
  }
`;

const ParenthoodGif = styled(Image)`
  display: none;

  @media (min-width: 376px) {
    display: inline;
    position: absolute;
    z-index: 20;
    top: 320px;
  }
`;
