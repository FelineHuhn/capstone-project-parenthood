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
  font-size: 1rem;
  font-family: "Poppins-Light";

  &:hover {
    cursor: pointer;
    background-color: var(--button-color);
  }

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      margin: 10px;
    `}

  ${({ variant }) =>
    variant === "details" &&
    css`
      height: 37px;
      width: 80px;
      color: var(--second-font-color);
    `}

    ${({ variant }) =>
      variant === "submit" &&
      css`
        font-weight: 400;
        padding: 3px;
        margin: auto;
        margin-top: 20px;
        border-radius: 7px;
        color: var(--secondary-color);
      `}

    ${({ variant }) =>
      variant === "delete" &&
      css`
        font-weight: 600;
        background-color: transparent;
        box-shadow: none;
        filter: var(--primary-dropshadow);

        :hover  {
          filter: var(--secondary-dropshadow);
          background-color: transparent;
        }
      `}

    ${({ variant }) =>
      variant === "deletemodal-cancel" &&
      css`
        font-weight: 600;

        :hover {
          filter: var(--primary-dropshadow);
        }
      `}

    ${({ variant }) =>
      variant === "deletemodal-delete" &&
      css`
        font-weight: 500;

        :hover {
          filter: var(--primary-dropshadow);
        }
      `}

    ${({ variant }) =>
      variant === "favorite" &&
      css`
      background-color: transparent;
      border: none;
      box-shadow: none;
      

      &:hover {
    background-color: transparent;
    `}}
`;
