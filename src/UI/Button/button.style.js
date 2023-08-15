import styled from "styled-components";

export const ButtonWrapper = styled.button`
  align-items: center;
  appearance: button;
  background-color: #01bf71;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  flex-direction: row;
  line-height: 1.15;
  padding: 8px 21px;
  min-width: 90px;
  text-align: center;
  transition: color 0.13s ease-in-out, background 0.13s ease-in-out,
    opacity 0.13s ease-in-out, box-shadow 0.13s ease-in-out;

  &:hover {
    border: 2px solid #01bf71;
    background-color: #fff;
    color: #01bf71;
  }
`;

export const NavBtn = styled.button`
  background: #5e5df0;
  border-radius: 999px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  padding: 8px 18px;
  cursor: pointer;
  border: 0;

  &:hover {
    box-shadow: #5e5df0 0 10px 20px -10px;
  }
`;
