import React from "react";
import { MovieDataResponse } from "../../types/types";
import { CardBody, Image, Description } from "./Card.styles";
interface Props {
  link: string;
  image: string | keyof MovieDataResponse;
  imageAlt: string;
  title: string;
}

const Card: React.FC<Props> = ({ link, image, imageAlt, title }) => {
  return (
    <CardBody to={link}>
      <Image src={image} alt={imageAlt} />
      <Description>{title}</Description>
    </CardBody>
  );
};

export default Card;
