import styled from "styled-components";

export default function Main() {
  return <StyledMain></StyledMain>;
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  z-index: -10;
`;
export { StyledMain };
