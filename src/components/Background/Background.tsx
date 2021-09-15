import React from "react";
import { Container } from "./Background.styles";

interface Props {
  image: string;
}

const Background: React.FC<Props> = ({ image }) => {
  return <Container image={image} />;
};

export default Background;
