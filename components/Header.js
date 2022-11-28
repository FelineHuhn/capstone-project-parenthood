import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Title>{children}</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #4d5b5b;
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Title = styled.h1`
  font-size: 20px;
`;
