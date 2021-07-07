import React, { useContext } from "react";
import { data } from "./data";
import { useLocation } from "react-router-dom";
import { FavContext } from "../../store/Favourite/FavState";

import {
  Container,
  MovieIcon,
  LinksContainer,
  LinkItem,
  Link,
  ItemCount,
  MenuIcon,
  CloseIcon,
  Title,
} from "./Topbar.styles";

interface Props {
  menuOpen: boolean;
  windowWidth: number;
  menuOpenHanler: () => void;
  closeMobileMenu: () => void;
}

const Topbar: React.FC<Props> = ({
  menuOpen,
  windowWidth,
  menuOpenHanler,
  closeMobileMenu,
}) => {
  const location = useLocation();
  const { watchlist, watched } = useContext(FavContext);

  const checkLocation: boolean =
    location.pathname === "/watchlist" || location.pathname === "/watched";

  return (
    <Container>
      <MovieIcon />
      {windowWidth > 768 && (
        <LinksContainer>
          {data.map((item) => (
            <LinkItem key={item.id}>
              <Link
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
            </LinkItem>
          ))}
        </LinksContainer>
      )}

      {windowWidth < 768 && !menuOpen && checkLocation && (
        <Title>{location.pathname.slice(1)}</Title>
      )}
      {menuOpen ? (
        <CloseIcon onClick={closeMobileMenu} />
      ) : (
        <MenuIcon onClick={menuOpenHanler} />
      )}
    </Container>
  );
};

export default Topbar;
