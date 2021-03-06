import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { FiVideo } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { breakpoints } from "../../utils/breakpoints";

export const TopbarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  padding: 0 20px;
  color: var(--color-white);
  background-color: var(--background-nav);
  backdrop-filter: var(--background-blur);
  -webkit-backdrop-filter: var(--background-blur);
  z-index: 100;
`;

export const IconLink = styled(RouterLink)`
  color: inherit;
`;

export const MovieIcon = styled(FiVideo)`
  font-size: 48px;
  color: inherit;
`;

export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  list-style: none;
`;

export const Link = styled(RouterLink)<{ active: string }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 24px;
  text-transform: capitalize;
  margin: 0 20px;
  text-decoration: none;
  color: ${({ active }) =>
    active === "true" ? "var(--color-gray-dark)" : "inherit"};
  font-weight: ${({ active }) => (active === "true" ? 400 : 300)};
  border-bottom: ${({ active }) =>
    active === "true" ? "3px solid var(--color-gray-dark)" : "none"};

  &:hover {
    color: ${({ active }) =>
      active === "true" ? "var(--color-gray-dark)" : "var(--color-gray-light)"};
  }
`;

export const Title = styled.div`
  font-size: 26px;
  text-transform: capitalize;
  text-decoration: none;
  list-style: none;
  color: var(--color-white);
  font-weight: 300;
`;

const icon = css`
  display: none;

  @media ${breakpoints.m} {
    display: block;
    font-size: 38px;
    color: inherit;
    cursor: pointer;
  } ;
`;

export const MenuIcon = styled(CgMenu)`
  ${icon}
`;

export const CloseIcon = styled(CgClose)`
  ${icon}
`;
