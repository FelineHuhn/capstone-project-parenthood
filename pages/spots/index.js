import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import SpotFilter from "../../components/SpotFilter";
import { useState, useEffect } from "react";

export default function Spots({ spots, setSpot, setTitle }) {
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    setTitle("Spots");
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

  function handleCategorySelect(event) {
    const filterValue = event.target.value === "" ? "all" : event.target.value;
    setFilterValue(filterValue);
  }

  function filterSpots(spots) {
    return filterValue === "all"
      ? spots
      : spots.filter((spot) => spot.category === filterValue);
  }

  return (
    <>
      <SpotFilter handleChange={handleCategorySelect} />
      <StyledSpotsSection>
        <SpotList>
          {filterSpots(spots)
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
      </StyledSpotsSection>
    </>
  );
}

const SpotList = styled.ul`
  list-style: none;
  max-width: 375px;
  padding: 0;
`;

const StyledSpotsSection = styled.section`
  margin-bottom: 30px;
`;

export { StyledSpotsSection, SpotList };
