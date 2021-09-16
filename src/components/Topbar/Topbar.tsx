import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { useLocation } from "react-router-dom";
import { data } from "./data";
import * as constants from "../../utils/constants";

import {
  TopbarContainer,
  IconLink,
  MovieIcon,
  LinksContainer,
  Link,
  ItemCount,
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
  const { watchlist, watched } = useContext(FavContext);

  const navbarTitle = data.map((item) => item.link).includes(location.pathname);

  return (
    <TopbarContainer>
      <IconLink to="/">
        <MovieIcon />
      </IconLink>
      {windowWidth > constants.BREAKPOINT && (
        <LinksContainer>
          {data.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              active={(location.pathname === item.link).toString()}
            >
              {item.text}
              {item.text === "watchlist" && watchlist.length > 0 && (
                <ItemCount>{watchlist.length}</ItemCount>
              )}
              {item.text === "watched" && watched.length > 0 && (
                <ItemCount>{watched.length}</ItemCount>
              )}
            </Link>
          ))}
        </LinksContainer>
      )}
      {windowWidth < constants.BREAKPOINT && !menuOpen && (
        <Title>{navbarTitle && location.pathname.slice(1)}</Title>
      )}
      {menuOpen ? (
        <CloseIcon onClick={() => setMenuOpen(false)} />
      ) : (
        <MenuIcon onClick={() => setMenuOpen((prev: boolean) => !menuOpen)} />
      )}
    </TopbarContainer>
  );
};

export default Topbar;
