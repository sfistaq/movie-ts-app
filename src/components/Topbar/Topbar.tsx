import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { useLocation } from "react-router-dom";
import { data } from "./data";
import { NavLinks } from "../../types/types";
import { Counter } from "../Counter/Counter";
import * as constants from "../../utils/constants";
import {
  TopbarContainer,
  IconLink,
  MovieIcon,
  LinksContainer,
  Link,
  MenuIcon,
  CloseIcon,
  Title,
} from "./Topbar.styles";

interface Props {
  menuOpen: boolean;
  windowWidth: number;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar: React.FC<Props> = ({ menuOpen, windowWidth, setMenuOpen }) => {
  const location = useLocation();
  const {
    state: { watchlist, watched },
  } = useContext(FavContext);

  const navbarTitle = data
    .map((item: NavLinks) => item.link)
    .includes(location.pathname);

  return (
    <TopbarContainer>
      <IconLink to="/" onClick={() => setMenuOpen(false)}>
        <MovieIcon />
      </IconLink>
      {windowWidth > constants.SCREEN_M && (
        <LinksContainer>
          {data.map((item: NavLinks) => (
            <Link
              key={item.id}
              to={item.link}
              active={(location.pathname === item.link).toString()}
            >
              {item.text}
              {item.text === "watchlist" && watchlist.length > 0 && (
                <Counter big={false}>{watchlist.length}</Counter>
              )}
              {item.text === "watched" && watched.length > 0 && (
                <Counter big={false}>{watched.length}</Counter>
              )}
            </Link>
          ))}
        </LinksContainer>
      )}
      {windowWidth < constants.SCREEN_M && !menuOpen && (
        <Title>{navbarTitle && location.pathname.slice(1)}</Title>
      )}
      {menuOpen ? (
        <CloseIcon onClick={() => setMenuOpen(false)} />
      ) : (
        <MenuIcon onClick={() => setMenuOpen((prev: boolean) => !prev)} />
      )}
    </TopbarContainer>
  );
};

export default Topbar;
