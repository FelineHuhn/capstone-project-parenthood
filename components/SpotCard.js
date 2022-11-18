import styled from "styled-components";
import Image from "next/image";
import placeholderSpotImage from "../assets/images/card-image-placeholder.jpg";
import { Button } from "./Button";
import SpotDetails from "./SpotDetails";
import { useState } from "react";

export default function SpotCard({ spot }) {
  const [state, setState] = useState("hide");

  return (
    <Card>
      <SpotImage src={placeholderSpotImage} alt="Placeholder Spot Image" />
      <SpotInfos>
        <SpotCategory>{spot.category}</SpotCategory>
        <SpotName>"{spot.name}"</SpotName>
        <Button
          type="button"
          variant="details"
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
          Details
        </Button>
      </SpotInfos>
      {state === "show" ? (
        <>
          <SpotDetails spot={spot} state={state} key={spot.name}></SpotDetails>
          <Button
            type="button"
            variant="cancel"
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
            Schließen
          </Button>
        </>
      ) : null}
    </Card>
  );
}

const Card = styled.li`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 10px 20px 10px;
`;

const SpotImage = styled(Image)`
  width: 40%;
  height: 40%;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const SpotInfos = styled.article`
  margin-right: 10px;
  margin-top: -10px;
  text-align: right;
`;

const SpotCategory = styled.h3`
  color: darkgreen;
`;

const SpotName = styled.h4`
  color: dimgray;
`;
