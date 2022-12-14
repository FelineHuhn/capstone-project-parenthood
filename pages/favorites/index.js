import styled from "styled-components";
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
          {!spots.find((spot) => spot.isFavorite === true) ? (
            <PlaceholderText>
              Du hast noch keine Lieblings-Spots ausgewählt.
            </PlaceholderText>
          ) : (
            ""
          )}
        </SpotList>
      </StyledFavoritesSection>
    </>
  );
}

const StyledFavoritesSection = styled.section`
  margin: 80px 0 30px 0;
`;

const PlaceholderText = styled.p`
  padding: 50px;
  text-align: center;
  color: var(--primary-color);
`;
