import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CloseIcon,
  FieldContainer,
  FieldList,
  FlexBox,
  FormContainer,
  IconWrapper,
  InputField,
  InputOptions,
  InputSelect,
  Title,
} from "./form.style";
import { dummyOptions } from "../../data/dummy_data.js";
import Button from "../../UI/Button/Button";
import { uiAction } from "../../store/ui-slice";
import { machineAction } from "../../store/manchine-slice";
import { toast } from "react-toastify";

const Form = () => {
  const dispatch = useDispatch();
  const machine = useSelector((state) => state.machine.machineTypes);

  const machines = false;
  const objectTypeRef = useRef();

  const [options, setOptions] = useState([{ name: "Title", value: "text" }]);
  const [objTitle, setObjTitle] = useState(options[0].name);

  const closeHandler = () => {
    dispatch(uiAction.toggleModelForm());
  };

  const selectChangeHandler = (e) => {
    setObjTitle(e.target.value);
  };

  const inputChangeHandler = (e, index) => {
    // console.log(e, index);
    // console.log();
    const list = [...options];
    list[index].name = e.target.value;

    setOptions([...list]);
  };

  const addFieldHandler = (e) => {
    setOptions([...options, { name: "", value: e.target.value }]);
    e.target.value = dummyOptions[0].name;
  };

  //   const refreshHandler = () => {
  //     console.log("click");
  //   };

  const changeOptionHandler = (e, index) => {
    if (e.target.value === "delete") {
      const list = [...options];
      list.splice(index, 1);
      setOptions([...list]);
    } else {
      const list = [...options];
      list[index].value = e.target.value;

      setOptions([...list]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const items = {
      machineName: objectTypeRef.current.value,
      machineTitle: objTitle,
      others: options,
    };

    if (machine.length > 0) {
      for (let i = 0; i < machine.length; i++) {
        if (
          machine[i].name.toLowerCase() ===
          objectTypeRef.current.value.toLowerCase()
        ) {
          toast.error(`${objectTypeRef.current.value} already existed`);
          dispatch(uiAction.toggleModelForm());
          return;
        }
      }
    }

    dispatch(machineAction.addMachineType(items));
    toast.success(`${objectTypeRef.current.value} added successfully`);
    dispatch(uiAction.toggleModelForm());
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <IconWrapper>
        <CloseIcon onClick={closeHandler} />
      </IconWrapper>
      <Title>Add Machine Type</Title>
      <FieldContainer>
        <label htmlFor="objectType">Object Type</label>
        <InputField
          type="text"
          name="objectType"
          id="objectType"
          ref={objectTypeRef}
          required
          defaultValue={machines ? machines.name : ""}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="addProperties">Add Properties</label>
        <FieldList>
          {options.map((option, i) => (
            <FlexBox key={i}>
              <InputField
                type="text"
                name={option.name}
                value={option.name}
                required
                onChange={(e) => inputChangeHandler(e, i)}
              />
              <InputSelect
                name={option.name}
                id={option.name}
                className="bg-gray-700"
                value={option.value}
                required
                onChange={(e) => changeOptionHandler(e, i)}
              >
                {dummyOptions.map(
                  (option, i) =>
                    i > 0 && (
                      <InputOptions
                        key={i}
                        value={option.id}
                        // selected={options.value === option.id}
                      >
                        {option.name}
                      </InputOptions>
                    )
                )}
                {machines && <option value="delete">Remove</option>}
              </InputSelect>
            </FlexBox>
          ))}
        </FieldList>
        <InputSelect
          // name="selectFieldOption"
          // id="selectFieldOption"
          className="bg-gray-700 text-center"
          onChange={addFieldHandler}
          //   onclick={refreshHandler}
          required
          // value={value}
        >
          {dummyOptions.map((option, i) =>
            i === 0 ? (
              <InputOptions key={i} disabled selected hidden>
                {option.name}
              </InputOptions>
            ) : (
              <InputOptions
                key={i}
                value={option.id}
                // selected={options.value === option.id}
              >
                {option.name}
              </InputOptions>
            )
          )}
        </InputSelect>
      </FieldContainer>
      <FieldContainer style={{ marginBottom: "20px" }}>
        <label htmlFor="objectTitle">Object Title</label>
        <InputSelect
          name="objectTitle"
          id="objectTitle"
          // defaultValue={options[0].value}
          //   defaultValue={objTitle}
          value={objTitle}
          required
          onChange={selectChangeHandler}
        >
          {options.map((option, index) => (
            <InputOptions key={index} value={option.name}>
              {option.name}
            </InputOptions>
          ))}
        </InputSelect>
      </FieldContainer>

      <Button>Add Machine Type</Button>
    </FormContainer>
  );
};

export default Form;
