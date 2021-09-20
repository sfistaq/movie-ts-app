import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const CustomButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  border: none;
  outline: none;
  padding: 14px;
  margin: 0 10px;
  font-size: 18px;
  background-color: var(--color-gray-dark);
  color: ${({ disabled }) =>
    disabled ? "var(--color-gray)" : "var(--color-white)"};
  box-shadow: var(--shadow-3);
  cursor: ${({ disabled }) => (disabled ? "arrow" : "pointer")};
  transition: var(--transition);

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
    box-shadow: var(--shadow-4);
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(1px)")};
    box-shadow: var(--shadow-5);
  }
  & > svg {
    font-size: inherit;
    margin-left: 4px;
  }

  @media ${breakpoints.m} {
    padding: 12px;
    font-size: 14px;
  }
  @media ${breakpoints.s} {
    padding: 18px;
    font-size: 12px;
  }
`;
