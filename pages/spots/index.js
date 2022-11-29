import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import Header from "../../components/Header";
import SpotFilter from "../../components/SpotFilter";
import { useState } from "react";

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

  const [currentFilter, setCurrentFilter] = useState("all");

  function filterSpots(currentFilter) {
    switch (currentFilter) {
      case "all":
        return spots.filter((spot) => spot.category === "all");
      case "Spielplatz":
      case "Indoor Spielplatz":
      case "Spielen":
      case "Sport":
      case "Sportplatz":
      case "Sporthalle":
      case "Sportkurs":
      case "Klettern":
      case "Skaten":
      case "Wintersport":
      case "Schwimmbad":
      case "Freibad":
      case "Badesee":
      case "Strand & Meer":
      case "Park":
      case "Wald":
      case "Kultur":
      case "Musik":
      case "Kunst":
      case "Zirkus":
      case "Basteln":
      case "Essen & Trinken":
      case "Übernachtung":
      case "Freizeitpark":
      case "Jahrmarkt":
      case "Zoo":
      case "Tiere":
      case "Bauernhof":
      case "Ponyreiten":
      case "Sonstiger Spot":
        return spots.filter((spot) => spot.category === currentFilter);
      case "all":
      default:
        return spots;
    }
  }

  function handleCategorySelect(event) {
    setCurrentFilter(event.target.value);
  }

  return (
    <>
      <Header>ParentHood Spots</Header>
      <SpotFilter handleChange={handleCategorySelect} />
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
  margin: 20px 0 30px 0;
`;

export { StyledSpotsPage, SpotList };
