import Footer from "./Footer";

import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
