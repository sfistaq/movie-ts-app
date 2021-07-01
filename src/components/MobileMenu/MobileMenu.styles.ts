import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div<{ active: boolean }>`
  width: 300px;
  right: ${({ active }) => (active ? "0" : "-300px")};
  opacity: ${({ active }) => (active ? "100" : "0")};
  height: 100vh;
  background-color: var(--color-dark-blue);
  position: fixed;
  top: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
`;

export const LinksContainer = styled.ul`
  width: 80%;
  list-style: none;
  font-size: 45px;
  font-weight: 300;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gold);
  margin-bottom: 30px;
  &:hover {
    color: lightgoldenrodyellow;
  }
`;
