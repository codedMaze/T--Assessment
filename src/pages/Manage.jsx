import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Form from "../components/form/Form";
import { Container, ManageContainer } from "../components/form/form.style";
import { ButtonWrapper } from "../UI/Button/button.style";
import { uiAction } from "../store/ui-slice";
import { Modal } from "@mui/material";

const Manage = () => {
  const showModal = useSelector((state) => state.ui.showModel);
  const machineTypes = useSelector((state) => state.machine.machineTypes);

  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(uiAction.toggleModelForm());
  };

  // console.log(machineTypes);
  return (
    <>
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      <Container>
        <ManageContainer>
          {machineTypes.map((machine, index) => (
            <Form machines={machine} index={index} key={index} />
          ))}
        </ManageContainer>
      </Container>
      <ButtonWrapper style={{ margin: "24px" }} onClick={showModalHandler}>
        Add Machine Type
      </ButtonWrapper>
    </>
  );
};

export default Manage;
