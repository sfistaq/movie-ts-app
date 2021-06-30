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
} from "./Topbar.styles";

const Topbar: React.FC = () => {
  const location = useLocation();

  const { watchlist, watched } = useContext(FavouriteContext);

  console.log(watchlist.length, watched.length);

  return (
    <Container>
      <MovieIcon />
      <LinksContainer>
        {data.map((item) => (
          <LinkItem
            key={item.id}
            to={item.link}
            active={location.pathname === item.link}
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
    </Container>
  );
};

export default Topbar;
