import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function Layout({ title, children }) {
  return (
    <>
      <Header title={title} />
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
