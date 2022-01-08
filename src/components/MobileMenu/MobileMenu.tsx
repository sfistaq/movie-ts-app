import React, { useContext } from "react";
import { FavContext } from "../../store/Favourite/FavState";
import { data } from "../Topbar/data";
import { NavLinks } from "../../types/types";
import { Counter } from "../Counter/Counter";
import { Wrapper, LinksContainer, NavLink } from "./MobileMenu.styles";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const {
    state: { watchlist, watched },
  } = useContext(FavContext);
  return (
    <Wrapper
      active={menuOpen}
      // style={{ backdropFilter: "blur(10px)" }}
    >
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
    </Wrapper>
  );
};

export default MobileMenu;
