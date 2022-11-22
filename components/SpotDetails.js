import styled from "styled-components";
import Link from "next/link";
import { nanoid } from "nanoid";
import { Button } from "./Button";
import { useState } from "react";

export default function SpotDetails({ spot, deleteSpot }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <DetailsSection>
      <DetailsHeadline>Details</DetailsHeadline>
      <h3>Adresse:</h3>
      <DetailsSubList>
        <AddresseLink href={spot.addresse}>{spot.addresse}</AddresseLink>
      </DetailsSubList>
      <h3>Wetterempfehlung:</h3>
      <DetailsSubList>
        {spot?.weathersuggestion?.map((weather) => {
          return <li key={nanoid()}>{weather}</li>;
        })}
      </DetailsSubList>
      <h3>Altersempfehlung:</h3>
      <DetailsSubList>
        {spot?.agesuggestion?.map((age) => {
          return <li key={nanoid()}>{age}</li>;
        })}
      </DetailsSubList>
      <h3>Tags:</h3>
      <DetailsSubList>
        {spot?.tags.map((tag) => {
          return <li key={nanoid()}>#{tag}</li>;
        })}
      </DetailsSubList>
      <h3>Weitere Infos:</h3>
      <DetailsParagraph>{spot.information}</DetailsParagraph>
      {isShown && (
        <DeleteModal>
          <h3>
            Bist du dir sicher, dass du diesen Spot wirklich löschen möchtest?
          </h3>
          <ModalButtons>
            <Button
              type="button"
              variant="deletemodal"
              onClick={() => {
                setIsShown((prevState) => !prevState);
              }}
            >
              Abbrechen
            </Button>
            <Button
              type="button"
              variant="deletemodal"
              onClick={() => deleteSpot(spot.id)}
            >
              Löschen
            </Button>
          </ModalButtons>
        </DeleteModal>
      )}
      <ButtonStyling>
        <Button
          type="button"
          variant="delete"
          onClick={() => {
            setIsShown((prevState) => !prevState);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </Button>
      </ButtonStyling>
    </DetailsSection>
  );
}

const DetailsSection = styled.section`
  padding: 10px;
  font-size: 14px;
`;

const DetailsHeadline = styled.h2`
  color: darkgreen;
  font-size: 18px;
`;

const DetailsSubList = styled.ul`
  font-size: 16px;
  padding: 5px;
  list-style: none;
  padding: 0 10px 0 10px;
`;

const DetailsParagraph = styled.p`
  text-align: justify;
  padding: 0 10px 0 10px;
`;

const AddresseLink = styled(Link)`
  color: darkgreen;
  cursor: pointer;
`;

const DeleteModal = styled.div`
  background-color: oldlace;
  box-shadow: 3px 2px 3px 2px grey;
  padding: 10px;
  text-align: center;
  margin: 20px;
  height: 130px;
`;

const ButtonStyling = styled.div`
  display: flex;
  justify-content: right;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;
