import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

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

export const MovieIcon = styled(BiCameraMovie)`
  font-size: 60px;
  margin-left: 20px;
  color: inherit;
`;

export const LinksContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  list-style: none;
`;

export const LinkItem = styled.li``;

export const Link = styled(RouterLink)<{ active: string }>`
  font-size: 20px;
  text-transform: capitalize;
  margin: 0 20px;
  color: inherit;
  text-decoration: none;
  color: ${({ active }) =>
    active === "true" ? "var(--color-gold)" : "inherit"};

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

const icon = css`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 40px;
    margin-right: 20px;
    color: inherit;
    cursor: pointer;
  } ;
`;

export const MenuIcon = styled(FaBars)`
  ${icon}
`;

export const CloseIcon = styled(FaTimes)`
  ${icon}
`;

export const Title = styled.div`
  color: var(--color-gold);
  list-style: none;
  font-size: 20px;
  text-transform: capitalize;
`;
