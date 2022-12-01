import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import placeholderSpotImage from "../assets/images/suzi-kim-AdPvazshqDU-unsplash.jpg";
import { Button } from "./Button";
import SpotDetails from "./SpotDetails";

export default function SpotCard({
  spot,
  addSpot,
  deleteSpot,
  editSpot,
  toggleFavorite,
}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card>
      <CardStyling>
        <SpotImage src={placeholderSpotImage} alt="Placeholder Spot Image" />
        <SpotInfos>
          <div>
            <Button
              type={"button"}
              variant={"favorite"}
              onClick={() => {
                toggleFavorite(spot.id);
              }}
            >
              {spot.isFavorite ? (
                <FavoriteIcon
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#696159"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </FavoriteIcon>
              ) : (
                <FavoriteIcon
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#696159"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                </FavoriteIcon>
              )}
            </Button>
          </div>
          <SpotCategory>{spot.category}</SpotCategory>
          <SpotName>{spot.name}</SpotName>
          <ButtonStyling>
            <Button
              type="button"
              variant="details"
              name="detailsbutton"
              onClick={() => {
                setIsShown((prevState) => !prevState);
              }}
            >
              {isShown ? (
                <DetailsButtonIcon
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 0 24 24"
                  width="40px"
                  fill="#696159"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                </DetailsButtonIcon>
              ) : (
                <DetailsButtonText>Details ▾</DetailsButtonText>
              )}
            </Button>
          </ButtonStyling>
        </SpotInfos>
      </CardStyling>

      {isShown && (
        <>
          <SpotDetails
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
            <ClosingButtonText>Schließen</ClosingButtonText>
          </Button>
        </>
      )}
    </Card>
  );
}

const Card = styled.li`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 10px;
  margin: 0 15px 30px 15px;
  padding: 10px;
`;

const CardStyling = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpotImage = styled(Image)`
  width: 45%;
  height: 45%;
  border-radius: 5px;
  filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.8));
  position: relative;
  z-index: 10;
`;

const SpotInfos = styled.article`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 50%;
  overflow-wrap: break-word;
`;

const FavoriteIcon = styled.svg`
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.2));
  position: relative;
  z-index: 10;

  :hover  {
    filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
  }
`;

const SpotCategory = styled.h2`
  color: var(--third-color);
  font-size: 20px;
  font-weight: 500;
  text-shadow: 0.5px 0.5px 1.5px lightgray;
`;

const SpotName = styled.p`
  color: var(--first-font-color);
  filter: drop-shadow(0.5px 0.5px 0.5px rgb(0 0 0 / 0.2));
  font-size: 17px;
  margin-top: -5px;
  font-family: "ComingSoon";
`;

const ButtonStyling = styled.div`
  width: 60%;
  text-align: center;
  box-shadow: 0px 14px 5px -15px #111;
  margin: 6px 0 0 78px;
`;

const DetailsButtonText = styled.p`
  margin-top: 35px;
  color: #696159;
  font-size: 16px;
  box-shadow: 0px 14px 5px -15px #111;
`;

const DetailsButtonIcon = styled.svg`
  margin-top: 15px;
`;

const ClosingButtonText = styled.p`
  color: var(--second-font-color);
  margin: 1px;
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.1));
`;
