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
  margin: 30px 0 20px 0;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Card = styled(Link)`
  background-color: white;
  height: 280px;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 3px solid white;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--color-dark-blue);
  background: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

  &:hover {
    transform: scale(1.04);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
`;

export const Image = styled.img`
  min-height: 80%;
  min-width: 100%;
  object-fit: fill;
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
`;
export const Status = styled.span<{ top: string; color: string }>`
  position: absolute;
  width: 70px;
  top: ${(props) => `${props.top}px`};
  left: 5px;
  padding: 5px 10px;
  background: ${(props) => `${props.color}`};
  color: #fff;
  font-weight: 500;
  font-size: 10px;
  border: 2px solid white;
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
  border-radius: 5px;
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
