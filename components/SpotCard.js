import styled from "styled-components";
import Image from "next/image";
import placeholderSpotImage from "../assets/images/card-image-placeholder.jpg";

export default function SpotCard({spot}) {
  return (
    <Card>
      <SpotImage src={placeholderSpotImage} alt="Placeholder Spot Image" />
      <SpotInfos>
        <SpotCategory>{spot.category}</SpotCategory>
        <SpotName>"{spot.name}"</SpotName>
      </SpotInfos>
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
