import React from "react";
import { useParams } from "react-router-dom";
import Machine from "../components/machine/Machine";
import {
  Container,
  MachineContainer,
  MachineWrapper,
} from "../components/machine/machine.style";
import { useSelector } from "react-redux";
// import Mach

const MachineDetails = () => {
  const machines = useSelector((state) => state.machine.machines);
  const params = useParams();
  const rest = machines.filter(
    (item) => item.machineTypeId === params.machineId
  );

  return (
    <Container>
      <MachineContainer>
        {rest.map((item, index) => (
          <Machine machine={item} key={index} id={item.id} showCancle={true} />
        ))}
      </MachineContainer>
    </Container>
  );
};

export default MachineDetails;
