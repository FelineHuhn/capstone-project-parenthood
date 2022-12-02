import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import { SpotList } from "../spots";
import { useEffect } from "react";

export default function FavoriteSpots({ spots, setSpot, setTitle }) {
  useEffect(() => {
    setTitle("Lieblings-Spots");
  });

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
      <StyledFavoritesSection>
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
      </StyledFavoritesSection>
    </>
  );
}

const StyledFavoritesSection = styled.section`
  margin: 60px 0 30px 0;
`;
