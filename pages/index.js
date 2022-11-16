import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import styled from "styled-components";
import SpotCard from "../components/SpotCard";
import spots from "../helpers/mockSpots";

export default function Home() {
  return (
    <>
      <Headline>ParentHood Spots</Headline>
      <SpotList>
        {spots
          ?.sort((a, b) => a.name.localeCompare(b.name))
          ?.map((spot) => (
            <SpotCard spot={spot} key={spot.name}></SpotCard>
          ))}
      </SpotList>
    </>
  );
}

const Headline = styled.h1`
  text-align: center;
`;

const SpotList = styled.ul`
  list-style: none;
`;
