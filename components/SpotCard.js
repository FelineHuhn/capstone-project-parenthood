import styled from "styled-components";
import { Image } from "cloudinary-react";
import { useState } from "react";
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

  const placeholderUrl =
    "https://res.cloudinary.com/duvldhych/image/upload/v1670229542/placeholder_gbrfwx.jpg";

  return (
    <Card>
      <CardStyling>
        <SpotImage
          src={spot?.imageUrl === undefined ? placeholderUrl : spot?.imageUrl}
          width="40"
          height="40"
          alt="photo of the spot"
        />
        <SpotInfos>
          <div>
            <Button
              type="button"
              variant="favorite"
              aria-label="button that marks the spot as a favorite and removes the mark again"
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
          <div>
            <SpotCategory>{spot.category}</SpotCategory>
            <SpotName>{spot.name}</SpotName>
          </div>
          <div>
            <Button
              type="button"
              variant="details"
              aria-label="button that fold out the details of the spot and fold them in again"
              onClick={() => {
                setIsShown((prevState) => !prevState);
              }}
            >
              {isShown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 25 20"
                  width="30px"
                  fill="#696159"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                </svg>
              ) : (
                "Details ▾"
              )}
            </Button>
          </div>
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
            Schließen
          </Button>
        </>
      )}
    </Card>
  );
}

const Card = styled.li`
  background-color: var(--white-color);
  box-shadow: var(--primary-boxshadow);
  border-radius: 10px;
  margin: 0 15px 30px 15px;
  padding: 10px;
`;

const CardStyling = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpotImage = styled(Image)`
  width: 47%;
  height: 47%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SpotInfos = styled.article`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-between;
  width: 50%;
`;

const FavoriteIcon = styled.svg`
  :hover  {
    filter: var(--primary-dropshadow);
  }
`;

const SpotCategory = styled.h2`
  color: var(--third-color);
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0.5px 0.5px 1.5px lightgray;
  margin-bottom: -5px;
`;

const SpotName = styled.p`
  color: var(--first-font-color);
  font-size: 1.1rem;
  font-family: "ComingSoon";
`;
