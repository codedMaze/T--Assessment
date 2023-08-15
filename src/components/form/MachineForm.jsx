import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CloseIcon,
  FieldContainer,
  FormContainer,
  IconWrapper,
  InputOptions,
  InputSelect,
  Title,
} from "./form.style";
import { machineAction } from "../../store/manchine-slice";
import { uiAction } from "../../store/ui-slice";
import AddMachine from "./AddMachine";

const MachineForm = () => {
  const [option, setOption] = useState("");
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const machine = useSelector((state) => state.machine.machineTypes);

  //   console.log(machine);
  const closeHandler = () => {
    dispatch(uiAction.toggleMachineForm());
  };

  const selectedMachineHandler = (e) => {
    setOption(e.target.value);
    setShowForm(true);
  };

  return (
    <>
      {!showForm ? (
        <FormContainer>
          <IconWrapper>
            <CloseIcon onClick={closeHandler} />
          </IconWrapper>
          <Title>Add Machine</Title>
          <FieldContainer>
            <InputSelect onChange={selectedMachineHandler}>
              <InputOptions value="" selected disabled hidden>
                Add Machine
              </InputOptions>
              {machine &&
                machine.map((item) => (
                  <InputOptions value={item.id} key={item.id}>
                    {item.name}
                  </InputOptions>
                ))}
            </InputSelect>
          </FieldContainer>
        </FormContainer>
      ) : (
        <>
          {showForm &&
            machine
              .filter((item) => item.id === option)
              .map((main, index) => <AddMachine machine={main} key={index} />)}
        </>
      )}
    </>
  );
};

export default MachineForm;
