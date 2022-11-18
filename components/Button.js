import styled, { css } from "styled-components";

export function Button({ type, variant, onClick, children }) {
  return (
    <>
      <DefaultButton type={type} variant={variant} onClick={onClick}>
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

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      margin: 10px;
    `}

  ${({ variant }) =>
    variant === "details" &&
    css`
      font-weight: 600;
    `}
`;
