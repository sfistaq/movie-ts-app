import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { data } from "../Topbar/data";
import { NavLinks } from "../../types/types";
import { Counter } from "../Counter/Counter";
import { Container, LinksContainer, NavLink } from "./MobileMenu.styles";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const { watchlist, watched } = useContext(FavContext);
  return (
    <Container active={menuOpen}>
      <LinksContainer>
        {data.map((item: NavLinks) => (
          <NavLink
            to={item.link}
            key={item.id}
            onClick={() => setMenuOpen(false)}
          >
            {item.text}
            {item.text === "watchlist" && watchlist.length > 0 && (
              <Counter big>{watchlist.length}</Counter>
            )}
            {item.text === "watched" && watched.length > 0 && (
              <Counter big={true}>{watched.length}</Counter>
            )}
          </NavLink>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default MobileMenu;
