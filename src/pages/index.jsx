import React from "react";
import Machine from "../components/machine/Machine";
import { useSelector } from "react-redux";
import {
  Container,
  MachineContainer,
  MachineWrapper,
  NoDataTitle,
  NoDataWrapper,
} from "../components/machine/machine.style";

const Home = () => {
  const machine = useSelector((state) => state.machine.machines);
  // console.log(machine);
  return (
    <Container>
      {machine && machine.length > 0 ? (
        <>
          <MachineContainer>
            {machine.map((item, index) => (
              <MachineWrapper key={index}>
                <Machine machine={item} showCancle={false} key={index} />
              </MachineWrapper>
            ))}
          </MachineContainer>
        </>
      ) : (
        <NoDataWrapper>
          <NoDataTitle>No data to display</NoDataTitle>
          <NoDataTitle>Please add Machine</NoDataTitle>
        </NoDataWrapper>
      )}
    </Container>
  );
};

export default Home;
