import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Title>{children}</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  z-index: 100;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.8));
`;
