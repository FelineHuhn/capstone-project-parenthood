import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Title>ParentHood</Title>
      <Headline>{children}</Headline>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 0 8px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  z-index: 100;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 200;
  margin: 0;
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.8));
`;

const Headline = styled.h2`
  margin: 0;
  font-size: 24px;
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.8));
`;
