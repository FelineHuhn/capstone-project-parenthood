import styled from "styled-components";
import SpotCard from "../components/SpotCard";
import spots from "../helpers/mockSpots";
import CreateSpot from "../components/CreateSpot";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <Main>
      <Headline>ParentHood Spots</Headline>
      <SpotList>
        {spots
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((spot) => (
            <SpotCard spot={spot} key={spot.name}></SpotCard>
          ))}
      </SpotList>
      <Button type="button" variant="create">
        Parenthood Spot hinzufügen
      </Button>
      <CreateSpot></CreateSpot>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  justify-content: center;
  align-items: center;
`;

const SpotList = styled.ul`
  list-style: none;
  max-width: 450px;
  padding: 0;
`;
