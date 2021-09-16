import styled from "styled-components";

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
  grid-gap: 14px;
  grid-template-columns: repeat(5, 1fr);
  align-content: flex-start;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Pages = styled.span`
  margin: 0 12px;
  font-size: 20px;
  color: var(--color-gray-dark);
  font-weight: 500;
`;
