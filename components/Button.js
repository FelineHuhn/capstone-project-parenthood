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
  background-color: var(--fourth-color);
  font-size: 16px;
  font-family: "Poppins-Light";

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      margin: 10px;
      font-size: 16px;
      color: var(--second-font-color);

      :hover {
        background-color: #e6e6e6;
      }
    `}

  ${({ variant }) =>
    variant === "details" &&
    css`
      height: 37px;
      width: 80px;
      color: var(--second-font-color);
      
      &:hover {
        background-color: #e6e6e6;

    `}

    ${({ variant }) =>
    variant === "submit" &&
    css`
      font-weight: 400;
      font-size: 16px;
      padding: 3px;
      margin: auto;
      margin-top: 20px;
      border-radius: 7px;
      color: var(--secondary-color);

      :hover {
        background-color: #e6e6e6;
      }
    `}

    ${({ variant }) =>
    variant === "delete" &&
    css`
      font-weight: 600;
      font-size: 16px;
      background-color: transparent;
      box-shadow: none;
      filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.2));
      position: relative;
      z-index: 10;

      :hover  {
        filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
      }
    `}

    ${({ variant }) =>
    variant === "deletemodal-cancel" &&
    css`
      font-weight: 600;
      font-size: 16px;

      :hover {
        filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.2));
        background-color: lightgrey;
      }
    `}

    ${({ variant }) =>
    variant === "deletemodal-delete" &&
    css`
      font-weight: 500;
      font-size: 16px;

      :hover {
        filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.2));
        background-color: lightgrey;
      }
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
