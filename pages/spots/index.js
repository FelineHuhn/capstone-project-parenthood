import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import Header from "../../components/Header";

export default function Spots({ spots, setSpot }) {
  function deleteSpot(id) {
    setSpot((spots) => {
      const newSpotsList = spots.filter((spot) => spot.id !== id);
      return newSpotsList;
    });
  }

  function toggleFavorite(id) {
    const newSpotArray = spots.map((spot) => {
      if (spot.id === id) {
        return {
          ...spot,
          isFavorite: !spot.isFavorite,
        };
      } else {
        return spot;
      }
    });
    setSpot(newSpotArray);
  }

  return (
    <>
      <Header>ParentHood Spots</Header>
      <StyledSpotsPage>
        <SpotList>
          {spots
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((spot) => (
              <SpotCard
                spot={spot}
                key={spot.name}
                deleteSpot={deleteSpot}
                toggleFavorite={toggleFavorite}
              />
            ))}
        </SpotList>
      </StyledSpotsPage>
    </>
  );
}

const SpotList = styled.ul`
  list-style: none;
  max-width: 375px;
  padding: 0;
`;

const StyledSpotsPage = styled.div`
  margin: 50px 0 30px 0;
`;

export { StyledSpotsPage, SpotList };
