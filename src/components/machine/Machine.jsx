import React, { useState } from "react";
import {
  BodyParagraph,
  BodyTitle,
  BodyWrapper,
  CloseIcon,
  Icon,
  MachineBody,
  MachineSpan,
  MachineTitle,
  MachineTitleWrapper,
  MachineWrapper,
} from "./machine.style";
import { deleteItem } from "../../store/helper";
import { useDispatch, useSelector } from "react-redux";
import { machineAction } from "../../store/manchine-slice";
import AddMachine from "../form/AddMachine";
import Modal from "../../UI/modal/Modal";
import { ButtonWrapper } from "../../UI/Button/button.style";
import { uiAction } from "../../store/ui-slice";
import { toast } from "react-toastify";

const Machine = ({ machine, showCancle }) => {
  const dispatch = useDispatch();
  const showEdit = useSelector((state) => state.ui.editForm);
  const machineTypes = useSelector((state) => state.machine.machineTypes);

  const filter = machineTypes.filter(
    (item) => item.id === machine.machineTypeId
  );

  const deleteHandler = () => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      const newItem = deleteItem({ id: machine.id, key: "machines" });
      dispatch(machineAction.loadMachines(newItem));
      localStorage.setItem("machines", JSON.stringify([...newItem]));
      toast.success("Equipment deleted successfully");
    }
    return;
  };

  const clickHandler = () => {
    dispatch(uiAction.toggleEdit());
  };

  return (
    <>
      <MachineWrapper>
        <MachineTitleWrapper>
          {showCancle && (
            <Icon>
              <CloseIcon onClick={deleteHandler} />
            </Icon>
          )}
          <MachineTitle>
            <MachineSpan>{machine.name}</MachineSpan> -{" "}
            {machine.options
              .filter((item) => item.name === filter[0].title)
              .map((item) => (
                <>{item.inputValue}</>
              ))}
          </MachineTitle>
        </MachineTitleWrapper>
        <MachineBody>
          {machine.options.map((item, index) => (
            <BodyWrapper key={index}>
              <BodyTitle>{item.name}</BodyTitle>
              <BodyParagraph>{item.inputValue}</BodyParagraph>
            </BodyWrapper>
          ))}
          {showCancle && (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <ButtonWrapper onClick={clickHandler}>Edit</ButtonWrapper>
            </div>
          )}
        </MachineBody>
      </MachineWrapper>

      {showEdit && (
        <Modal>
          <AddMachine machine={machine} edit={true} newData={true} />
        </Modal>
      )}
    </>
  );
};

export default Machine;
