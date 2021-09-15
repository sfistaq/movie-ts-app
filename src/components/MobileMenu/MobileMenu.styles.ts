import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${({ active }) => (active ? "100vh" : "0")};
  opacity: ${({ active }) => (active ? "100" : "0")};
  background-color: var(--background-nav);
  backdrop-filter: var(--background-blur);
  color: var(--color-white);
  z-index: 50;
  transition: all 1s ease;
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: capitalize;
  list-style: none;
  font-size: 40px;
  font-weight: 300;
  margin: 40px 0;
  &:hover {
    color: var(--color-gray-light);
  }
`;
