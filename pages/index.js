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
      <StyledWelcomeMessage>
        <WelcomeText>Willkommen in deiner</WelcomeText>
        <AppTitle>ParentHood</AppTitle>
      </StyledWelcomeMessage>
      <LinkToSpots href={"/spots"}>Hier geht's zu den Spots!</LinkToSpots>
      <AppDescription>
        Entdecke und teile Spots, die du mit deinen Kids besuchen kannst!
      </AppDescription>
      <ParenthoodGif
        src="/images/parenthood.gif"
        alt="a magnifying glass over a map"
        height={100}
        width={170}
        priority
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

const StyledWelcomeMessage = styled.div`
  background-color: var(--white-color);
  border-radius: 3px;
  box-shadow: var(--primary-boxshadow);
  padding: 10px 20px 5px 20px;
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
  background-color: var(--third-color);
  text-decoration: none;
  box-shadow: var(--primary-boxshadow);
  padding: 5px 10px;
  border-radius: 3px;
  z-index: 10;
  margin-top: 390px;
  @media (min-width: 376px) {
    font-size: 1.1rem;
    position: absolute;
    bottom: 200px;
    z-index: 20;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  :hover {
    cursor: pointer;
  }
`;

const AppDescription = styled.span`
  background-color: var(--white-color);
  color: var(--primary-color);
  border-radius: 3px;
  box-shadow: var(--primary-boxshadow);
  padding: 13px;
  margin: 10px 30px 0 30px;
  text-align: center;
  z-index: 10;
  @media (min-width: 376px) {
    max-width: 300px;
    font-size: 1.2rem;
    padding: 30px;
    box-shadow: none;
    position: absolute;
    top: 430px;
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
