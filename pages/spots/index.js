import styled from "styled-components";
import SpotCard from "../../components/SpotCard";
import SpotForm from "../../components/SpotForm";
import { Button } from "../../components/Button";
import { useState } from "react";
import { nanoid } from "nanoid";

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
    <Main>
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

      <Button
        type="button"
        variant="create"
        onClick={() => {
          setIsShown((prevState) => !prevState);
        }}
      >
        ParentHood Spot hinzufügen
      </Button>
      {isShown && <SpotForm addSpot={addSpot} />}
    </Main>
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
