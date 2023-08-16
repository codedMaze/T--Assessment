import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ManageContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  align-items: start;
  background-color: #fff;
  gap: 1rem;
`;

export const FormContainer = styled.form`
  border: 2px solid #eee;
  position: relative;
  border-radius: 8px;
  display: block;
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }
  @media screen and (max-width: 640px) {
    max-width: 400px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.8rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000000;
  z-index: 10;
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  text-align: left;
  gap: 8px;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 6px;
`;

export const FieldList = styled.ul`
  width: 100%;
`;

export const InputField = styled.input`
  border: 2px solid #ccc;
  padding: 8px 2px;
  border-radius: 6px;
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

export const InputSelect = styled.select`
  border: 2px solid #999;
  padding: 8px 2px;
  border-radius: 6px;
  width: 100%;
  background: #fff;
`;

export const InputOptions = styled.option`
  background: #aaa;
  padding: 6px 0;
`;
