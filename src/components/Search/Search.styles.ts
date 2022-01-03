import styled, { css } from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

const inputs = css`
  height: 100%;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  box-shadow: var(--shadow-3);
`;

export const Form = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<{ inputWidth: number }>`
  ${inputs}
  width: ${(props) => `${props.inputWidth}px`};
  margin: 0 10px;
  padding-left: 10px;
  color: var(--color-gray-dark);
  font-size: 16px;

  &:focus {
    border: 1px solid var(--color-gray-light);
  }
  &::placeholder {
    color: var(--color-gray);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media ${breakpoints.s} {
    margin: 0 4px;
    font-size: 14px;
  }
`;

export const Select = styled.select<{ inputWidth: number }>`
  ${inputs}
  margin: 0 5px;
  max-width: ${(props) => `${props.inputWidth}px`};
`;
