import styled from "styled-components";

export default function SpotDetails({ spot }) {
  return (
    <>
      <DetailsSection>
        <Headline>Details</Headline>
        <SubHeadline>Adresse:</SubHeadline>
        <Paragraph>{spot.addresse}</Paragraph>
        <SubHeadline>Wetterempfehlung:</SubHeadline>
        <Paragraph>{spot.weather}</Paragraph>
        <SubHeadline>Altersempfehlung:</SubHeadline>
        <Paragraph>{spot.age}</Paragraph>
        <SubHeadline>Tags:</SubHeadline>
        <Paragraph>#{spot.tags}</Paragraph>
        <SubHeadline>Weitere Infos:</SubHeadline>
        <Paragraph>{spot.infos}</Paragraph>
      </DetailsSection>
    </>
  );
}

const DetailsSection = styled.section`
  padding: 0px 20px 20px 20px;
  border-top: 1px solid black;
`;

const Headline = styled.h3`
  color: darkgreen;
`;

const SubHeadline = styled.h4``;

const Paragraph = styled.p`
  padding: 5px;
  border: 1px dotted black;
`;
