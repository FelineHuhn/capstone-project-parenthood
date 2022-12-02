import styled from "styled-components";
import Header from "../../components/Header";
import SpotCard from "../../components/SpotCard";
import { SpotList } from "../spots";

export default function FavoriteSpots({ spots, setSpot }) {
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
      <Header>Lieblings-Spots</Header>
      <StyledFavoritesPage>
        <SpotList>
          {spots?.map((spot) => {
            if (spot.isFavorite === true) {
              return (
                <SpotCard
                  spot={spot}
                  key={spot.name}
                  deleteSpot={deleteSpot}
                  toggleFavorite={toggleFavorite}
                />
              );
            } else {
              return null;
            }
          })}
        </SpotList>
      </StyledFavoritesPage>
    </>
  );
}

const StyledFavoritesPage = styled.div`
  margin: 60px 0 30px 0;
`;
