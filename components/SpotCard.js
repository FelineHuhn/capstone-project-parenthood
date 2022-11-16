import styled from "styled-components";
import Image from "next/image";
import placeholderSpotImage from "../assets/images/card-image-placeholder.jpg";

export default function SpotCard(spot) {
  console.log(spot);

  return (
    <>
      <Card>
        <SpotImage src={placeholderSpotImage} alt="Placeholder Spot Image" />
        <SpotInfos>
          <h3>{spot.spot.category}</h3>
          <h4>"{spot.spot.name}"</h4>
        </SpotInfos>
      </Card>
    </>
  );
}

const Card = styled.li`
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 20px 0px -20px;
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

  h3 {
    color: darkgreen;
  }

  h4 {
    margin-top: -10px;
  }
`;
