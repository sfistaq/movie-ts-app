import React from "react";
import { CustomButton } from "./Button.styles";

interface Props {
  text: string;
  disabled?: boolean;
  icon?: JSX.Element;
}

const Button: React.FC<Props> = ({ text, disabled, icon }) => {
  return (
    <CustomButton disabled={disabled ? disabled : false}>
      {text}
      {icon && icon}
    </CustomButton>
  );
};

export default Button;
