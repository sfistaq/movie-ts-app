import styled from "styled-components";

export const CustomButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  border: none;
  outline: none;
  padding: 15px;
  margin: 0 10px;
  font-size: 18px;
  background-color: var(--color-gray-dark);
  color: ${({ disabled }) =>
    disabled ? "var(--color-gray)" : "var(--color-white)"};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  cursor: ${({ disabled }) => (disabled ? "arrow" : "pointer")};
  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(1px)")};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  & > svg {
    font-size: inherit;
    margin-left: 4px;
  }
`;
