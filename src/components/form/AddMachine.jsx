import React, { useEffect, useState } from "react";
import {
  CloseIcon,
  FieldContainer,
  FormContainer,
  IconWrapper,
  InputField,
  Title,
} from "./form.style";
import { uiAction } from "../../store/ui-slice";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { machineAction } from "../../store/manchine-slice";

const AddMachine = ({ machine, edit }) => {
  const dispatch = useDispatch();
  const machines = useSelector((state) => state.machine.machines);
  const { name, title, id, options } = machine;

  const closeHandler = () => {
    if (!edit) {
      dispatch(uiAction.toggleMachineForm());
    } else dispatch(uiAction.toggleEditForm());
  };

  const [fieldOption, setFieldOption] = useState([...options]);

  //   useEffect(() => {
  //     const all = options.map((element) => {
  //       element.inputValue = "";
  //     });
  //     setFieldOption([...all]);
  //   }, [options]);

  useEffect(() => {
    // if (edit) {
    //   return;
    // }
    const refresh = fieldOption.map((element) => ({
      ...element,
      inputValue: "",
    }));
    setFieldOption([...refresh]);
  }, []);

  const inputChangeHandler = (e, i) => {
    const list = [...fieldOption];
    list[i].inputValue = e.target.value;
    setFieldOption([...list]);
    // console.log(fieldOption);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (edit) {
      console.log(id);
      const index = machines.findIndex((i) => i.id === id);
      console.log(index);
    } else {
      const machine = {
        machineTypeId: id,
        name,
        title,
        options: [...fieldOption],
      };
      dispatch(machineAction.addMachine(machine));
      dispatch(uiAction.toggleMachineForm());
    }
    // console.log(machine);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <IconWrapper>
        <CloseIcon onClick={closeHandler} />
      </IconWrapper>
      <Title>Add {name}</Title>

      {options.map((option, index) => (
        <FieldContainer key={index}>
          <label htmlFor={option.name}>{option.name}</label>
          <InputField
            type={option.value}
            onChange={(e) => inputChangeHandler(e, index)}
            name={option.name}
            defaultValue={edit ? option.inputValue : ""}
            // value={fieldOption[index].inputValue}
            required
          />
        </FieldContainer>
      ))}

      <Button>Add Machine</Button>
    </FormContainer>
  );
};

export default AddMachine;
