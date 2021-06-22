import React from "react";
import { data } from "./data";
import {
  Container,
  MovieIcon,
  LinksContainer,
  LinkItem,
} from "./Topbar.styles";

const Topbar: React.FC = () => {
  return (
    <Container>
      <MovieIcon />
      <LinksContainer>
        {data.map((item) => (
          <LinkItem key={item.id} to={item.link}>
            {item.text}
          </LinkItem>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Topbar;
