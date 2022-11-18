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
      font-weight: 600;
    `}

  ${({ variant }) =>
    variant === "details" &&
    css`
      font-weight: 600;
      font-size: 16px;
    `}

    ${({ variant }) =>
    variant === "create" &&
    css`
      font-weight: 600;
      font-size: 16px;
      padding: 8px 65px 8px 65px;
      background-color: darkgreen;
      color: white;
      border-radius: 10px;
    `}

    ${({ variant }) =>
    variant === "submit" &&
    css`
      font-weight: 600;
      font-size: 16px;
      margin: auto;
      margin-top: 10px;
    `}
`;
