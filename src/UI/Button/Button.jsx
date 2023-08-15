import React from "react";
import { ButtonWrapper } from "./button.style";

const Button = ({ children }) => {
  return <ButtonWrapper type="submit">{children}</ButtonWrapper>;
};

export default Button;
