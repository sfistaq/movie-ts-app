import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: var(--color-dark-blue);
  color: var(--color-light-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

export const MovieIcon = styled(SiThemoviedatabase)`
  font-size: 40px;
  margin-left: 10px;
  color: inherit;
`;

export const LinksContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  list-style: none;
`;

export const LinkItem = styled(Link)`
  font-size: 20px;
  text-transform: capitalize;
  margin: 0 10px;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--color-gold);
  }
`;
