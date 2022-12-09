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
  border-radius: var(--border-radius);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: var(--fourth-color);
  font-size: 1rem;
  font-family: "Poppins-Light";
  color: #696159;

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
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
    `}

    ${({ variant }) =>
      variant === "submit" &&
      css`
        font-weight: 400;
        padding: 3px;
        margin: auto;
        margin-top: 10px;
        border-radius: var(--border-radius);
      `}

    ${({ variant }) =>
      variant === "delete" &&
      css`
        font-weight: 600;
        background-color: transparent;
        box-shadow: none;

        :hover  {
          filter: var(--primary-dropshadow);
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
