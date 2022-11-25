import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import placeholderSpotImage from "../assets/images/card-image-placeholder.jpg";
import { Button } from "./Button";
import SpotDetails from "./SpotDetails";

export default function SpotCard({
  spot,
  addSpot,
  deleteSpot,
  editSpot,
  closeCreateForm,
}) {
  const [isShown, setIsShown] = useState(false);
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
            setIsShown((prevState) => !prevState);
          }}
        >
          {isShown ? "Details ⌃" : "Details"}
        </Button>
      </SpotInfos>
      {isShown && (
        <>
          <SpotDetails
            closeCreateForm={closeCreateForm}
            spot={spot}
            isShown={isShown}
            addSpot={addSpot}
            deleteSpot={deleteSpot}
            editSpot={editSpot}
          />
          <Button
            type="button"
            variant="cancel"
            onClick={() => {
              setIsShown((prevState) => !prevState);
            }}
          >
            Schließen
          </Button>
        </>
      )}
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

const LinkToDetails = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid black;
  padding: 2px;
  background-color: oldlace;
  border-radius: 3px;

  &:hover {
    background-color: lightgrey;
  }
`;
