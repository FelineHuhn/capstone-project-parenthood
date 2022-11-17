import styled from "styled-components";

export default function Button({ type, variant, onClick, children }) {
  return (
    <>
      <DefaultButton type={type} onClick={onClick}>
        {children}
      </DefaultButton>
    </>
  );
}

const DefaultButton = styled.button`
  border: 1px solid grey;
  border-radius: 3px;
  background-color: oldlace;

  &:hover {
    background-color: lightgrey;
  }
`;
