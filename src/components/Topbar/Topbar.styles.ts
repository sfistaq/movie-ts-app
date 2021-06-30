import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: var(--color-dark-blue);
  color: var(--color-light-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
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

//TODO FIXNIJ PROPSA bo jest error na boolean
export const LinkItem = styled(Link)<{ active: boolean }>`
  font-size: 20px;
  text-transform: capitalize;
  margin: 0 20px;
  color: inherit;
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--color-gold)" : "inherit")};

  &:hover {
    color: lightgoldenrodyellow;
  }
`;
export const ItemCount = styled.span`
  position: absolute;
  top: 10px;
  padding: 3px 7px;
  border-radius: 50%;
  background: #f05454;
  color: #fff;
  font-weight: 500;
  font-size: 10px;
`;
