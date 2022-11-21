import styled from "styled-components";
import SpotCard from "../components/SpotCard";
import CreateSpot from "../components/CreateSpot";
import { Button } from "../components/Button";
import { useState } from "react";
import { nanoid } from "nanoid";
import { spotsList } from "../helpers/mockSpots";

export default function Home({ spots, setSpot }) {
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
    const tagsArray = tags.split(" ");
    const newSpot = {
      category,
      name,
      addresse,
      weathersuggestion,
      agesuggestion,
      tags: tagsArray,
      information,
    };

    setSpot([{ ...newSpot, id: nanoid(), isChecked: false }, ...spotsList]);
    closeCreateForm();
  }

  return (
    <Main>
      <Headline>ParentHood Spots</Headline>
      <SpotList>
        {spots
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((spot) => (
            <SpotCard spot={spot} key={spot.name}></SpotCard>
          ))}
      </SpotList>

      <Button
        type="button"
        variant="create"
        onClick={() => {
          setIsShown((prevState) => !prevState);
        }}
      >
        Parenthood Spot hinzufügen
      </Button>
      {isShown && (
        <CreateSpot
          closeCreateForm={closeCreateForm}
          addSpot={addSpot}
          isShown={isShown}
          spot={spots}
        ></CreateSpot>
      )}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Headline = styled.h1`
  justify-content: center;
  align-items: center;
`;

const SpotList = styled.ul`
  list-style: none;
  max-width: 375px;
  padding: 0;
`;
