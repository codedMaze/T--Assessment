import React from "react";
import {
  Container,
  MachineContainer,
} from "../components/machine/machine.style";
import { useSelector } from "react-redux";

const Manage = () => {
  const machineTypes = useSelector((state) => state.machine.manchineTypes);

  return (
    <Container>
      <MachineContainer>
        {/* {machineTypes.map((machine, index) =>(
      
      ))} */}
      </MachineContainer>
    </Container>
  );
};

export default Manage;
