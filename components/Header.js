import styled from "styled-components";

export default function Header({ title }) {
  return (
    <StyledHeader>
      <Title>P a r e n t H o o d</Title>
      <Headline>{title}</Headline>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: var(--white-color);
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px 0 6px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  z-index: 100;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.8));
`;

const Headline = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.8));
`;
