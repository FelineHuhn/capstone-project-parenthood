import styled, { css } from "styled-components";

export function Button({ type, variant, onClick, children }) {
  return (
    <DefaultButton type={type} variant={variant} onClick={onClick}>
      {children}
    </DefaultButton>
  );
}

const DefaultButton = styled.button`
  border: none;
  border-radius: 3px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    background-color: lightgrey;
  }

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      margin: 10px;
      font-weight: 600;
      align-self: flex-end;
    `}

  ${({ variant }) =>
    variant === "details" &&
    css`
      padding: 0;
      height: 60px;
      background-color: transparent;
      box-shadow: none;
      
      border-bottom: #111;
      color: var(--first-font-color);

      &:hover {
    background-color: transparent;

    `}

    ${({ variant }) =>
    variant === "submit" &&
    css`
      font-weight: 600;
      font-size: 16px;
      margin: auto;
      margin-top: 10px;
    `}

    ${({ variant }) =>
    variant === "deletemodal" &&
    css`
      font-weight: 600;
      font-size: 16px;
      background-color: oldlace;
    `}

    ${({ variant }) =>
    variant === "favorite" &&
    css`
      background: none;
      border: none;
      box-shadow: none;
      

      &:hover {
    background-color: transparent;
    `}
`;
