import styled from "styled-components";
import Link from "next/link";

export default function SpotDetails({ spot }) {
  return (
    <>
      <DetailsSection>
        <DetailsHeadline>Details</DetailsHeadline>
        <SubHeadline>Adresse:</SubHeadline>
        <AddresseLink href={spot.addresse}>{spot.addresse}</AddresseLink>
        <SubHeadline>Wetterempfehlung:</SubHeadline>
        <DetailsList>
          {spot.weather.map((weather) => {
            return <li>{weather}</li>;
          })}
        </DetailsList>
        <SubHeadline>Altersempfehlung:</SubHeadline>
        <DetailsList>
          {spot.age.map((age) => {
            return <li>{age}</li>;
          })}
        </DetailsList>
        <SubHeadline>Tags:</SubHeadline>
        <DetailsList>
          {spot.tags.map((tag) => {
            return <li>#{tag}</li>;
          })}
        </DetailsList>
        <SubHeadline>Weitere Infos:</SubHeadline>
        <DetailsParagraph>{spot.infos}</DetailsParagraph>
      </DetailsSection>
    </>
  );
}

const DetailsSection = styled.section`
  padding: 0px 20px 20px 20px;
  border-top: 1px solid black;
`;

const DetailsHeadline = styled.h3`
  color: darkgreen;
`;

const SubHeadline = styled.h4``;

const DetailsParagraph = styled.p`
  padding: 5px;
  border: 1px dotted black;
`;

const DetailsList = styled.ul`
  padding: 5px;
  list-style: none;
`;

const AddresseLink = styled(Link)``;
