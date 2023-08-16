import React from "react";
import { useParams } from "react-router-dom";
import Machine from "../components/machine/Machine";
import {
  Container,
  MachineContainer,
} from "../components/machine/machine.style";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWrapper } from "../UI/Button/button.style";
import { uiAction } from "../store/ui-slice";
import AddMachine from "../components/form/AddMachine";
import Modal from "../UI/modal/Modal";
// import Mach

const MachineDetails = () => {
  const dispatch = useDispatch();
  const machines = useSelector((state) => state.machine.machines);
  const machineTypes = useSelector((state) => state.machine.machineTypes);
  const showEdit = useSelector((state) => state.ui.showEditForm);
  const params = useParams();
  const rest = machines.filter(
    (item) => item.machineTypeId === params.machineId
  );

  const showModalHandler = () => {
    dispatch(uiAction.toggleEditForm());
  };

  return (
    <>
      <Container>
        <MachineContainer>
          {rest.map((item, index) => (
            <Machine machine={item} key={index} showCancle={true} />
          ))}
        </MachineContainer>
      </Container>

      {showEdit && (
        <Modal>
          {machineTypes
            .filter((item) => item.id === params.machineId)
            .map((item, index) => (
              <AddMachine
                machine={item}
                edit={true}
                key={index}
                newData={false}
              />
            ))}
        </Modal>
      )}

      <ButtonWrapper style={{ margin: "24px" }} onClick={showModalHandler}>
        Add Machine Type
      </ButtonWrapper>
    </>
  );
};

export default MachineDetails;
