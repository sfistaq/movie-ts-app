import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<{ inputWidth: number }>`
  height: 100%;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  width: ${(props) => `${props.inputWidth}px`};
  margin: 0 10px;
  padding-left: 10px;
  color: var(--color-gray-dark);
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

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
`;

export const Select = styled.select<{ inputWidth: number }>`
  height: 50px;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  margin: 0 5px;
  max-width: ${(props) => `${props.inputWidth}px`};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Option = styled.option``;
