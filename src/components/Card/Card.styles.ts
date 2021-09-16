import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardBody = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-white);
  height: 270px;
  width: 180px;
  color: var(--color-gray-dark);
  border: 3px solid var(--color-white);
  border-radius: var(--border-radius);
  text-decoration: none;
  overflow: hidden;
  transition: var(--transition);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  &:hover {
    transform: scale(1.04);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
  @media screen and (max-width: 1024px) {
    height: 270px;
    width: 190px;
  }

  @media screen and (max-width: 860px) {
    height: 290px;
    width: 200px;
  }
  @media screen and (max-width: 630px) {
    height: 300px;
    width: 230px;
  }
`;

export const Image = styled.img`
  min-height: 80%;
  min-width: 100%;
  object-fit: fill;
  border: 3px solid var(--color-white);
  border-radius: var(--border-radius);
  opacity: 0.85;
  transition: var(--transition);
  &:hover {
    opacity: 1;
  }
`;

export const Description = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: inherit;
`;
