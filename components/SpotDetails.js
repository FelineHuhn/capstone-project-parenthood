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
        {/* <AddresseLink href={spot?.addresse}>{spot?.addresse}</AddresseLink> */}
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
        <EditLink href={{ pathname: `/edit`, query: { id: spot.id } }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </EditLink>

        <Button
          type="button"
          variant="delete"
          onClick={() => {
            setIsShownModal((prevState) => !prevState);
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

const EditLink = styled(Link)`
  align-self: flex-start;
  font-weight: 600;
  font-size: 16px;
  margin: 5px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: oldlace;
  padding: 1px;
`;
