import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const Wrapper = styled.div<{ center: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "space-evenly" : "start")};
  height: 100%;
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const ResultsItems = styled.div`
  display: grid;
  margin: 18px 0;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  align-content: flex-start;

  @media ${breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${breakpoints.l} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints.m} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints.s} {
    grid-gap: 8px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Pages = styled.span`
  margin: 0 12px;
  font-size: 20px;
  color: var(--color-gray-dark);
  font-weight: 500;
`;
