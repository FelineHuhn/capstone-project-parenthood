import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import SpotForm from "../../components/SpotForm";
import { Button } from "../../components/Button";
import { useState } from "react";
import { nanoid } from "nanoid";
import { StyledMain } from "../../components/Main";
import Link from "next/link";

export default function Spots({ spots, setSpot }) {
  const [isShown, setIsShown] = useState(false);

  function closeCreateForm() {
    setIsShown(() => {
      return false;
    });
  }

  function addSpot(
    category,
    name,
    addresse,
    weathersuggestion,
    agesuggestion,
    tags,
    information
  ) {
    const tagsArray = tags.split(", ");
    const newSpot = {
      id: nanoid(),
      category,
      name,
      addresse,
      weathersuggestion,
      agesuggestion,
      tags: tagsArray,
      information,
      isChecked: false,
    };

    setSpot((spots) => [newSpot, ...spots]);
    closeCreateForm();
  }

  function deleteSpot(id) {
    setSpot((spots) => {
      const newSpotsList = spots.filter((spot) => spot.id !== id);
      return newSpotsList;
    });
  }

  function editSpot(
    id,
    category,
    name,
    addresse,
    weathersuggestion,
    agesuggestion,
    tags,
    information
  ) {
    const tagsArray = tags.split(", ");

    const newSpot = {
      id,
      category,
      name,
      addresse,
      weathersuggestion,
      agesuggestion,
      tags: tagsArray,
      information,
      isChecked: false,
    };

    const newSpotsList = spots.map((spot) => {
      if (spot.id === newSpot?.id) {
        return newSpot;
      }
      return spot;
    });
    setSpot(newSpotsList);
  }

  return (
    <StyledMain>
      <Headline>ParentHood Spots</Headline>
      <SpotList>
        {spots
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((spot) => (
            <SpotCard
              closeCreateForm={closeCreateForm}
              spot={spot}
              key={spot.name}
              addSpot={addSpot}
              deleteSpot={deleteSpot}
              editSpot={editSpot}
            />
          ))}
      </SpotList>
      <StyledLink href={`/create`}>ParentHood Spot hinzufügen</StyledLink>
      {/* <Button
        type="button"
        variant="create"
        onClick={() => {
          setIsShown((prevState) => !prevState);
        }}
      >
        ParentHood Spot hinzufügen
      </Button>
      {isShown && <SpotForm addSpot={addSpot} />} */}
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
