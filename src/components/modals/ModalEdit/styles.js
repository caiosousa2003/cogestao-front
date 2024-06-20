import { Modal } from "antd";
import { styled } from "styled-components";

export const ModalStyle = styled(Modal)`
   font-family: 'Cabin', sans-serif;
   top: 57%;
   transform: translateY(-50%);
  .ant-modal-content {
    @media screen and (max-width: 560px) {
        margin: 20px;
    }
  }

  .ant-modal-close {
    color: black;
    &:hover {
      color: black;
      background: transparent;
    }
  }

`;

export const ModalButton = styled.button`
  font-family: 'Cabin', sans-serif;
  width: 200px;
  font-size: 22px;
  font-weight: bold;
  height: 40px;
  background: transparent;
  border-radius: 12px;
  color: #fdd100;
  white-space: nowrap;
  margin-top: 20px;
  border: 1px solid #fdd100;
  cursor: pointer;
  text-align: center;
  padding-bottom: 5px;
  padding-top: 5px;

  @media screen and (max-width: 380px) {
    width: 50%;
    font-size: 18px;
  }
`;

export const GlobalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  color: black;
  font-weight: bold;
  min-width: 210px;
  text-align: center;
  @media screen and (max-width: 544px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
`;

export const ContainerLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const ContainerInput = styled.div`
    width: 100%;
    height: 100%;
`;

export const Label = styled.label`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
    margin-left: 3px;
    @media screen and (max-width: 544px) {
        font-size: 14px;
    }
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    width: 18px;
    height: 18px;
    @media screen and (max-width: 544px) {
        width: 14px;
        height: 14px;
    }
`;

export const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: ${(props) => (props?.border ? "2px solid red" : "2px solid black")};
    font-size: 16px;
    padding: 5px;
    color: black;
    &:focus {
        outline: none;
    }
    @media screen and (max-width: 544px) {
        font-size: 12px;
        height: 30px;
    }
`;

export const Select = styled.select`
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: ${(props) => (props?.border ? "2px solid red" : "2px solid black")};
    font-size: 16px;
    padding: 5px;
    color: black;
    cursor: pointer;
    &:invalid{
        color: gray;
    }
    &:focus {
        outline: none;
    }
    @media screen and (max-width: 544px) {
        font-size: 12px;
        height: 30px;
    }
`;

export const Option = styled.option`
    color: black;
`;

export const ContainerSelect = styled.div`
    max-width: 300px;
    width: 100%;
    height: 100%;
`;

export const Alert = styled.p`
    color: red;
    text-transform: uppercase;
    text-decoration: solid;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 2px;
    margin-left: 3px;
    width: 100%;
`;