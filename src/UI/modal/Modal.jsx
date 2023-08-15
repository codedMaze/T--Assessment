import React from "react";
import { ModalContainer } from "./modal.style";

const Modal = ({ children }) => {
  const hideHandler = () => {};
  return <ModalContainer>{children}</ModalContainer>;
};

export default Modal;
