import React from "react";
import { data } from "../Topbar/data";
import { TopBarData } from "../../types/types";

import { Container, LinksContainer, NavLink } from "./MobileMenu.styles";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  return (
    <Container active={menuOpen}>
      <LinksContainer>
        {data.map((item: TopBarData) => (
          <NavLink
            to={item.link}
            key={item.id}
            onClick={() => setMenuOpen(false)}
          >
            {item.text}
          </NavLink>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default MobileMenu;
