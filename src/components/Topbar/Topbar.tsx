import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { useLocation } from "react-router-dom";
import { data } from "./data";

import {
  Container,
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

  console.log(location.pathname.slice(1));

  return (
    <Container>
      <MovieIcon />
      {windowWidth > 768 && (
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
      {windowWidth < 768 && !menuOpen && (
        <Title>
          {location.pathname === "/" ? null : location.pathname.slice(1)}
        </Title>
      )}
      {menuOpen ? (
        <CloseIcon onClick={() => setMenuOpen(false)} />
      ) : (
        <MenuIcon onClick={() => setMenuOpen((prev: boolean) => !menuOpen)} />
      )}
    </Container>
  );
};

export default Topbar;
