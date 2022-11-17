import styled from "styled-components";
import Link from "next/link";

export default function SpotDetails({ spot }) {
  return (
    <>
      <DetailsSection>
        <DetailsHeadline>Details</DetailsHeadline>
        <h4>Adresse:</h4>
        <DetailsSubList>
          <AddresseLink href={spot.addresse}>{spot.addresse}</AddresseLink>
        </DetailsSubList>
        <h4>Wetterempfehlung:</h4>
        <DetailsSubList>
          {spot.weather.map((weather) => {
            return <li>{weather}</li>;
          })}
        </DetailsSubList>
        <h4>Altersempfehlung:</h4>
        <DetailsSubList>
          {spot.age.map((age) => {
            return <li>{age}</li>;
          })}
        </DetailsSubList>
        <h4>Tags:</h4>
        <DetailsSubList>
          {spot.tags.map((tag) => {
            return <li>#{tag}</li>;
          })}
        </DetailsSubList>
        <h4>Weitere Infos:</h4>
        <DetailsParagraph>{spot.infos}</DetailsParagraph>
      </DetailsSection>
    </>
  );
}

const DetailsSection = styled.section`
  padding: 10px;
  font-size: 14px;
`;

const DetailsHeadline = styled.h3`
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
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
