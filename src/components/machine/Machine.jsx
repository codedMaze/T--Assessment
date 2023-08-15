import React from "react";
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

const Machine = ({ machine, showCancle, id }) => {
  const dispatch = useDispatch();
  const showEdit = useSelector((state) => state.ui.showEditForm);

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
    dispatch(uiAction.toggleEditForm());
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
            <MachineSpan>{machine.name}</MachineSpan> - {machine.title}
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
          <AddMachine machine={machine} edit={true} editId={id} />
        </Modal>
      )}
    </>
  );
};

export default Machine;
