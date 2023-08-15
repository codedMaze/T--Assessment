import styled from "styled-components";
import { Link as LinkR, NavLink as LinkN } from "react-router-dom";

export const Nav = styled.div`
  background: #000;
  /* margin-top: -80px; */
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease-in-out;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: #fff;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: #fff;
    transform: translate(-100%, 100%);
    top: 0;
    right: 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  /* margin-left: -120px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkN)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const NavBtnWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
