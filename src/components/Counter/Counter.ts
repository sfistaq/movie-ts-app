import styled from "styled-components";

export const Counter = styled.span<{ big: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ big }) => (big ? "-18px" : "4px")};
  right: ${({ big }) => (big ? "-40px" : "-24px")};
  height: ${({ big }) => (big ? "35px" : "25px")};
  width: ${({ big }) => (big ? "35px" : "25px")};
  border-radius: 50%;
  background-color: var(--color-red);
  color: var(--color-white);
  font-size: ${({ big }) => (big ? "16px" : "13px")};
  font-weight: 600;
  overflow: hidden;
`;
