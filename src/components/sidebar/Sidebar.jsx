import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CloseIcon,
  Icon,
  SideBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./sidebar.style";
import { uiAction } from "../../store/ui-slice";
import { NavBtn } from "../../UI/Button/button.style";

const Sidebar = ({ machineTypes }) => {
  const isOpen = useSelector((state) => state.ui.isOpenSide);

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(uiAction.toggleSidebar());
  };

  const menuHandler = () => {
    dispatch(uiAction.toggleSidebar());
  };

  const showModalHandler = () => {
    dispatch(uiAction.toggleModelForm());
    dispatch(uiAction.toggleSidebar());
  };

  const showFormHandler = () => {
    dispatch(uiAction.toggleMachineForm());
    dispatch(uiAction.toggleSidebar());
  };

  return (
    <SidebarContainer show={isOpen ? 1 : 0}>
      <Icon>
        <CloseIcon onClick={clickHandler} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={menuHandler}>
            Home
          </SidebarLink>
          {machineTypes &&
            machineTypes.length > 0 &&
            machineTypes.map((machine, i) => (
              <SidebarLink to={machine.id} key={i} onClick={menuHandler}>
                {machine.name}
              </SidebarLink>
            ))}
        </SidebarMenu>
        <SideBtnWrap>
          <NavBtn onClick={showModalHandler}>Add Type</NavBtn>
          {machineTypes && machineTypes.length > 0 && (
            <NavBtn onClick={showFormHandler}>Add Machine</NavBtn>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
