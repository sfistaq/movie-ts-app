import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${({ active }) => (active ? "100%" : "0")};
  top: ${({ active }) => (active ? "65px" : "-100vh")};
  color: var(--color-white);
  background-color: var(--background-nav);
  backdrop-filter: var(--background-blur);
  -webkit-backdrop-filter: var(--background-blur);
  z-index: 10;
  transition: var(--transition-slow);
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -35%;
`;

export const NavLink = styled(Link)`
  position: relative;
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
