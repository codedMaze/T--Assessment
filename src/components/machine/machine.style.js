import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const MachineContainer = styled.div`
  max-width: 1400px;
  margin: 0 16px;
  width: 100%;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  align-items: start;
  background-color: #fff;
  text-align: left;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
`;

export const MachineWrapper = styled.div`
  border: 3px solid #01bf71;
  display: block;
  width: 100%;
`;

export const MachineBody = styled.div`
  padding: 0 16px;
  padding-bottom: 20px;
`;

export const MachineTitleWrapper = styled.div`
  position: relative;
  padding: 12px;
  background-color: #ccc;
  color: #000;
  margin-bottom: 16px;
`;

export const MachineSpan = styled.span`
  color: #01bf71;
  font-size: 22px;
`;

export const MachineTitle = styled.h3`
  font-size: 16px;
`;

export const BodyWrapper = styled.div`
  display: grid;
  gap: 14px;
  margin-bottom: 20px;
`;
export const BodyTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;
export const BodyParagraph = styled.p`
  font-size: 16px;
`;

export const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export const NoDataTitle = styled.h2`
  font-size: larger;
  color: #000;
`;
