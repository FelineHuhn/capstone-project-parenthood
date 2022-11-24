import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import { useState } from "react";
import { StyledMain } from "../../components/Main";
import Link from "next/link";

export default function Spots({ spots, setSpot }) {
  const [isShown, setIsShown] = useState(false);

  function deleteSpot(id) {
    setSpot((spots) => {
      const newSpotsList = spots.filter((spot) => spot.id !== id);
      return newSpotsList;
    });
  }

  return (
    <StyledMain>
      <Headline>ParentHood Spots</Headline>
      <SpotList>
        {spots
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((spot) => (
            <SpotCard spot={spot} key={spot.name} deleteSpot={deleteSpot} />
          ))}
      </SpotList>
      <StyledLink href={`/create`}>ParentHood Spot hinzufügen</StyledLink>
    </StyledMain>
  );
}

const Headline = styled.h1`
  justify-content: center;
  align-items: center;
`;

const SpotList = styled.ul`
  list-style: none;
  max-width: 375px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  padding: 8px 65px;
  background-color: darkgreen;
  color: white;
  border-radius: 10px;
  text-decoration: none;
`;
