import styled from "styled-components";
import Image from "next/image";
import placeholderSpotImage from "../assets/images/card-image-placeholder.jpg";
import Button from "./Button";
import SpotDetails from "./SpotDetails";
import { useState } from "react";

const inititalState = "hide";

export default function SpotCard({ spot }) {
  const [state, setState] = useState(inititalState);

  return (
    <Card>
      <SpotImage src={placeholderSpotImage} alt="Placeholder Spot Image" />
      <SpotInfos>
        <SpotCategory>{spot.category}</SpotCategory>
        <SpotName>"{spot.name}"</SpotName>
        <Button
        // onClick={() => {
        //   setState("show");
        // }}
        >
          Details
        </Button>
      </SpotInfos>
      <SpotDetails spot={spot} key={spot.name}></SpotDetails>
    </Card>
  );
}

const Card = styled.li`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SpotImage = styled(Image)`
  margin: 10px;
  width: 45%;
  height: 45%;
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
