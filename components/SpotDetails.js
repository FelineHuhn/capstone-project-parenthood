import styled from "styled-components";
import Link from "next/link";
import { nanoid } from "nanoid";
import { Button } from "./Button";
import { useState } from "react";
import SpotForm from "./SpotForm";

export default function SpotDetails({ spot, addSpot, deleteSpot, editSpot }) {
  const [isShownModal, setIsShownModal] = useState(false);
  const [isShownForm, setIsShownForm] = useState(false);

  function closeEditForm() {
    setIsShownForm(() => {
      return false;
    });
  }

  return (
    <DetailsSection>
      <DetailsHeadline>Details</DetailsHeadline>
      <h3>Adresse:</h3>
      <DetailsSubList>
        <AddresseLink href={spot?.addresse}>{spot?.addresse}</AddresseLink>
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
      <DetailsParagraph>{spot?.information}</DetailsParagraph>
      {isShownModal && (
        <Background>
          <DeleteModal>
            <h3>
              Bist du dir sicher, dass du diesen Spot wirklich LÖSCHEN möchtest?
            </h3>
            <ModalButtons>
              <Button
                type="button"
                variant="deletemodal"
                onClick={() => {
                  setIsShownModal((prevState) => !prevState);
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
        </Background>
      )}
      <ButtonStyling>
        <Icon href={{ pathname: `/edit`, query: { id: spot.id } }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#4d5b5b"
          >
            <g>
              <rect fill="none" height="24" width="24" y="0" />
            </g>
            <g>
              <g>
                <path d="M13.95,13H9V8.05l5.61-5.61C13.78,2.16,12.9,2,12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8 c0-1.01-0.16-1.94-0.45-2.8L13.95,13z" />
                <polygon points="11,11 13.12,11 19.28,4.84 17.16,2.72 11,8.88" />
                <path d="M20.71,2L20,1.29C19.8,1.1,19.55,1,19.29,1c-0.13,0-0.48,0.07-0.71,0.29l-0.72,0.72l2.12,2.12l0.72-0.72 C21.1,3.02,21.1,2.39,20.71,2z" />
              </g>
            </g>
          </svg>
        </Icon>

        <Icon
          href={`/`}
          onClick={() => {
            setIsShownModal((prevState) => !prevState);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#4d5b5b"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </Icon>
      </ButtonStyling>
      {isShownForm && (
        <SpotForm
          closeEditForm={closeEditForm}
          spot={spot}
          addSpot={addSpot}
          isEditMode={true}
          editSpot={editSpot}
        />
      )}
    </DetailsSection>
  );
}

const DetailsSection = styled.section`
  width: 100%;
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
  background-color: white;
  padding: 15px;
  text-align: center;
  height: 140px;
  position: absolute;
  position: fixed;
  top: 50%;
  left: 5%;
  right: 5%;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonStyling = styled.div`
  display: flex;
  justify-content: right;
`;

const Icon = styled(Link)`
  padding: 3px;
  margin: 5px;

  &:hover {
    background-color: lightgrey;
  }
`;
