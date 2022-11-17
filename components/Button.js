import styled from "styled-components";

export default function Button({ children }) {
  return <DefaultButton>{children}</DefaultButton>;
}

const DefaultButton = styled.button`
  border: 1px solid grey;
  border-radius: 3px;
  background-color: oldlace;

  &:hover {
    background-color: lightgrey;
  }
`;
