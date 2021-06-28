import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultsItems = styled.div`
  display: grid;
  height: 100%;
  margin: 50px 0 50px 0;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Card = styled(Link)`
  background-color: white;
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  min-height: 80%;
  min-width: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//przenieś do global bo jest taki sam jak w search
export const Button = styled.button`
  width: 80px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-left: 5px;
  background-color: var(--color-dark-blue);
  color: var(--color-gold);

  &:disabled {
    background-color: var(--color-blue);
    color: var(--color-light-blue);
  }
`;

export const Pages = styled.span`
  margin: 0 10px;
  color: var(--color-dark-blue);
  font-weight: bold;
`;
