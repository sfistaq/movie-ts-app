import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../utils/breakpoints";

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
  box-shadow: var(--shadow-1);

  &:hover {
    transform: scale(1.04);
    box-shadow: var(--shadow-2);
    @media screen and (max-width: 499px) {
      transform: none;
    }
  }
  @media ${breakpoints.xl} {
    height: 270px;
    width: 190px;
  }
  @media ${breakpoints.l} {
    height: 290px;
    width: 200px;
  }
  @media ${breakpoints.m} {
    height: 300px;
    width: 230px;
  }
  @media ${breakpoints.s} {
    height: 265px;
    width: 200px;
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
