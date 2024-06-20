import { Modal } from "antd";
import { styled } from "styled-components";

export const ModalStyle = styled(Modal)`
  font-family: 'Cabin', sans-serif;
  top: 50% !important;
  transform: translateY(-50%) !important;
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
  white-space: nowrap;
  @media screen and (max-width: 380px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
    color: black;
    font-weight: 5px;
    text-align: center;
    font-size: 24px;
    @media screen and (max-width: 380px) {
        font-size: 20px;
    }
`;