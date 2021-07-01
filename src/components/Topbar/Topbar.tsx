import React, { useContext } from "react";
import { data } from "./data";
import { useLocation } from "react-router-dom";
import { FavouriteContext } from "../../store/FavouriteState";

import {
  Container,
  MovieIcon,
  LinksContainer,
  LinkItem,
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
  const { watchlist, watched } = useContext(FavouriteContext);

  console.log(location.pathname.slice(1));

  return (
    <Container>
      <MovieIcon />
      {windowWidth > 768 && (
        <LinksContainer>
          {data.map((item) => (
            <LinkItem
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
            </LinkItem>
          ))}
        </LinksContainer>
      )}
      {windowWidth < 768 && !menuOpen && (
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
