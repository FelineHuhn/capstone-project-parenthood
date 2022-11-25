import styled from "styled-components";
import Link from "next/link";
import SpotCard from "../../components/SpotCard";
import { StyledMain } from "../../components/Main";

export default function Spots({ spots, setSpot }) {
  function deleteSpot(id) {
    setSpot((spots) => {
      const newSpotsList = spots.filter((spot) => spot.id !== id);
      return newSpotsList;
    });
  }

  return (
    <StyledMain>
      <h1>ParentHood Spots</h1>
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
