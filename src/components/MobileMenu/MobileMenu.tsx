import React from "react";
import { data } from "../Topbar/data";

import { Container, LinksContainer, NavLink } from "./MobileMenu.styles";

interface Props {
  menuOpen: boolean;
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({ menuOpen, closeMobileMenu }) => {
  return (
    <Container active={menuOpen}>
      <LinksContainer>
        {data.map((item) => (
          <NavLink to={item.link} key={item.id} onClick={closeMobileMenu}>
            {item.text}
          </NavLink>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default MobileMenu;
