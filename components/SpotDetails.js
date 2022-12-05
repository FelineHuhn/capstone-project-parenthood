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
    <SpotDetailsSection>
      <DetailsHeadline>Details zum Spot</DetailsHeadline>
      <DetailTitle>Adresse:</DetailTitle>
      <div>
        <AddresseIcon
          aria-label="map icon"
          xmlns="http://www.w3.org/2000/svg"
          height="15px"
          viewBox="0 0 24 24"
          width="15px"
          fill="#596969"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </AddresseIcon>
        <AddresseLink
          href={`https://www.google.com/maps/place/${spot?.addresse}`}
        >
          {spot?.addresse}
        </AddresseLink>
      </div>
      <DetailTitle>Wetterempfehlung:</DetailTitle>
      <DetailsSubList>
        {spot?.weathersuggestion?.map((weather) => {
          return <li key={nanoid()}>{weather}</li>;
        })}
      </DetailsSubList>
      <DetailTitle>Altersempfehlung:</DetailTitle>
      <DetailsSubList>
        {spot?.agesuggestion?.map((age) => {
          return <li key={nanoid()}>{age}</li>;
        })}
      </DetailsSubList>
      <DetailTitle>Tags:</DetailTitle>
      <DetailsSubList>
        {(spot?.tags.length === 1) & (spot?.tags[0] === "") ? (
          <li key={nanoid()}>#ParentHood</li>
        ) : (
          spot?.tags.map((tag) => {
            return <li key={nanoid()}>#{tag}</li>;
          })
        )}{" "}
      </DetailsSubList>
      <DetailTitle>Weitere Infos:</DetailTitle>
      {spot?.information.length > 1 ? (
        <DetailsParagraph>{spot?.information}</DetailsParagraph>
      ) : (
        <DetailsParagraph>Keine</DetailsParagraph>
      )}
      {isShownModal && (
        <ModalBackground>
          <DeleteModal>
            <ModalMessage>
              Möchtest du diesen Spot wirklich LÖSCHEN?{" "}
            </ModalMessage>
            <ModalButtons>
              <Button
                type="button"
                variant="deletemodal-cancel"
                onClick={() => {
                  setIsShownModal((prevState) => !prevState);
                }}
              >
                Abbrechen
              </Button>
              <Button
                type="button"
                variant="deletemodal-delete"
                onClick={() => deleteSpot(spot.id)}
              >
                Löschen
              </Button>
            </ModalButtons>
          </DeleteModal>
        </ModalBackground>
      )}
      <ButtonStyling>
        <EditButton href={{ pathname: `/edit`, query: { id: spot.id } }}>
          <svg
            aria-label="edit icon"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="#fb752d"
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
        </EditButton>

        <Button
          type="button"
          variant={"delete"}
          onClick={() => {
            setIsShownModal((prevState) => !prevState);
          }}
        >
          <svg
            aria-label="delete icon"
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="#fb752d"
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
    </SpotDetailsSection>
  );
}

const SpotDetailsSection = styled.section`
  width: 100%;
  padding: 10px;
`;

const DetailsHeadline = styled.h2`
  text-align: center;
  color: var(--third-color);
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0.5px 0.5px 1px lightgray;
`;

const DetailTitle = styled.h3`
  color: var(--secondary-color);
`;

const AddresseIcon = styled.svg`
  margin-right: 5px;
`;

const AddresseLink = styled(Link)`
  color: var(--first-font-color);

  :hover {
    cursor: pointer;
    filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.1));
  }
`;

const DetailsSubList = styled.ul`
  padding: 5px;
  list-style: none;
  padding: 0 10px;
  color: var(--first-font-color);
`;

const DetailsParagraph = styled.p`
  text-align: justify;
  padding: 0 10px;
  word-break: break-all;
  color: var(--first-font-color);
`;

const DeleteModal = styled.div`
  background-color: var(--white-color);
  color: var(--first-font-color);
  padding: 10px;
  height: 140px;
  position: fixed;
  top: 50%;
  left: 10%;
  right: 10%;
  border-radius: 7px;
`;

const ModalMessage = styled.h3`
  padding: 0 10px;
  text-align: center;
  margin-bottom: 25px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const ButtonStyling = styled.div`
  display: flex;
  justify-content: right;
`;

const EditButton = styled(Link)`
  padding: 3px;
  margin: 5px;

  :hover  {
    filter: var(--primary-dropshadow);
  }
`;
