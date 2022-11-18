import styled from "styled-components";
import SpotCard from "../components/SpotCard";
import CreateSpot from "../components/CreateSpot";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [state, setState] = useState("hide");
  const [spots, setSpot] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("spotsList") ?? []);
    } catch (error) {
      console.warn(error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("spotsList", JSON.stringify(spots));
  }, [spots]);

  function addSpot(
    category,
    name,
    addresse,
    weatgersuggestion,
    agesuggestion,
    tags,
    information
  ) {
    const newSpot = {
      category,
      name,
      addresse,
      weatgersuggestion,
      agesuggestion,
      tags,
      information,
    };

    setSpot((spotsList) => {
      const newSpotsList = [...spotsList, newSpot];

      return newSpotsList;
    });
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
          setState((prevState) => {
            if (prevState === "hide") {
              return "show";
            } else {
              return "hide";
            }
          });
        }}
      >
        Parenthood Spot hinzufügen
      </Button>
      {state === "show" ? (
        <>
          <CreateSpot state={state} addSpot={addSpot}></CreateSpot>
        </>
      ) : null}
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
  max-width: 450px;
  padding: 0;
`;
