import React from "react";

import { useSelector } from "react-redux";
import Form from "../components/form/Form";
import { Container, ManageContainer } from "../components/form/form.style";

const Manage = () => {
  const machineTypes = useSelector((state) => state.machine.machineTypes);

  // console.log(machineTypes);
  return (
    <Container>
      <ManageContainer>
        {machineTypes.map((machine, index) => (
          <Form machines={machine} index={index} key={index} />
        ))}
      </ManageContainer>
    </Container>
  );
};

export default Manage;
