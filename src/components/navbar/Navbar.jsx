import React from "react";
import { useDispatch } from "react-redux";

import {
  MobileIcon,
  Nav,
  NavBtnWrapper,
  NavContainer,
  NavItems,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navbar.styled";
import { FaBars } from "react-icons/fa";
import { uiAction } from "../../store/ui-slice";
import { NavBtn } from "../../UI/Button/button.style";

const Navbar = ({ machineTypes }) => {
  const dispatch = useDispatch();
  // const machines = useSelector((state) => state.machine.machineTypes);
  // console.log(machineTypes);

  const showMenuHandler = () => {
    dispatch(uiAction.toggleSidebar());
  };

  const showModalHandler = () => {
    dispatch(uiAction.toggleModelForm());
  };

  const showFormHandler = () => {
    dispatch(uiAction.toggleMachineForm());
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">ASSESSMENT</NavLogo>
        <MobileIcon>
          <FaBars onClick={showMenuHandler} />
        </MobileIcon>
        <NavMenu>
          <NavItems>
            <NavLinks to="/">Home</NavLinks>
          </NavItems>
          {machineTypes &&
            machineTypes.length > 0 &&
            machineTypes.map((machine, i) => (
              <NavItems key={i}>
                <NavLinks to={machine.id}>{machine.name}</NavLinks>
              </NavItems>
            ))}
          <NavItems>
            <NavItems>
              <NavLinks to="manage">Manage</NavLinks>
            </NavItems>
          </NavItems>
        </NavMenu>
        <NavBtnWrapper>
          <NavBtn onClick={showModalHandler}>Add Type</NavBtn>
          {machineTypes && machineTypes.length > 0 && (
            <NavBtn onClick={showFormHandler}>Add Machine</NavBtn>
          )}
        </NavBtnWrapper>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
